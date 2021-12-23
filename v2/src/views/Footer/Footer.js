import React from "react";
import "./Footer.scss";
import {
  Text,
  FooterContainer,
} from "../../components/Styled/StyledComponents";

function Footer(props) {
  return (
    <FooterContainer className="footer" id="footer">
      <div className="text">
        <Text>© Copyright. All rights reserved.</Text>
      </div>
    </FooterContainer>
  );
}

export default Footer;
