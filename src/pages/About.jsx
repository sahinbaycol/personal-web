import React from "react";
import TitleBar from "../components/TitleBar";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Skills from "../components/Skills";

const About = () => {
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
      marginRight: "20px",
    },
    text3Style: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#db1435",
      marginLeft: "20px",
      marginRight: "20px",
    },
    text4Style: {
      fontSize: "18px",
      fontWeight: "600",
      color: "white",
      marginLeft: "20px",
      marginRight: "20px",
    },
    text5Style:{
      fontSize:"20px",
      fontWeight:"300",
      color:"#b4b0c2",
      marginLeft:"100px",
      marginTop:"20px",
      maxWidth:"250px"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div
        style={{
          
          marginTop: "50px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}
      >
        <div>
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div style={styles.text1Style}>Every </div>
              <div style={styles.text2Style}> story </div>
              <div style={styles.text1Style}> starts</div>
            </div>
            <div style={styles.text1Style}>with magnificient designs.</div>
            <div style={styles.text5Style}>1.5 years ago I started learn Front-end. Since Then, I have done many projects.</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              borderRight: "1px solid grey",
            }}
          >
            <div style={styles.text3Style}>1.5 +</div>
            <div style={styles.text4Style}>Years of</div>
            <div style={styles.text4Style}>Experience</div>
          </div>
          <div>
            <div style={styles.text3Style}>10 +</div>
            <div style={styles.text4Style}>Finished</div>
            <div style={styles.text4Style}>Projects</div>
          </div>
        </div>
        <div style={{
          marginTop:"50px"
        }}>
          <TitleBar />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
