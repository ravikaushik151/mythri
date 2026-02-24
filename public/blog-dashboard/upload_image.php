<?php
require 'functions.php';

header('Content-Type: application/json');

// Check if file exists
if (!isset($_FILES['image'])) {
    echo json_encode([
        'success' => false,
        'message' => 'No file uploaded.'
    ]);
    exit;
}

$file = $_FILES['image'];

// Validate image type
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

if (!in_array($file['type'], $allowedTypes)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid file type. Only JPG, PNG, and WEBP allowed.'
    ]);
    exit;
}

// Validate file size (max 5MB)
if ($file['size'] > 5 * 1024 * 1024) {
    echo json_encode([
        'success' => false,
        'message' => 'Image size should not exceed 5MB.'
    ]);
    exit;
}

// Upload file using helper function
$imagePath = uploadImage($file);

if ($imagePath !== '') {
    echo json_encode([
        'success' => true,
        'message' => 'Image uploaded successfully.',
        'path' => $imagePath
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Image upload failed.'
    ]);
}
