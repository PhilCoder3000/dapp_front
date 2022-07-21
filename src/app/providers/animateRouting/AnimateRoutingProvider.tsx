import { motion } from 'framer-motion';
import React from 'react';

interface AnimateRoutingProps {
  children: JSX.Element | JSX.Element[];
}

const animations = {
  initial: { y: '100vh' },
  animate: { y: '0px' },
  exit: { y: '-100vh' },
};

export function AnimateRoutingProvider({ children }: AnimateRoutingProps) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: 'auto'}}
    >
      {children}
    </motion.div>
  );
}
