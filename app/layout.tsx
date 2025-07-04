// "use client";

// import LoaderWrapper from "@/components/LoaderWrapper";
// import { LoaderProvider } from "../components/LoaderContext";
// import Script from "next/script";

// import Head from "next/head";

// import "./globals.css";

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <Head>
//         {/* ✅ Google Tag Manager */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-M89H7JR2');`,
//           }}
//         />

//         {/* ✅ gtag.js - Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-J7XD0NNPHH"
//           strategy="afterInteractive"
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-J7XD0NNPHH');
//             `,
//           }}
//         />

//         {/* ✅ LeadFeeder */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ var fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('3P1w24dmLWJamY5n');`,
//           }}
//         />
//       </Head>

//       <body className="body">
//         {/* ✅ Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-M89H7JR2"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         <LoaderProvider>
//           <LoaderWrapper>{children}</LoaderWrapper>
//         </LoaderProvider>

//         {/* <div id="google_translate_element"></div>

//         <TranslateButton /> */}

//         {/* ✅ Webflow Scripts */}
//         <Script
//           src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ea6645891c299018425dd4"
//           type="text/javascript"
//         />
//         <Script
//           src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.schunk.57d5559d2f0cd9f8.js"
//           type="text/javascript"
//         />
//         <Script
//           src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.0f246077.147b97be32273d1f.js"
//           type="text/javascript"
//         />
//       </body>
//     </html>
//   );
// }



"use client";

import LoaderWrapper from "@/components/LoaderWrapper";
import { LoaderProvider } from "../components/LoaderContext";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>GFRP-INDIA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M89H7JR2');
            `,
          }}
        />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J7XD0NNPHH"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J7XD0NNPHH');
            `,
          }}
        />

        {/* ✅ LeadFeeder */}
        <Script
          id="leadfeeder"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(ss,ex){ 
                window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; 
                (function(d,s){ 
                  var fs=d.getElementsByTagName(s)[0]; 
                  function ce(src){ 
                    var cs=d.createElement(s); 
                    cs.src=src; 
                    cs.async=1; 
                    fs.parentNode.insertBefore(cs,fs); 
                  }; 
                  ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); 
                })(document,'script'); 
              })('3P1w24dmLWJamY5n');
            `,
          }}
        />

        {/* ✅ Webflow: jQuery First */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />

        {/* ✅ Webflow Scripts (Make sure URLs match your Webflow site) */}
        <Script
          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.schunk.57d5559d2f0cd9f8.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/js/oma-solvance.0f246077.147b97be32273d1f.js"
          strategy="afterInteractive"
        />
      </head>

      <body className="body">
        {/* ✅ GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M89H7JR2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Loader Context */}
        <LoaderProvider>
          <LoaderWrapper>{children}</LoaderWrapper>
        </LoaderProvider>
      </body>
    </html>
  );
}

