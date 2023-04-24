import type { Store } from '@/types/store';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import useCurrentStore from '@/hooks/useCurrentStore';
import { inspect } from 'util';
import styles from '@/styles/detail.module.scss';
import DetailHeader from '@/componnts/home/DetailHeader';
import DetailContent from '@/componnts/home/DetailContent';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };

  return (
    <>
      {/*<NextSeo*/}
      {/*  title={store.name}*/}
      {/*  description="Next.js 시작하기 강의를 위한 매장 상세 페이지입니다."*/}
      {/*  canonical={`https://inflearn-nextjs.vercel.app/${store.name}`}*/}
      {/*  openGraph={{*/}
      {/*    url: `https://inflearn-nextjs.vercel.app/${store.name}`,*/}
      {/*  }}*/}
      {/*/>*/}
      <div className={`${styles.detailSection} ${styles.expanded}`}>
        <DetailHeader
          currentStore={store}
          expanded={expanded}
          onClickArrow={goToMap}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
// [name] 을 채우는 이름을 정한다.
// build 과정에서 pre-rendering
// 새로운 매장이 추가될 때마다 build 를 다시할 수 없기때문에
// 리턴 콜백에서 fallback 속성을 추가해서 설정해 준다. => 공식문서 확인
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  // 404 redirect
  // if (!store) {
  //   return { notFound: true }; // 404 page
  // }

  return { props: { store } };
};
