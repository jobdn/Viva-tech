import { motion } from "framer-motion";
import React from "react";
import { aboutSentenceListVars } from "../constants/sentence";

export default function withSenrenceAnimation(WrappedComponent: React.FC) {
  return function () {
    return (
      <motion.div
        variants={aboutSentenceListVars}
        initial="start"
        animate="end"
        className="withSenrenceAnimation"
      >
        <WrappedComponent />
      </motion.div>
    );
  };
}
