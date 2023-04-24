import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter();

  // next/Link 처럼 lazy 로 구현하기 위해서는
  useEffect(() => {
    // router.prefetch(url 경로, as 동적 경로, options);
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>

      {/* 넥스트 링크 수업 */}
      {/*<div style={{ height: '200vh' }} />*/}

      {/*<Link href="/section1/getStaticProps" style={{ color: 'red' }}>*/}
      {/*  /getStaticProps*/}
      {/*</Link>*/}
      {/*/!* SSG (Static site Generation) 방식 *!/*/}
    </main>
  );
}
