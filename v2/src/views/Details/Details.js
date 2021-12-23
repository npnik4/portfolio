import React from "react";
import { Container } from "@material-ui/core";
import "./Details.scss";
import NavBarLite from "../../components/NavBar/NavBarLite";
import {
  TextHighlight,
  ThemeToggle,
  Title,
  Card,
  P3,
  SmallCard,
  PlainTitle,
  FooterContainer,
  Text,
} from "../../components/Styled/StyledComponents";
import Bar from "../../components/Charts/Bar";
import Doughnut from "../../components/Charts/Doughnut";
import {
  workData,
  schoolData,
  personalData,
  lightOptions,
  darkOptions,
} from "./data";

function Details(props) {
  const light = props.theme === "light";
  return (
    <div className="Details">
      <NavBarLite theme={props.theme}>
        <ThemeToggle onClick={props.toggleTheme}>
          <i className={light ? "far fa-moon" : "far fa-sun"}></i>
        </ThemeToggle>
      </NavBarLite>
      <Container maxWidth="lg" className="detailsContainer">
        <section>
          <Title>
            Skills <TextHighlight>Insight</TextHighlight>.
          </Title>
          <Card>
            <div className="chart1">
              <P3>Years of experience</P3>
              <Bar light={light} />
            </div>
          </Card>
        </section>
        <section>
          <PlainTitle>
            Skill <TextHighlight>Usage</TextHighlight>.
          </PlainTitle>
          <P3 className="subtitle">Percentage of skills used during...</P3>
          <div className="smallCardRow">
            <SmallCard>
              <div className="smallCardContainer">
                <P3>Work</P3>
                <Doughnut
                  id={"workChart"}
                  data={workData}
                  options={light ? lightOptions : darkOptions}
                />
              </div>
            </SmallCard>

            <SmallCard>
              <div className="smallCardContainer">
                <P3>
                  School <br />
                  (Core classes)
                </P3>
                <Doughnut
                  id={"schoolChart"}
                  data={schoolData}
                  options={light ? lightOptions : darkOptions}
                />
              </div>
            </SmallCard>

            <SmallCard>
              <div className="smallCardContainer">
                <P3>
                  Personal <br />
                  Projects
                </P3>
                <Doughnut
                  id={"personalChart"}
                  data={personalData}
                  options={light ? lightOptions : darkOptions}
                />
              </div>
            </SmallCard>
          </div>
        </section>
      </Container>
      <FooterContainer>
        <div className="text">
          <Text>© Copyright. All rights reserved.</Text>
        </div>
      </FooterContainer>
    </div>
  );
}

export default Details;
