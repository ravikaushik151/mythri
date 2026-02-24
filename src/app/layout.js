// app/layout.js
import './globals.css';
import 'swiper/swiper-bundle.css';
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientWrapper from './components/ClientWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryDrawer from './components/EnquiryDrawer';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { EnquiryProvider } from './components/EnquiryContext';


export const metadata = {
  title: 'Mythri Builders | Top Builders in Bangalore',
  description: 'Mythri Builders is trusted top builders in Bangalore, offering well-planned 2 & 3BHK apartments with strong connectivity, amenities & long-term value.',
  keywords: 'Mythri Builders,Mythri Builders Bangalore, Top Builders In Bangalore, Best Builders In Bangalore',

  alternates: {
    canonical: 'https://mythribuilders.com/', // **UPDATE THIS DOMAIN**
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-page="123456">
      <head>
        <link rel="icon" type="image/png" href="/fevicon.png" />
        <link rel="shortcut icon" type="image/png" href="/fevicon.png" />
        <link rel="apple-touch-icon" href="/fevicon.png" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* ✅ Correct Google Font link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        {/* 🔥 Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NGW9RJXH');`}
        </Script>
        {/* 🔥 Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MV8XKRBN');`}
        </Script>
      </head>
      <body>
        {/* 🔥 Google Tag Manager (noscript) - required */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGW9RJXH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* 🔥 Google Tag Manager (noscript) - required */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MV8XKRBN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ClientWrapper>
          <div id="layout-wrapper">
            <Header />
            <EnquiryProvider>
    {children}
            <EnquiryDrawer />
            </EnquiryProvider>
        
            <Footer />
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
