import Image from "next/image";
import Link from "next/link";
import { posts } from "../data/posts"; // ✅ path apne project ke hisaab se adjust karo

export default function LatestBlogs() {
    // Top 3 posts nikal lo
    const topPosts = posts.slice(0, 3);

    return (
        <section className="px-md-5 px-3 theme-bg-dark blog">
            <h2 className="text-center theme-color-light">LATEST BLOGS</h2>
            <div className="blog-grid">
                {topPosts.map((post) => (
                    <div key={post.slug} className="blog-card theme-bg-light">
                        <Image
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            width={578}
                            height={200}
                            style={{ minHeight: "250px", objectFit: "cover" }}
                            className="w-100 h-auto object-cover"
                        />
                        <div className="content">
                            {/* Agar detail page banana ho to Link use karo */}
                            <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                                <h4 className="theme-color-dark text-center cursor-pointer fs-4" style={{ fontWeight: "600" }}>
                                    {post.title}
                                </h4>
                            </Link>
                            <p className="theme-color-dark">{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
