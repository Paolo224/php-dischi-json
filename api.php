<?php

$dischiJason = file_get_contents(__DIR__ . "/dischi.json");
$dischiJason = json_decode($dischiJason, true);

if ($dischiJason == null) {
    $dischiJason = [];
}

header('Content-Type: application/json');
echo json_encode($dischiJason);
