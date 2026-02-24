<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Path to JSON file
$jsonFile = __DIR__ . "/data/posts.json";

// Check if file exists
if (!file_exists($jsonFile)) {
    echo json_encode(["error" => "posts.json not found"]);
    exit;
}

// Get JSON content
$jsonData = file_get_contents($jsonFile);

// Decode to check if valid JSON
$data = json_decode($jsonData, true);

// If JSON invalid
if ($data === null) {
    echo json_encode(["error" => "Invalid JSON format"]);
    exit;
}

// Output JSON
echo json_encode($data);
