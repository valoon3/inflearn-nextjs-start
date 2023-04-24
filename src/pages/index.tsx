import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/header.module.scss';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '@/componnts/common/Header';
import { AiOutlineShareAlt } from 'react-icons/ai';
import Link from 'next/link';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/componnts/home/MapSection';
import { Store } from '../types/store';
import { NextPage } from 'next';
import useStores from '@/hooks/useStores';
import HeaderComponent from '@/componnts/home/Header';
import DetailSection from '@/componnts/home/DetailSection';
import { NextSeo } from 'next-seo';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <NextSeo
        title="매장 지도"
        description="Next.js 시작하기 강의를 위한 매장 지도 서비스입니다."
      />
      <HeaderComponent />
      <main style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  /** TODO: next api routes 로 불러오기 */
  const stores = (await import('@/../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
