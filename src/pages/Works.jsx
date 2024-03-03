import React from "react";
import { motion } from "framer-motion";
import WorksComponent from "../components/WorksComponent";
const Works = () => {
  const styles = {
    text1Style: {
      fontSize: "40px",
      fontWeight: "600",
      color: "white",
    },
    worksContainerStyle: {
      display:"flex",
      flexDirection:"row",
      marginTop:"50px",
      
      alignItems:"center",
      justifyContent:"space-between"
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div style={styles.worksContainerStyle}>
        
        <div style={{
          display:"flex",
          flexDirection:"row",
          width:"100%"
        }}>
            <WorksComponent />
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
