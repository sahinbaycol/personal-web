import React from "react";

import { motion } from "framer-motion";
import { ContactSliderComponent } from "../components/ContactSliderComponent";
const Contact = () => {
  const styles = {
    text1Style: {
      fontSize: "40px",
      fontWeight: "600",
      color: "white"
    },
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      
      marginTop: "50px",
      alignItems:"center"
    },
    sliderStyle:{
      width:"600px",
      height:"150px",
      marginTop:"50px",
      
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div style={styles.containerStyle}>
        <div style={styles.text1Style}>My Social Links</div>
        <div style={styles.sliderStyle}>
          <ContactSliderComponent  />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
