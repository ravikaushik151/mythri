// WARNING: Re-applying the global SSL certificate bypass fix.
// This is necessary because the native fetch API in Server Components
// does not reliably honor the 'agent' option for self-signed or invalid certs.
// This setting globally disables SSL verification for the process and poses a
// security risk in production. The ideal fix is on the API server side.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Base URL for API images, as images are relative paths
const API_BASE_URL = 'https://mythribuilders.com/blog-dashboard/public';

// Fetch blog by slug
async function getPost(slug) {
  const res = await fetch(
    `https://mythribuilders.com/blog-dashboard/get-blog?slug=${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // Log error if fetch fails (res.ok is false)
    console.error(`API Fetch Error for slug: ${slug}. Status: ${res.status}, StatusText: ${res.statusText}`);
    return null;
  }
  return res.json();
}

/**
 * Generates dynamic metadata (Title, Description, OG Image) for the blog post page.
 * This is an async Server Component function in Next.js App Router.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const apiResponse = await getPost(slug);

  let post = null;
  if (Array.isArray(apiResponse)) {
    // Find the specific post object in the array that matches the slug
    post = apiResponse.find(p => p.slug === slug);
  } else if (apiResponse) {
    // Fallback: If it's not an array, assume it's the post object itself
    post = apiResponse;
  }

  if (!post) {
    return {
      title: 'Blog Post Not Found | Mythri Builders',
      description: 'The requested blog post could not be found.',
    };
  }

  // Construct the full image URL for OpenGraph/Twitter Cards
  const imageUrl = post.image ? `${API_BASE_URL}${post.image}` : null;

  return {
    // Primary Meta Tags
    title: post.meta_title || post.title || 'Mythri Builders Blog',
    description: post.description || post.excerpt || 'Read the latest updates from Mythri Builders.',
    keywords: post.keywords ? post.keywords.split(',').map(k => k.trim()) : [],

    // Canonical URL
    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    // OpenGraph (Social Media) Metadata
    openGraph: {
      title: post.meta_title || post.title,
      description: post.description || post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Mythri Builders'],
      images: imageUrl ? [
        {
          url: imageUrl,
          alt: post.title,
        }
      ] : [],
    },

    // Twitter Card Metadata
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: post.meta_title || post.title,
      description: post.description || post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}


export default async function BlogPost({ params }) {
  // FIX: params must be awaited before accessing its properties in an async server component.
  const { slug } = await params;

  const apiResponse = await getPost(slug);

  // FIX: API returns an array of posts, so we must find the correct post by slug.
  let post = null;

  if (Array.isArray(apiResponse)) {
    // Find the specific post object in the array that matches the slug
    post = apiResponse.find(p => p.slug === slug);
  } else if (apiResponse) {
    // Fallback: If it's not an array, assume it's the post object itself
    post = apiResponse;
  }

  if (!post) {
    console.warn(`Post not found or API returned null/empty for slug: ${slug}. Check server logs for API errors.`);
    notFound();
  }

  // The temporary console log is removed now that data structure is confirmed.

  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/blog-page-header.jpg"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="masterpiece"
              />
              <div className="overlay2">
                <div className="text-white d-block">
                  <p className="text-center d-block fs-1 mb-0 text-uppercase">Blog</p>
                  <p className="text-center d-block fs-6">
                    <Link className="text-white text-decoration-none" href="/">Home</Link> / Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding theme-bg-light" style={{ marginTop: '0px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">

              {/* Conditional rendering added here to fix the empty src warning */}
              {post.image && post.image !== "" && (
                <Image
                  src={`${API_BASE_URL}${post.image}`} // Now using the constant for base URL
                  className="w-100"
                  alt={post.title}
                  width={1296}
                  height={607}
                />
              )}
              {/* End of conditional rendering block */}

              <h2 className="text-main fs-2 fw-bold my-4 theme-color-dark">
                {post.title}
              </h2>

              <div
                className="theme-color-dark py-3"
                dangerouslySetInnerHTML={{
                  __html: post?.content ? post.content : ""
                }}
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}