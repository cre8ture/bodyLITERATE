import React from "react";
import { motion } from "framer-motion";
// import Flower1 from '../images/flowerTrans.png'; // gives image path
import styles from "./components.module.css";
import yellowFlower from "../images/yellowFlower.png";

const RotateYellow = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      onClick={() => setIsActive(!isActive)}
      // animate={{
      //   rotate: isActive ? 90 : 0,
      // }}
      whileHover={{ scale: 1.2 }}
    >
      <img
        src={yellowFlower}
        className={styles.flower}
        alt="this is a flower"
      />
    </motion.div>
  );
};

export default RotateYellow;
