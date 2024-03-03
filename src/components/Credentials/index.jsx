import React from "react";
import backIcon from "../../assets/back1.png";
import { useNavigate } from "react-router-dom";

const Credentials = () => {
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
      <div>Credentials</div>
    </div>
  );
};

export default Credentials;
