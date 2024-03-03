import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
export const ContactSliderComponent = () => {
  return (
    <AwesomeSlider>
      <div>
        <a target="_blank" href="https://www.instagram.com/sahinbycl/">
          <img
            style={{
              width: "100px",
              height: "100px",
            }}
            src={instagramIcon}
            alt=""
          />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://twitter.com/sahinbaycol">
          <img
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid white",
              backgroundColor: "white",
              borderRadius: "10%",
            }}
            src={twitterIcon}
            alt=""
          />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/sahinbaycol">
          <img
            style={{
              width: "100px",
              height: "100px",
            }}
            src={githubIcon}
            alt=""
          />
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.linkedin.com/in/kaansahinbaycol/">
          <img
            style={{
              width: "100px",
              height: "100px",
            }}
            src={linkedinIcon}
            alt=""
          />
        </a>
      </div>
    </AwesomeSlider>
  );
};
