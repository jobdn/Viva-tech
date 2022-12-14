import React from "react";
import { motion } from "framer-motion";

import { aboutSentenceListVars } from "constants/sentence";

export default function withSentenceAnimation(WrappedComponent: React.FC) {
  return function () {
    return (
      <motion.div
        variants={aboutSentenceListVars}
        initial="start"
        animate="end"
      >
        <WrappedComponent />
      </motion.div>
    );
  };
}
