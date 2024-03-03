import React from "react";
import { useNavigate } from "react-router-dom";

const TitleBar = () => {
    const navigate=useNavigate();
    const styles={
        titleTextStyle:{
            color:"white",
            fontSize:"25px",
            cursor:"pointer",
            border:"1px solid grey",
            borderRadius:"10px",
            padding:"10px 20px"
        }
    }
  return (
    <div style={{
        display:"flex"
    }}>
      <div onClick={()=>{
        navigate("./skills")
      }} style={styles.titleTextStyle}>Skills</div>
      <div onClick={()=>{
        navigate("./credentials")
      }} style={{...styles.titleTextStyle,
        marginLeft:"50px"
      }}>Credentials</div>
    </div>
  );
};

export default TitleBar;
