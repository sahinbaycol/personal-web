import React from "react";
import iamdepotImage from "../../assets/iamdepot2.png";
import cryptopunkImage from "../../assets/cryptopunk2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { useState } from "react";
import "../../App.css"
const WorksComponent = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };


  const styles = {
    text1Style: {
      fontSize: "40px",
      fontWeight: "600",
      color: "white",
    },
    text2Style: {
      fontSize: "40px",
      fontWeight: "600",
      color: "#db1435",
      marginLeft: "20px",
    },
    textContainerStyle:{
      display:"flex",
      flexDirection:"column"
    },
    text3Style: {
      fontSize: "20px",
      color: "#877f80",
      maxWidth: "400px",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop:"5%"
      }}
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        style={styles.textContainerStyle}
      >
        <div style={{display:"flex",flexDirection:"row"}}>
          <div style={styles.text1Style}>My</div>
          <div style={styles.text2Style}>Works</div>
        </div>
        <div style={styles.text3Style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec tincidunt mauris. Aliquam ullamcorper risus lectus,
            sodales pellentesque risus ullamcorper at. Nullam in rhoncus enim,
            id molestie arcu.
        </div>
         
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "50px",
          }}
        >
          <div>
            <img
              className={isHovered ? 'image hovered' : 'image'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
              }}
              alt="No Image"
              src={cryptopunkImage}
            />
          </div>
          <div
            style={{
              marginLeft: "20px",
            }}
          >
            <img
            className={isHovered2 ? 'image2 hovered' : 'image2'}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
              style={{
                
              }}
              alt="No Image"
              src={iamdepotImage}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorksComponent;
