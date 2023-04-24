import { Html, Head, Main, NextScript } from 'next/document';

// _document 파일은 사용자가 직접 html head 와 body tag 에 관해 관여하고싶을 때 사용
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
