'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LatestBlogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch posts from API
    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("https://mythribuilders.com/blog-dashboard/get-blog");
                if (!res.ok) throw new Error("Failed to fetch");
                let data = await res.json();

                // Sort by date descending (latest first)
                data.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Take top 3 latest posts
                setPosts(data.slice(0, 3));
            } catch (err) {
                console.error("API Fetch Error:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) {
        return <p className="text-center py-5">Loading latest blogs...</p>;
    }

    return (
        <section className="px-md-5 px-3 theme-bg-dark blog py-5">
            <h2 className="text-center theme-color-light">LATEST BLOGS</h2>
            <div className="blog-grid">
                {posts.map((post) => (
                    <div key={post.slug} className="blog-card theme-bg-light">
                        <Image
                            src={`https://mythribuilders.com/blog-dashboard/public/${post.image}`}
                            alt={post.title}
                            loading="lazy"
                            width={578}
                            height={200}
                            style={{ minHeight: "250px", objectFit: "cover" }}
                            className="w-100 h-auto object-cover"
                        />
                        <div className="content">
                            <Link href={`/blogs/${post.slug}`} className="text-decoration-none">
                                <h4 className="theme-color-dark text-center cursor-pointer fs-4" style={{ fontWeight: "600" }}>
                                    {post.title}
                                </h4>
                            </Link>
                            <p className="theme-color-dark text-justify">{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
