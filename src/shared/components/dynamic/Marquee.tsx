import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { PropsWithClassName } from 'interfaces';
import clsx from 'clsx';

const marqueeVariants = {
  animate: {
    x: ['0%', '100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5,
        ease: 'linear',
      },
    },
  },
};

const Marquee = ({ children ,className}: PropsWithChildren & PropsWithClassName) => {
  return (
    <div className={clsx('overflow-x-hidden',className)}>
      <motion.div className="  whitespace-nowrap  will-change-transform" variants={marqueeVariants} animate="animate">
        {children};
      </motion.div>
    </div>
  );
};

export default Marquee;
