'use client';

import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-825R9NKGQD`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-825R9NKGQD');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
