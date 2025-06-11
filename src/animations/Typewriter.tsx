'use client';

import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';

const sentenceVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0 },
  },
};

// Tipo correto para motion.p
type TypewriterProps = ComponentPropsWithoutRef<typeof motion.p> & {
  text: string;
  start?: boolean;
};

export function Typewriter({
  text,
  className,
  start = false,
  ...rest
}: TypewriterProps) {
  return (
    <motion.p
      className={className}
      variants={sentenceVariants}
      initial="hidden"
      animate={start ? 'visible' : 'hidden'}
      {...rest}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}
