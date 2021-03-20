import React from "react";
import "./Footer.scss";
// import creds from "../../assets/creds.svg";
import yellow from "../../assets/yellow.svg";
import hotPink from "../../assets/hotPink.svg";
import brightblue from "../../assets/brightblue.svg";
import {
  Text,
  FooterContainer,
} from "../../components/Styled/StyledComponents";
import { isSafari, isMobileSafari } from "react-device-detect";

function Footer() {
  return (
    <FooterContainer className="footer" id="footer">
      {/* <div className="image">
        <img src={creds} alt="creds" />
      </div> */}
      <div className="text">
        <Text>© Copyright. All rights reserved.</Text>
      </div>
      {!isSafari && !isMobileSafari ? (
        <>
          <img src={yellow} alt="shape" className="yellow" />
          <img src={hotPink} alt="shape" className="hotPink" />
          <img src={brightblue} alt="shape" className="brightblue" />
        </>
      ) : null}
    </FooterContainer>
  );
}

export default Footer;
