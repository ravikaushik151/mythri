// WARNING: Re-applying the global SSL certificate bypass fix.
// Ideally, fix the SSL certificate on the API server.
if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_IGNORE_SSL) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// --- Constants ---
const API_BASE_URL = 'https://mythribuilders.com/blog-dashboard/public';
const API_ENDPOINT = 'https://mythribuilders.com/blog-dashboard/get-blog';

// --- Helper Functions ---

/**
 * Helper to construct the full image URL.
 */
const getFullImageUrl = (imagePath) => {
  if (!imagePath) return null;
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${API_BASE_URL}${cleanPath}`;
};

/**
 * Fetches blog data. Next.js automatically dedupes fetch requests with the same URL/options.
 */
async function fetchBlogData(slug = null) {
  const url = slug ? `${API_ENDPOINT}?slug=${slug}` : API_ENDPOINT;

  try {
    const res = await fetch(url, {
      // 'force-cache' is default for 'output: export', but explicit here for clarity
      cache: 'force-cache',
    });

    if (!res.ok) {
      console.error(`[API Error] ${res.status}: ${res.statusText} at ${url}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`[Network Error] Failed to fetch ${url}:`, error);
    return null;
  }
}

/**
 * Normalizes the API response to find a single post object.
 * Handles cases where API returns an array or a single object.
 */
function findPostFromResponse(response, slug) {
  if (!response) return null;
  if (Array.isArray(response)) {
    return response.find((p) => p.slug === slug) || null;
  }
  return response.slug === slug ? response : null;
}

// --- Next.js Required Functions ---

export async function generateStaticParams() {
  const posts = await fetchBlogData(null);

  if (!Array.isArray(posts)) {
    console.warn("generateStaticParams: API response is not an array.");
    return [];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const apiResponse = await fetchBlogData(slug);
  const post = findPostFromResponse(apiResponse, slug);

  if (!post) {
    return {
      title: 'Post Not Found | Mythri Builders',
    };
  }

  const imageUrl = getFullImageUrl(post.image);

  return {
    title: post.meta_title || post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords?.split(',').map((k) => k.trim()),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: 'article',
    },
  };
}

// --- Main Component ---

export default async function BlogPost({ params }) {
  const { slug } = await params;

  // 1. Fetch Data
  const apiResponse = await fetchBlogData(slug);

  // 2. Extract specific post
  const post = findPostFromResponse(apiResponse, slug);

  // 3. Handle 404
  if (!post) {
    notFound();
  }

  const postImageUrl = getFullImageUrl(post.image);

  return (
    <>
      {/* Header Section */}
      <div id="carouselExampleDark" className="header-section">
        <div className='row'>
          <div className='col-md-12'>
            <div className="image-container">
              <Image src="/images/blog-page-header.webp" height={2880} width={1920} className='img-fluid masterpiece ' alt="masterpiece" style={{ objectPosition: '15% 100%' }} />
              <div className="overlay2 ">
                <div className="text-white d-block">
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase"> Blog</h1>
                  <p className="text-center d-block fs-6 ">
                    <Link className="text-white text-decoration-none" href="https://mythribuilders.com/"> Home</Link> {' / Blog'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="section-padding theme-bg-light mt-0 blog-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">

              {/* Featured Image */}
              {postImageUrl && (
                <div className="mb-4">
                  <Image
                    src={postImageUrl}
                    alt={post.title}
                    width={1296}
                    height={607}
                    className="w-100 rounded"
                    style={{ objectFit: 'cover', height: 'auto', maxHeight: '600px' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1296px"
                    priority
                  />
                </div>
              )}

              {/* Title */}
              <h1 className="text-main fs-2 fw-bold my-4 theme-color-dark">
                {post.title}
              </h1>

              {/* HTML Content */}
              <article
                className="theme-color-dark py-3 blog-content"
                dangerouslySetInnerHTML={{
                  __html: post.content || "<p>No content available.</p>"
                }}
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}