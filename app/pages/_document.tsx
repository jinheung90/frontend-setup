import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
        <Script
          src="https://cdn.iamport.kr/v1/iamport.js"
          strategy="beforeInteractive"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
