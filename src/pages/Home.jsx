import React from "react";
import Navbar from "../components/Navbar";
import cartoon from "../assets/cartoonphoto2.png";
import bglast3 from "../assets/bglast3.png";
import "./style.css";
import ReactCurvedText from "react-curved-text";
import { useState } from "react";
import move from "../assets/move2.png";
import { motion } from "framer-motion";

const Home = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [cx, setCx] = useState(150);
  const [cy, setCy] = useState(150);
  const [rx, setRx] = useState(100);
  const [ry, setRy] = useState(100);
  const [startOffset, setStartOffset] = useState(0);
  const [reversed, setReversed] = useState(true);
  const [text, setText] = useState("My First Ever  Portfolio Website ");
  const [fontSize, setFontSize] = useState(28);
  const [textPathFill, setTextPathFill] = useState("white");
  const [dy, setDy] = useState(0);
  const [fill, setFill] = useState();

  const textProps = fontSize ? { style: { fontSize: fontSize } } : null;
  const textPathProps = textPathFill ? { fill: textPathFill } : null;
  const tspanProps = dy ? { dy: dy } : null;
  const ellipseProps = fill ? { style: `fill: ${fill}` } : null;

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
    textContainerStyle: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "250px",
      marginTop: "150px",
    },
    text3Style: {
      fontSize: "20px",
      color: "#877f80",
      maxWidth: "400px",
    },
  };
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
      initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration:0.4,ease:'easeInOut'}}
    exit={{opacity:0}}
    >
      <div>
        <div style={styles.textContainerStyle}>
          <div style={styles.text1Style}>Transofrming Ideas</div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={styles.text1Style}>Into</div>
            <div style={styles.text2Style}>Digital Reality</div>
          </div>
          <div style={styles.text3Style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec tincidunt mauris. Aliquam ullamcorper risus lectus,
            sodales pellentesque risus ullamcorper at. Nullam in rhoncus enim,
            id molestie arcu.
          </div>
        </div>
        {/* circular text */}
        <div
          style={{
            margin: "50px 0 0 250px",
            position: "absolute",
          }}
        >
          <img
            src={move}
            style={{
              backgroundColor: "#03032E",
              width: "50px",
              height: "50px",
              position: "relative",
              left: "180px",
              bottom: "130px",
            }}
            alt=""
          />

          <ReactCurvedText
            width={width}
            height={height}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            startOffset={startOffset}
            reversed={reversed}
            text={text}
            textProps={textProps}
            textPathProps={textPathProps}
            tspanProps={tspanProps}
            ellipseProps={ellipseProps}
            svgProps={{ className: "rotating-curved-text" }}
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          marginLeft: "150px",
        }}
      >
        <img
          src={bglast3}
          alt=""
          width={600}
          height={600}
          style={{
            position: "absolute",
            top: "115px",
          }}
        />
        <img
          src={cartoon}
          width={258}
          height={460}
          alt=""
          style={{
            position: "absolute",
            left: "180px",
            top: "180px",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Home;
