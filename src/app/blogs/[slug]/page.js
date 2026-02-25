import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts";
import FAQAccordion from "../../components/FAQAccordion";

const BASE_URL = "https://mythribuilders.com";
const BASE_IMAGE_URL = "https://mythribuilders.com/blog-dashboard/public/";

/* ---------------- STATIC PARAMS ---------------- */
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

/* ---------------- SEO METADATA ---------------- */
export async function generateMetadata({ params }) {
    // ✅ FIX: await params
    const { slug } = await params;

    const post = posts.find((p) => p.slug === slug);
    if (!post) return {};

    const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
    const imageUrl = BASE_IMAGE_URL + post.image;

    return {
        title: post.metaTitle || post.meta_title,
        description: post.description || post.description,
        keywords: post.keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.meta_title,
            description: post.description,
            url: canonicalUrl,
            type: "article",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [imageUrl],
        },
    };
}

/* ---------------- PAGE ---------------- */
export default async function BlogPost({ params }) {
    // ✅ FIX: await params
    const { slug } = await params;

    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();

    /* ✅ Clean Images */
    const cleanDesktopImage =
        typeof post.image === "string" ? post.image.trim() : "";

    const cleanMobileImage =
        typeof post.mobile_image === "string"
            ? post.mobile_image.trim()
            : "";

    /* ✅ Build URLs */
    const postImageUrl = cleanDesktopImage
        ? BASE_IMAGE_URL + cleanDesktopImage
        : "/default-blog.jpg";

    const postMobileImageUrl = cleanMobileImage
        ? BASE_IMAGE_URL + cleanMobileImage
        : postImageUrl;

    console.log("Desktop:", postImageUrl);
    console.log("Mobile:", postMobileImageUrl);

    return (
        <>
            {/* ✅ SCHEMA (ONLY IF EXISTS) */}
            {post.schema && (
                <Script
                    id="post-schema"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(post.schema),
                    }}
                />
            )}

            {post.breadcrumbSchema && (
                <Script
                    id="breadcrumb-schema"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(post.breadcrumbSchema),
                    }}
                />
            )}

            {/* ---------------- HEADER ---------------- */}
            <div id="carouselExampleDark" className="header-section blog-inner">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="image-container">
                            {/* ✅ MOBILE IMAGE */}
                            <Image
                                src={postMobileImageUrl}
                                height={1920}
                                width={1080}
                                className="img-fluid masterpiece d-md-none"
                                alt="masterpiece"
                                priority
                            />

                            {/* ✅ DESKTOP IMAGE */}
                            <Image
                                src={postImageUrl}
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece d-none d-md-block"
                                alt="masterpiece"
                                style={{ objectPosition: '15% 100%' }}
                                priority
                            />
                            {/* <div className="overlay2 ">
                                <div className="text-white d-block">
                                    <span className="text-center d-block fs-1 mb-3 text-uppercase"> Blog</span>
                                    <p className="text-center d-block fs-6 ">
                                        <Link className="text-white text-decoration-none" href="https://mythribuilders.com/"> Home</Link> / Blog
                                    </p>
                                </div>
                            </div>  */}
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------- CONTENT ---------------- */}
            <section className="section-padding blog-details pt-5">
                <div className="container">
                    <h1 className="fs-1 fw-bold ">
                        {post.title}
                    </h1>

                    <article
                        className="blog-content"
                        dangerouslySetInnerHTML={{
                            __html: post.content || "<p>No content available.</p>",
                        }}
                    />

                    {/* ✅ FAQ ACCORDION */}
                    {post.faqs && post.faqs.length > 0 && (
                        <FAQAccordion faqs={post.faqs} />
                    )}
                </div>
            </section>
        </>
    );
}
