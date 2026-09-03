<?php
$basePath = realpath(__DIR__ . "/..");
$relativePath = isset($_GET["path"]) ? $_GET["path"] : "";

if ($basePath === false || $relativePath === "" || strpos($relativePath, "\0") !== false || preg_match("#(^|/)\.\.(/|$)#", $relativePath)) {
    http_response_code(400);
    echo "false";
    exit;
}

$targetPath = $basePath . "/" . ltrim($relativePath, "/");
$targetDir = dirname($targetPath);

if (!is_dir($targetDir) && !mkdir($targetDir, 0777, true)) {
    http_response_code(500);
    echo "false";
    exit;
}

$content = file_get_contents("php://input");
if (file_put_contents($targetPath, $content) === false) {
    http_response_code(500);
    echo "false";
    exit;
}

echo "true";
?>
