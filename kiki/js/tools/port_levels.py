"""Capture trusted original level construction as static JS (Python 3, no dependencies).

Run from the repository root: python3 kiki/js/tools/port_levels.py LEVEL_ID.
Only the checked-in Python level sources are executed. Callbacks are recorded,
never run; this captures initial geometry, not the original game simulation.
"""
import ast
import json
import random
import re
import sys
from pathlib import Path
from types import SimpleNamespace

ROOT = Path(__file__).resolve().parents[3]


class Rotation(str):
    def __mul__(self, other):
        return Rotation(str(self) + '*' + str(other))


class LegacyDivision(ast.NodeTransformer):
    def visit_BinOp(self, node):
        self.generic_visit(node)
        if isinstance(node.op, ast.Div):
            return ast.copy_location(ast.Call(ast.Name('py2div', ast.Load()), [node.left, node.right], []), node)
        return node


def execute(source, env):
    source = source.expandtabs(8).replace('<>', '!=')
    tree = LegacyDivision().visit(ast.parse(source))
    exec(compile(ast.fix_missing_locations(tree), '<original level>', 'exec'), env)


def pos(*args):
    values = args if len(args) == 3 else args[0]
    if isinstance(values, SimpleNamespace):
        return values
    return SimpleNamespace(**dict(zip('xyz', values)))


def xyz(p):
    return vars(pos(p)).copy()


class Event:
    def __init__(self, obj, name):
        self.obj, self.name = obj, name

    def addAction(self, action):
        self.obj.events.append(self.name)


class Item:
    def __init__(self, kind, *args):
        self.data = {'type': kind}
        self.events = []
        if kind in ('gear', 'generator', 'motorGear', 'motorCylinder', 'wire'):
            self.data['face'] = args[0] if args else 'PZ'
        if kind == 'wire':
            self.data['connections'] = args[1] if len(args) > 1 else 15
        if kind == 'stone':
            if args and args[0] is not None:
                self.data['color'] = args[0]
            if len(args) > 1:
                self.data['slippery'] = bool(args[1])

    def getEventWithName(self, name):
        return Event(self, name)

    def setActive(self, active):
        self.data['active'] = bool(active)


