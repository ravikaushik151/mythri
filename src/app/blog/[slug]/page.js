// app/blog/[slug]/page.js
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../../data/posts'; // Adjust if needed

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

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
                className="img-fluid masterpiece "
                alt="masterpiece"
              />
              <div className="overlay2">
                <div className="text-white d-block">
                  <p className="text-center d-block fs-1 mb-0 text-uppercase"> Blog</p>
                  <p className="text-center d-block fs-6 ">
                    <Link className="text-white text-decoration-none" href="/"> Home</Link> / Blog
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
              <div>

                <div>
                  <Image src={post.image} className="w-100" alt={post.title} width={1296} height={607} />
                </div>
                <div className="title text-left">
                  <h2 className="text-main fs-2 fw-bold my-4 theme-color-dark">{post.title}</h2>
                </div>
                <div className="py-3">
                  <div className=' theme-color-dark' dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
