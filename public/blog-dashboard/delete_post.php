<?php
require 'functions.php';
$index = $_GET['index'] ?? null;

if($index !== null) {
    $posts = getPosts();
    array_splice($posts, $index, 1);
    savePosts($posts);
}

header('Location: index.php');
exit;
