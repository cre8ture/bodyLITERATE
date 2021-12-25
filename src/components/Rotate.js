import React from "react";
import { motion } from "framer-motion";
// import Flower1 from '../images/flowerTrans.png'; // gives image path
import styles from "./components.module.css";

const RotateYellow = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      onClick={() => setIsActive(!isActive)}
      // animate={{
      //   rotate: isActive ? 90 : 0,
      // }}
      whileHover={{ rotate: 1 }}
      // animate = {{ rotate: 360 }}
    >
      <img src={props.src} className={styles.flower} alt="this is a flower" />
    </motion.div>
  );
};

export default RotateYellow;
