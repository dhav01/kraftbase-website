import { motion } from "framer-motion";

const AnimateImage = () => {
  return (
    <motion.img
      initial={{ height: '16rem', opacity: 0 }}
      // style={{ height: imageLoading ? "6rem" : "auto" }}
      animate={{
        height: imageLoading ? '16rem' : 'auto',
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{{ height: { delay: 0, duration: 0.4 } },{ opacity: { delay: 0.5, duration: 0.4 } }
      }
      onload={imageLoaded}
      width="100%"
      src="https://source.unsplash.com/random"
    />
  );
};
