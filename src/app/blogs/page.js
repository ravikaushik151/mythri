'use client';
import Head from 'next/head'; // 👈 Import the Head component
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import "./../blog.css";

// ROBUST MANUAL DATE PARSING FUNCTION (Ensures correct sorting)
const parsePostDate = (dateString) => {
    // Expected format: "YYYY-MM-DD HH:MM:SS"
    if (!dateString) return new Date(0);
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second] = timePart ? timePart.split(':').map(Number) : [0, 0, 0];

    // Use UTC for reliability (Month is 0-indexed, so subtract 1)
    const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

    return isNaN(date.getTime()) ? new Date(0) : date;
};


export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const postsPerPage = 6;

    // Fetch blog data from PHP API
    useEffect(() => {
        fetch("https://mythribuilders.com/blog-dashboard/get-blog")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                return res.json();
            })
            .then(data => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("API Fetch Error:", err);
                setError("Unable to load blog posts at this time.");
                setIsLoading(false);
            });
    }, []);

    // Filter by title
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort by date (Uses the robust date parser)
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        const dateA = parsePostDate(a.date);
        const dateB = parsePostDate(b.date);
        return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

    // Paginate
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

    // Handler for page changes
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo(0, 0);
        }
    };

    let content;
    if (isLoading) {
        content = <div className="col-12 text-center py-5"><p>Loading blog posts...</p></div>;
    } else if (error) {
        content = <div className="col-12 text-center py-5"><p className='text-danger fw-bold'>{error}</p></div>;
    } else if (paginatedPosts.length === 0) {
        content = <div className="col-12 text-center py-5"><p>No blog posts found matching your search.</p></div>;
    } else {
        content = paginatedPosts.map((post) => (
            <div className="col-md-4 py-3" key={post.slug}>
                <div className="services-item shine-animate-item shadow-sm py-3 px-3 theme-bg-dark">
                    <div className="services-thumb">
                        <Link target='_blank' href={`/blogs/${post.slug}`}>
                            {post.mobile_image ? (
                                <>
                                    <Image
                                        src={`https://mythribuilders.com/blog-dashboard/public/${post.mobile_image}`}
                                        className="img-fluid d-md-none w-100"
                                        alt={post.title}
                                        width={500}
                                        height={500}
                                        style={{ minHeight: "250px", objectFit: "cover" }}
                                    />
                                    <Image
                                        src={`https://mythribuilders.com/blog-dashboard/public/${post.image}`}
                                        className="img-fluid d-none d-md-block w-100"
                                        alt={post.title}
                                        width={500}
                                        height={500}
                                        style={{ minHeight: "250px", objectFit: "cover" }}
                                    />
                                </>
                            ) : (
                                <Image
                                    src={`https://mythribuilders.com/blog-dashboard/public/${post.image}`}
                                    className="img-fluid w-100"
                                    alt={post.title}
                                    width={500}
                                    height={500}
                                    style={{ minHeight: "250px", objectFit: "cover" }}
                                />
                            )}
                        </Link>
                    </div>
                    <div className="services-content blogs">
                        <h6 className="title my-3 text-center fw-bold text-white">
                            <Link target='_blank' className='text-white fw-bold text-decoration-none theme-color-light fs-4' href={`/blogs/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h6>
                        <p className='mb-0 theme-color-light text-justify'>{post.excerpt}</p>
                        <div className="text-center py-3 my-3 small">
                            <Link target='_blank' href={`/blogs/${post.slug}`} className="btn theme-bg-light">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <>
            {/* 💡 SEO METADATA USING NEXT/HEAD 💡 */}
            <Head>
                <title>Real Estate Trends & Insights by Mythri Builders Bangalore</title>
                <meta name="description" content="Real estate trends & insights by Mythri Builders with updates, reviews customer experiences & guidance for homebuyers exploring projects in Bangalore." />
                <meta name="keywords" content="Mythri Builders Reviews, Mythri Builders Bangalore, Customer feedback," />
                <link rel="canonical" href="https://mythribuilders.com/blog/" /> {/* **UPDATE THIS DOMAIN** */}
            </Head>

            {/* Banner Section */}
            <div id="carouselExampleDark" className="header-section">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="image-container">
                            <Image src="/images/blog_new.webp" height={2880} width={1920} className='img-fluid masterpiece ' alt="masterpiece" style={{ objectPosition: '15% 100%' }} />
                            <div className="overlay2 ">
                                <div className="text-white d-block">
                                    <h1 className="text-center d-block fs-1 mb-3 text-uppercase"> Blogs</h1>
                                    <p className="text-center d-block fs-6 ">
                                        <Link className="text-white text-decoration-none" href="https://mythribuilders.com/"> Home</Link> / Blogs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <section className="section-padding theme-bg-light blog-main-page" style={{ marginTop: '0px' }}>
                <div className="container">

                    {/* Heading */}
                    <div className="row justify-content-end mb-4">
                        <div className='col-md-12'>
                            <h2 className="text-center mb-2">INSIGHTS BY MYTHRI BUILDERS</h2>
                            <p className='text-center'>Stay informed with stories, guides, and project insights from Mythri Builders Bangalore, helping you make confident home-buying decisions.</p>
                        </div>
                    </div>

                    {/* Blog Cards */}
                    <div className="row">
                        {content}
                    </div>

                    {/* Pagination */}
                    {!isLoading && !error && paginatedPosts.length > 0 && (
                        <div className="row mt-4">
                            <div className="col text-center">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <li key={i} className={`page-item mx-1 ${currentPage === i + 1 ? 'active' : ''}`} onClick={() => handlePageChange(i + 1)}>
                                                <button className="page-link btn text-light rounded-0 theme-bg-dark">{i + 1}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}