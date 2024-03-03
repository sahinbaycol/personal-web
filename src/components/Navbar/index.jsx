import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../../assets/home.png"
import about from "../../assets/letter.png"
import contact from "../../assets/user.png"
import suitcase from "../../assets/suitcase.png"

const Navbar = () => {
  const navigate = useNavigate();

  const styles = {
    navbarContainerStyle: {
      display: "flex",
      flexDirection: "row",
      padding: "10px 40px 0px 0px",
      borderBottom: "1px solid black",
      backgroundColor: "#4b4466",
      border: "1px solid black",
      borderRadius:"60px",
      marginTop:"20px",
        height:"60px",
        marginLeft:"300px"
    },
    buttonStyle: {
      width: "0px",
      height: "0px",
      borderStyle: "solid",
      borderWidth: "0 28px 42px 28px",
      borderColor: " transparent transparent #959bbd transparent",
      transform: " rotate(0deg)",
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginLeft: "40px",
      cursor:"pointer"
    },
    nameTextStyle:{
      fontSize:"25px",
      fontWeight:"600",
      color:"#e9e6f5"
    },
    surnameTextStyle:{
      fontSize:"25px",
      fontWeight:"300",
      color:"#b4b0c2",
      marginLeft:"5px"
    },
    nameContainerStyle:{
      display:"flex",
      flexDirection:"row",
      margin:"40px 0 0 250px"
    }
  };
  return (
    <div>
      <div style={{display:"flex",flexDirection:"row",height:"150px"}}>
      <div style={styles.nameContainerStyle}>
        <div style={styles.nameTextStyle}>Kaan Şahin</div>
        <div style={styles.surnameTextStyle}>Bayçöl</div>
      </div>
        <div style={styles.navbarContainerStyle}>
          <div
            style={styles.buttonStyle}
            onClick={() => {
              navigate("./");
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15px",
                
              }}
            >
              <img src={home} alt="" width={20} height={20} />
            </div>
          </div>
          <div
            style={{
              ...styles.buttonStyle,
              borderWidth: "42px 28px 0 28px",
              borderColor: "#959bbd transparent transparent transparent",
              cursor:"pointer"
            }}
            onClick={() => {
              navigate("./Contact");
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "15px",
              }}
            >
              <img src={about} alt="" width={20} height={20} />
            </div>
          </div>
          <div
            style={styles.buttonStyle}
            onClick={() => {
              navigate("./About");
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15px",
              }}
            >
              <img src={contact} alt="" width={20} height={20} />
            </div>
          </div>
          <div
            style={{
              ...styles.buttonStyle,
              borderWidth: "42px 28px 0 28px",
              borderColor: "#959bbd transparent transparent transparent",
            }}
            onClick={() => {
              navigate("./Works");
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "15px",
              }}
            >
              <img src={suitcase} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flex: "1" }}></div>
      </div>
    </div>
  );
};

export default Navbar;
