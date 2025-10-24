// app/components/ClientWrapper.js
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ClientWrapper({ children }) {
  useEffect(() => {
   
  }, []);

  return (
    <>
      {children}
    
      {/* External Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="afterInteractive"
      />
      {/* <Script
        src="/js/main.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Custom interactions loaded')}
        onError={(e) => console.error('Failed to load interactions', e)}
      /> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
