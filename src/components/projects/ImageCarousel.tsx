'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const ImageCarousel = ({ imgs }: { imgs: string[] }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((pv) => {
        if (pv === imgs.length - 1) {
          return 0;
        }
        return pv + 1;
      });
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [imgs.length]);

  return (
    <div className='w-full h-full relative overflow-hidden'>
      <motion.div
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        className='w-full h-full flex items-center'
      >
        <Images imgs={imgs} />
      </motion.div>

      <Dots imgs={imgs} imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

export default ImageCarousel;

const Images = ({ imgs }: { imgs: string[] }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div key={idx} className='w-full h-full shrink-0 '>
            <Image
              src={imgSrc}
              alt='avatar'
              width={500}
              height={500}
              className={`h-full object-cover ${
                true ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  imgs,
  imgIndex,
  setImgIndex,
}: {
  imgs: string[];
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className='opacity-0 group-hover:opacity-100 flex transition-opacity w-full justify-center gap-2 absolute bottom-2 z-10'>
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`size-3 rounded transition-colors ${
              idx === imgIndex ? 'bg-primary' : 'bg-background'
            }`}
          />
        );
      })}
    </div>
  );
};
