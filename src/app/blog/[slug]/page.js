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
// Ensure this path is correct for your images.
const API_BASE_URL = 'https://mythribuilders.com/blog-dashboard/public';

// --- Helper Functions ---

/**
 * Fetches all blog posts (no slug parameter) or a specific post (with slug parameter).
 * @param {string} [slug] - Optional slug for a single post.
 * @returns {Promise<Array | Object | null>} The API response data.
 */
async function getPost(slug = null) {
  const url = slug 
    ? `https://mythribuilders.com/blog-dashboard/get-blog?slug=${slug}`
    : `https://mythribuilders.com/blog-dashboard/get-blog`;

  const res = await fetch(url, {
    // FIX: Removed dynamic fetching options like 'cache: "no-store"' or 'revalidate: 0'.
    // This allows static export (output: 'export') to proceed by using default build-time caching.
  });

  if (!res.ok) {
    console.error(`API Fetch Error for URL: ${url}. Status: ${res.status}, StatusText: ${res.statusText}`);
    return null;
  }
  return res.json();
}

// --- Next.js Required Functions ---

/**
 * FIX: Generates the list of static paths for all possible blog posts.
 * This is REQUIRED for `output: 'export'` with dynamic routes to resolve the build error.
 */
export async function generateStaticParams() {
    // Fetch ALL posts at build time
    const apiResponse = await getPost(null); 

    if (!apiResponse || !Array.isArray(apiResponse)) {
        console.warn("generateStaticParams: API did not return an array. Returning empty array.");
        return [];
    }
    
    // Return an array of objects, each containing the 'slug' property
    return apiResponse.map((post) => ({
        slug: post.slug,
    }));
}


/**
 * Generates dynamic metadata (Title, Description, OG Image) for the blog post page.
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  const apiResponse = await getPost(slug);

  let post = null;
  if (Array.isArray(apiResponse)) {
    post = apiResponse.find(p => p.slug === slug);
  } else if (apiResponse) {
    post = apiResponse;
  }

  if (!post) {
    return {
      title: 'Blog Post Not Found | Mythri Builders',
      description: 'The requested blog post could not be found.',
    };
  }

  // Construct the full image URL
  const imageUrl = post.image ? `${API_BASE_URL}${post.image.startsWith('/') ? post.image : '/' + post.image}` : null;

  return {
    title: post.meta_title || post.title || 'Mythri Builders Blog',
    description: post.description || post.excerpt || 'Read the latest updates from Mythri Builders.',
    keywords: post.keywords ? post.keywords.split(',').map(k => k.trim()) : [],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.description || post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Mythri Builders'],
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : [],
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: post.meta_title || post.title,
      description: post.description || post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// --- Main Server Component ---

export default async function BlogPost({ params }) {
  const { slug } = params;

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
    console.warn(`Post not found or API returned null/empty for slug: ${slug}.`);
    // Correctly triggers the not-found page
    notFound(); 
  }

  // Final check and construction of the post image URL
  const postImageUrl = post.image 
    ? `${API_BASE_URL}${post.image.startsWith('/') ? post.image : '/' + post.image}` 
    : null;

  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/blog-page-header.jpg"
                height={1920}
                width={2880}
                className="img-fluid masterpiece"
                alt="Blog Page Header"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
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

              {/* Blog Post Image: Conditional rendering prevents error if 'image' is null/empty */}
              {postImageUrl && (
                <Image
                  src={postImageUrl}
                  className="w-100"
                  alt={post.title}
                  width={1296}
                  height={607}
                  style={{ objectFit: 'cover' }}
                />
              )}

              <h1 className="text-main fs-2 fw-bold my-4 theme-color-dark">
                {post.title}
              </h1>

              {/* Display Post Content using dangerouslySetInnerHTML */}
              <div
                className="theme-color-dark py-3 blog-content"
                dangerouslySetInnerHTML={{
                  __html: post?.content ? post.content : "<p>No content available for this post.</p>"
                }}
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}