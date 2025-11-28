'use server';

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { posts } from "../data/posts";

const POSTS_PATH = path.join(process.cwd(), "src", "app", "data", "posts.js");

function writePostsToFile(updated) {
    const fileData = `export const posts = ${JSON.stringify(updated, null, 2)};\n`;
    fs.writeFileSync(POSTS_PATH, fileData, "utf8");
}

// Generate clean slug
function generateSlug(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// Add Post
export async function addPost(formData) {
    const title = formData.get("title");
    let slug = formData.get("slug");

    // Auto slug if empty
    if (!slug || slug.trim() === "") {
        slug = generateSlug(title);
    }

    const newPost = {
        slug,
        title,
        excerpt: formData.get("excerpt"),
        content: formData.get("content"),
        date: new Date().toISOString()
    };

    const updated = [...posts, newPost];
    writePostsToFile(updated);

    revalidatePath("/dashboard");
}

// Edit Post
export async function editPost(formData) {
    const index = parseInt(formData.get("index"));

    const updatedPost = {
        slug: generateSlug(formData.get("title")),
        title: formData.get("title"),
        excerpt: formData.get("excerpt"),
        content: formData.get("content"),
        date: new Date().toISOString()
    };

    const updated = [...posts];
    updated[index] = updatedPost;

    writePostsToFile(updated);
    revalidatePath("/dashboard");
}

// Delete Post
export async function deletePost(index) {
    const updated = posts.filter((_, i) => i !== index);

    writePostsToFile(updated);
    revalidatePath("/dashboard");
}
