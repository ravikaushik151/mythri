<?php
require 'functions.php';

$posts = getPosts();

// Preserve original index
foreach ($posts as $i => &$post) {
    $post['_originalIndex'] = $i;
}
unset($post);

// Sort
usort($posts, fn($a,$b)=>strtotime($b['date']) - strtotime($a['date']));
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Blog Dashboard</title>

<link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
</noscript>

<style>
    img.thumb {
        width: 70px;
        height: 50px;
        object-fit: cover;
        border-radius: 4px;
    }
</style>
</head>
<body>

<div class="container py-5">

    <h1 class="mb-4">Blog Dashboard</h1>

    <a href="add_edit_post.php" class="btn btn-primary mb-3">+ Add New Post</a>

    <!-- 🔍 Search Filter -->
    <input 
        type="text" 
        id="searchInput" 
        class="form-control mb-3" 
        placeholder="Search posts by title, slug, or date..."
        onkeyup="filterTable()"
    >

    <table class="table table-striped" id="postsTable">
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
        <?php foreach($posts as $index => $post): ?>
            <tr>
                <td>
                    <?php if(!empty($post['image'])): ?>
                        <img src="public<?= htmlspecialchars($post['image']) ?>" class="thumb" alt="">
                    <?php else: ?>
                        <span class="text-muted">No image</span>
                    <?php endif; ?>
                </td>

                <td><?= htmlspecialchars($post['title']) ?></td>
                <td><?= htmlspecialchars($post['slug']) ?></td>
                <td><?= htmlspecialchars($post['date']) ?></td>

                <td>
                    <a href="add_edit_post.php?edit=<?= $post['_originalIndex'] ?>" class="btn btn-sm btn-outline-primary">Edit</a>
                    <a href="delete_post.php?index=<?= $post['_originalIndex'] ?>" class="btn btn-sm btn-outline-danger" onclick="return confirm('Delete this post?')">Delete</a>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>

</div>


<script>
// 🔍 Search Filter Script
function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#postsTable tbody tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}
</script>

</body>
</html>
