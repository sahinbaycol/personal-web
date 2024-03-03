import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/back1.png";
import reactIcon from "../../assets/physics.png"
import js from "../../assets/js.png"
import cssIcon from "../../assets/css-3.png"
import htmlIcon from "../../assets/html.png"
import typescriptIcon from "../../assets/typescript.png"
import gimp from "../../assets/indir.jpg"
import aiIcon from "../../assets/illustrator.png"
import figma from "../../assets/figma.png"
const Skills = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
          margin: "65px 0 0 650px",
        }}
        onClick={() => {
          navigate(-1);
        }}
        src={backIcon}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "20px",
            marginTop: "50px",
          }}
        >
          Web Development
        </div>
        <div style={{
            marginTop:"20px"
        }}>
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={htmlIcon} alt="" />
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={cssIcon} alt="" />
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={js} alt="" />
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={reactIcon} alt="" />
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={typescriptIcon} alt="" />
        </div>
        <div
          style={{
            color: "white",
            fontSize: "20px",
            marginTop: "50px",
          }}
        >
          UI/UX
        </div>
        <div style={{
            marginTop:"20px"
        }}>
        <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={figma} alt="" />
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={gimp} alt="" />
            <img style={{
                width:"40px",
                height:"40px",
                marginLeft:"10px"
            }} src={aiIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
