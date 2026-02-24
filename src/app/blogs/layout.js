// app/blog/layout.js

export const metadata = {
    // Page Title
    title: "Real Estate Trends & Insights by Mythri Builders Bangalore",

    // Page Description
    description: "Real estate trends & insights by Mythri Builders with updates, reviews customer experiences & guidance for homebuyers exploring projects in Bangalore.",

    // Keywords (comma-separated for SEO)
    keywords: "Mythri Builders Reviews,Mythri Builders Bangalore, Customer feedback,",

    // Canonical URL (IMPORTANT: Update your actual domain)
    alternates: {
        canonical: 'https://mythribuilders.com/blogs/', // **UPDATE THIS DOMAIN**
    },
};

export default function BlogLayout({ children }) {
    // This layout simply passes the children (your Blog component) through
    return <>{children}</>;
}