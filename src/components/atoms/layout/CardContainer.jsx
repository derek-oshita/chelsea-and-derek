'use client';
import { motion } from "framer-motion";

export const CardContainer = ({ children, id }) => {
  return (
    <motion.div
      id={`${id}-card-container`}
      className="h-full w-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div id={`${id}-card`} className="flex flex-col md:flex-row md:shadow-lg rounded overflow-hidden ">
        {children}
      </div>
    </motion.div>
  );
};