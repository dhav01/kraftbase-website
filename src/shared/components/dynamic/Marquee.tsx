import { motion } from 'framer-motion';
import { HTMLAttributes, PropsWithChildren } from 'react';

const Marquee = (props: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const { children } = props;
  const Chidren = children;
  return (
    <div {...props} style={{ overflow: 'hidden' }}>
      <motion.div
        style={{ display: 'inline-block', whiteSpace: 'nowrap' ,width:'100%'}}
        animate={{ x: '100%' }}
        transition={{ ease: 'linear', duration: 5,repeat:Infinity }}
        whileHover={{ x: '-50%' }}
      >
      </motion.div>
    </div>
  );
};

export default Marquee;
