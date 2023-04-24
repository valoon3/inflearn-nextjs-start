import { NextPage } from 'next';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const Header = ({ onClickLogo, rightElements }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.flexItem}>
          <Link href="/" className={styles.box} onClick={onClickLogo}>
            <Image
              src="/inflearn.png"
              width={110}
              height={20}
              alt="인프런 로고"
            />
          </Link>
        </div>
        {rightElements && (
          <div className={styles.flexItem}>{rightElements}</div>
        )}
      </header>
    </>
  );
};

export default Header;
