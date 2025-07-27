import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: '0%', opacity: 1, transition: { duration: 0.6 } },
  exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.6 } }),
};

export default function Carousel({ images }) {
  const [[index, direction], setState] = useState([0, 0]);

  const paginate = (newDir) =>
    setState(([i, _]) => [
      (i + newDir + images.length) % images.length,
      newDir,
    ]);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
        />
      </AnimatePresence>

      <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75">
        ‹
      </button>
      <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75">
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <motion.span
            key={i}
            onClick={() => setState([i, i > index ? 1 : -1])}
            className={`h-2 w-2 rounded-full cursor-pointer ${i === index ? 'bg-indigo-600' : 'bg-gray-400'}`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </div>
  );
}
