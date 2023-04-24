import react from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import LegacyImage from 'next/legacy/image';
import example from '/public/inflearn.png';

const Images: NextPage = () => {
  return (
    <main>
      <hr style={{ margin: '32px 0' }} />

      <h1>next/image</h1>

      <figure>
        <img
          src="https://lecture-1.vercel.app/example.jpg"
          alt="imageimage"
          width={500}
          height={100}
          loading="lazy"
        />
        <figcaption>v13 image</figcaption>
      </figure>
      {/*statically import*/}
      <figure>
        <Image
          src={example}
          // src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          placeholder="blur"
          style={{ objectFit: 'cover' }}
        />
        <figcaption>v13 images</figcaption>
        {/*<LegacyImage src={inflearn.png} alt="example image" />*/}
      </figure>
    </main>
  );
};

export default Images;
