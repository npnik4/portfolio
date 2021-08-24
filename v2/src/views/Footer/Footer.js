import React from "react";
import "./Footer.scss";
// import creds from "../../assets/creds.svg";
import yellow from "../../assets/Yellow2.svg";
import hotPink from "../../assets/HotPink2.svg";
import brightblue from "../../assets/BrightBlue2.svg";
import {
  Text,
  FooterContainer,
} from "../../components/Styled/StyledComponents";

function Footer(props) {
  return (
    <FooterContainer className="footer" id="footer">
      {/* <div className="image">
        <img src={creds} alt="creds" />
      </div> */}
      <div className="text">
        <Text>© Copyright. All rights reserved.</Text>
      </div>
      <img src={yellow} alt="shape" className={"yellow " + props.theme} />
      <img src={hotPink} alt="shape" className={"hotPink " + props.theme} />
      <img
        src={brightblue}
        alt="shape"
        className={"brightblue " + props.theme}
      />
    </FooterContainer>
  );
}

export default Footer;
