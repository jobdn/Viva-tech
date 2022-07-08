import React from "react";
import { BulbFilled } from "@ant-design/icons";
import { motion } from "framer-motion";

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

import styles from "./ProjectsButton.module.scss";

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const ProjectsButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ amount: 0.9 }}
      className={styles.btnContainer}
    >
      <Button
        label="Check our projects"
        icon={<BulbFilled />}
        onClick={() => navigate("/projects")}
      />
    </motion.div>
  );
};
