<?php
require 'functions.php';

$editIndex = $_GET['edit'] ?? null;
$post = $editIndex !== null ? getPostByIndex($editIndex) : null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $posts = getPosts();

    $data = [
        'slug' => $_POST['slug'],
        'title' => $_POST['title'],
        'h1' => $_POST['h1'],
        'meta_title' => $_POST['meta_title'],
        'description' => $_POST['description'],
        'image' => $post['image'] ?? '',
        'mobile_image' => $post['mobile_image'] ?? '',
        'excerpt' => $_POST['excerpt'],
        'content' => $_POST['content'],
        'keywords' => $_POST['keywords'],
        'category' => $_POST['category'],
        'date' => $_POST['date']
    ];

    // Handle image upload
    if (!empty($_FILES['image']['name'])) {
        $data['image'] = uploadImage($_FILES['image']);
    }
    // Mobile image upload 👇
    if (!empty($_FILES['mobile_image']['name'])) {
        $data['mobile_image'] = uploadImage($_FILES['mobile_image']);
    }

    if ($editIndex !== null) {
        $posts[$editIndex] = $data;
    } else {
        $posts[] = $data;
    }

    savePosts($posts);
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?= $post ? 'Edit Post' : 'Add Post' ?></title>
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    </noscript>
</head>

<body>
    <div class="container py-5">
        <h1 class="mb-4"><?= $post ? 'Edit Post' : 'Add New Post' ?></h1>
        <form method="post" enctype="multipart/form-data">
            <div class="mb-3">
                <label class="form-label">Slug</label>
                <input class="form-control" name="slug" required value="<?= htmlspecialchars($post['slug'] ?? '') ?>">
            </div>
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input class="form-control" name="title" required value="<?= htmlspecialchars($post['title'] ?? '') ?>">
            </div>
            <div class="mb-3">
                <label class="form-label">H1</label>
                <input class="form-control" name="h1" required value="<?= htmlspecialchars($post['h1'] ?? '') ?>">
            </div>
            <div class="mb-3">
                <label class="form-label">Meta Title</label>
                <input class="form-control" name="meta_title" value="<?= htmlspecialchars($post['meta_title'] ?? '') ?>">
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea class="form-control" name="description"><?= htmlspecialchars($post['description'] ?? '') ?></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Excerpt</label>
                <textarea class="form-control" name="excerpt"><?= htmlspecialchars($post['excerpt'] ?? '') ?></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Content</label>
                <textarea id="editor" name="content" class="form-control" rows="3"><?= htmlspecialchars($post['content'] ?? '') ?></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Keywords</label>
                <input class="form-control" name="keywords" value="<?= htmlspecialchars($post['keywords'] ?? '') ?>">
            </div>
            <div class="mb-3">
                <label class="form-label">Category</label>
                <select class="form-select" name="category">
                    <option value="real estate" <?= ($post['category'] ?? '') === 'real estate' ? 'selected' : '' ?>>Real Estate</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Date</label>
                <input type="date" class="form-control" name="date" value="<?= htmlspecialchars($post['date'] ?? date('Y-m-d')) ?>">
            </div>
            <div class="mb-3">
                <label class="form-label">Image</label>
                <input type="file" class="form-control" name="image">
                <?php if (!empty($post['image'])): ?>
                    <img src="public<?= $post['image'] ?>" width="120" class="mt-2">
                <?php endif; ?>
            </div>
            <div class="mb-3">
                <label class="form-label">Mobile Image</label>
                <input type="file" class="form-control" name="mobile_image">

                <?php if (!empty($post['mobile_image'])): ?>
                    <img src="public<?= $post['mobile_image'] ?>" width="120" class="mt-2">
                <?php endif; ?>
            </div>
            <button class="btn btn-success"><?= $post ? 'Update Post' : 'Add Post' ?></button>
            <a href="index.php" class="btn btn-secondary">Cancel</a>
        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>
    <script>
        let editorInstance;
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(editor => {
                editorInstance = editor;
            })
            .catch(error => {
                console.error(error);
            });

        document.querySelector('form').addEventListener('submit', function() {
            document.querySelector('textarea[name="content"]').value = editorInstance.getData();
        });
    </script>
</body>

</html>