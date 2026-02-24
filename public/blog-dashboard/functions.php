<?php
define('POSTS_FILE', __DIR__ . '/data/posts.json');

function getPosts() {
    if (!file_exists(POSTS_FILE)) return [];
    $data = file_get_contents(POSTS_FILE);
    return json_decode($data, true);
}

function savePosts($posts) {
    file_put_contents(POSTS_FILE, json_encode($posts, JSON_PRETTY_PRINT));
}

function getPostByIndex($index) {
    $posts = getPosts();
    return $posts[$index] ?? null;
}

function uploadImage($file) {
    $targetDir = __DIR__ . '/public/uploads/';
    if (!is_dir($targetDir)) mkdir($targetDir, 0777, true);

    $filename = time() . '_' . basename($file['name']);
    $targetFile = $targetDir . $filename;

    if (move_uploaded_file($file['tmp_name'], $targetFile)) {
        return '/uploads/' . $filename;
    }
    return '';
}
?>
