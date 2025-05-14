'use client';

import { useState, useEffect } from 'react';
import PosterHero from './posterHero';
import { useImageLoadProgress } from '@/hooks/useImageLoaded';
import Image from 'next/image';
//import { useImagesLoaded } from '@/hooks/useImagesLoaded';

export default function HeroWrapper() {
  const progress = useImageLoadProgress('.hero img');
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setReveal(true), 500); // add polish
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
     <div className="relative w-screen h-screen overflow-hidden">
      { !reveal &&  (
        <div className={`${progress < 100 && "bg-black text-white"} fixed flex flex-col items-center  justify-center inset-0 z-50 transition-opacity duration-500`}>
          {/* <Image
              src="/header-text.png"
              alt="The Big Firkin Band"
              width={198.3}
              height={23.3}
              className="brightness-200 contrast-0 grayscale self-start absolute top-0 mt-4 ml-4"
            /> */}
          <p className='self-center font-title font-bold text-3xl'>{progress}</p>
        </div>
      )}
      <div
        className={`hero transition-[clip-path] duration-[1200ms] ease-in-out  ${
          reveal ? 'clip-circle-full' : 'clip-circle-zero'
        }`}
      >
        <PosterHero />
      </div>

      <style jsx global>{`
        .clip-circle-zero {
          clip-path: circle(0% at 50% 50%);
        }
        .clip-circle-full {
          clip-path: circle(150% at 50% 50%);
        }
      `}</style>
    </div>
  );
}