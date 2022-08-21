import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 캐시를 바로 만료시킴. */}
        <meta httpEquiv="Expires" content="-1" /> 
        {/* 페이지 로드시마다 페이지를 캐싱하지 않음. (HTTP 1.0) */}
        <meta httpEquiv="Pragma" content="no-cache" /> 
        {/* 페이지 로드시마다 페이지를 캐싱하지 않음. (HTTP 1.1) */}
        <meta httpEquiv="Cache-Control" content="no-cache" /> 
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"></meta>


        {/* 오픈그래프 */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Camping Blog" />
        <meta property="og:title" content="DongGyun Camping Blog site" />
        <meta property="og:description" content="Camping Blog은 Next.js 기반 SSG 사이트 입니다. 😃" />
        <meta property="og:image" content="/main.png" />
        <meta property="og:url" content="#" />

        {/* 트위터 카드 */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Camping Blog" />
        <meta property="twitter:title" content="DongGyun Camping Blog site" />
        <meta property="twitter:description" content="Camping Blog은 Next.js 기반 SSG 사이트 입니다. 😃" />
        <meta property="twitter:image" content="/main.png" />
        <meta property="twitter:url" content="#" />
        {/* 구글폰트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}