class World:
    CAMERA_INSIDE = 'inside'

    def __init__(self, size, player, seed):
        self.size = pos(size)
        self.player = xyz(player)
        self.objects = []
        self.rng = random.Random(seed)
        self.camera = None

    def getSize(self):
        return self.size

    def decenter(self, *args):
        p = pos(*args)
        return pos(*(getattr(p, k) + getattr(self.size, k) // 2 for k in 'xyz'))

    def getOccupantAtPos(self, p):
        p = xyz(p)
        return next((o for o in reversed(self.objects) if o.data['coordinates'] == p and o.data['type'] not in ('wire', 'light')), None)

    def isUnoccupiedPos(self, p):
        p = xyz(p)
        return all(0 <= p[k] < getattr(self.size, k) for k in 'xyz') and self.getOccupantAtPos(pos(p.values())) is None

    def addObjectAtPos(self, obj, p):
        obj.data['coordinates'] = xyz(p)
        if obj.data['type'] not in ('wire', 'light'):
            self.removeObject(self.getOccupantAtPos(p))
        self.objects.append(obj)

    def removeObject(self, obj):
        if obj is not None:
            self.objects.remove(obj)

    deleteObject = removeObject

    def addObjectLine(self, factory, start, end):
        a, b = xyz(start), xyz(end)
        diff = [b[k] - a[k] for k in 'xyz']
        count = max(map(abs, diff))
        for i in range(count):
            p = pos(*(int(a[k] + i * diff[n] / count) for n, k in enumerate('xyz')))
            if self.isUnoccupiedPos(p):
                self.addObjectAtPos(eval(factory, self.env) if isinstance(factory, str) else factory(), p)

    def addObjectPoly(self, factory, points, close=1):
        points = list(points) + ([points[0]] if close else [])
        for a, b in zip(points, points[1:]):
            self.addObjectLine(factory, a, b)

    def setObjectRandom(self, obj):
        for _ in range(100000):
            p = pos(*(self.rng.randrange(getattr(self.size, k)) for k in 'xyz'))
            if self.isUnoccupiedPos(p):
                self.addObjectAtPos(obj, p)
                return
        raise RuntimeError('No free random cell')

    def setCameraMode(self, mode):
        self.camera = mode


def capture(name):
    source = (ROOT / 'kiki/py/levels' / (name + '.py')).read_text()
    env = {'level_dict': {}, 'KikiPos': pos, 'KColor': lambda *args: list(args),
           'continuous': lambda callback: callback, 'once': lambda callback: callback,
           'py2div': lambda a, b: a // b if isinstance(a, int) and isinstance(b, int) else a / b,
           'range': lambda *args: range(*(int(a) for a in args)),
           'KVector': lambda *args: args,
           'KQuaternion': SimpleNamespace(rotationAroundVector=lambda angle, axis: Rotation('rot' + 'xyz'[axis.index(1)] + str(angle))),
           'sys': SimpleNamespace(), 'KConsole': None, 'neutron_scheme': {}}
    for axis in 'xyz':
        for angle in (90, 180, 270):
            env[f'rot{axis}{angle}'] = Rotation(f'rot{axis}{angle}')
    env['rot0'] = Rotation('rot0')
    env['roty0'] = Rotation('rot0')
    env['KikiFace'] = SimpleNamespace(**{k: ('P' + k if len(k) == 1 else k) for k in ('X', 'Y', 'Z', 'PX', 'PY', 'PZ', 'NX', 'NY', 'NZ')})
    for kind in ('Wall', 'Stone', 'WireStone', 'Wire', 'Switch', 'Gear', 'Generator', 'MotorGear', 'MotorCylinder', 'Bomb', 'Mutant', 'Light'):
        env['Kiki' + kind] = lambda *args, kind=kind: Item(kind[0].lower() + kind[1:], *args)
    env['KikiWire'].VERTICAL = 5
    env['KikiWire'].HORIZONTAL = 10
    execute(source, env)
    level = env['level_dict'][name]
    player = dict(level['player'])
    world = World(level['size'], (0, 0, 0), name)
    player['coordinates'] = xyz(player.get('coordinates', world.decenter(player.get('position', (0, 0, 0)))))
    player.pop('position', None)
    world.player = player['coordinates']
    env['world'] = world
    world.env = env
    if isinstance(level['create'], str):
        execute(level['create'], env)
    else:
        level['create']()
    exits = []
    for e in level['exits']:
        exits.append({'clone': {k: bool(v) if k == 'active' else v for k, v in e.items() if k not in ('position', 'coordinates', 'world')},
                      'at': [xyz(e.get('coordinates', world.decenter(e.get('position', (0, 0, 0)))))]})
    groups = {}
    for obj in world.objects:
        data = dict(obj.data)
        p = data.pop('coordinates')
        if obj.events:
            data['sourceEvents'] = sorted(set(obj.events))
        key = json.dumps(data, sort_keys=True)
        groups.setdefault(key, {'clone': data, 'at': []})['at'].append(p)
    result = {'port_status': 'being-ported', 'portNotes': ['Geometry captured; completion route not yet verified.'], 'size': xyz(level['size']), 'intro': level['intro'], 'help': level['help'], 'player': player,
              'exits': exits, 'objects': list(groups.values())}
    if world.camera:
        result['cameraMode'] = world.camera
    return result


def write(name):
    template = capture(name)
    target = ROOT / 'kiki/js/kiki_static_data.js'
    text = target.read_text()
    block = '\n  // Source capture: ' + name + '\n  levelTemplates.' + name + ' = ' + json.dumps(template, indent=2) + ';\n'
    marker = '\n  var gameItems ='
    assert marker in text
    pattern = r'\n  // Source capture: ' + re.escape(name) + r'\n.*?;\n'
    text = re.sub(pattern, '', text, flags=re.S)
    text = text.replace(marker, block + marker)
    target.write_text(text)
    print(name, sum(len(g['at']) for g in template['objects']))


if __name__ == '__main__':
    write(sys.argv[1])
