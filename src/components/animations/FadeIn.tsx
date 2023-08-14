import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

const FadeIn = ({ children, className }: FadeInProps) => {
  return (
    <motion.div
      className={`container ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
