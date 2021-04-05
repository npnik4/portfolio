import styled from "styled-components";

export const ThemeToggle = styled.div`
  color: ${({ theme }) => theme.bulb};
  transition: all 0.25s linear;
  width: 35px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 0 20px;
  cursor: pointer;
  font-size: 1.5em;
`;

export const HeroHeading = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 5em;
  font-weight: 600;
  margin: 0;
  @media screen and (max-width: 1200px) {
    font-size: 3.5em;
  }
  @media screen and (max-width: 500px) {
    font-size: 3.2em;
  }
`;

export const TextHighlight = styled.span`
  color: ${({ theme }) => theme.button};
  background-image: ${({ theme }) => theme.line};
  padding: 0 3px;
  border-radius: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
  padding: 0;
  margin: 0;
`;

export const HeroSubText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 2em;
  line-height: 1em;
  margin: 0;
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem !important;
  height: 100%;
  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.text};
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    margin: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
    &:hover {
      border-bottom: none;
      background-color: rgba(89, 166, 253, 0.205);
    }
  }
`;

export const Icon = styled.i`
  color: ${({ theme }) => theme.text};
`;

export const SkillIcon = styled.i`
  color: ${({ theme }) => theme.text};
  font-size: 5em;
  transition: 0.2s ease-in-out;
  opacity: 0.9;
  background-color: transparent !important;
  &:hover {
    font-size: 5.5em;
    opacity: 1;
  }
  @media screen and (max-width: 960px) {
    font-size: 4em;
    &:hover {
      font-size: 4.5em;
      opacity: 1;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 2.5em;
    &:hover {
      font-size: 3em;
      opacity: 1;
    }
  }
`;

export const SkillName = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 1em;
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.5em;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 1.5em 0;
  font-size: 3em;
  @media screen and (max-width: 960px) {
    font-size: 2em;
    padding: 1em 0;
  }
`;

export const PlainTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 3em;
  @media screen and (max-width: 960px) {
    font-size: 2em;
  }
`;

export const P3 = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1em;
  text-align: left;
  width: 100%;
  margin: 0.5em;
  @media screen and (max-width: 960px) {
    margin: 0.2em;
  }
`;

export const A3 = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.button};
`;

export const ListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 1em;
  color: ${({ theme }) => theme.text};
  line-height: 1.2em;
  &:before {
    content: "•";
    position: absolute;
    left: 0px;
    color: ${({ theme }) => theme.button};
    font-size: 1.2em;
    line-height: 1.2em;
  }
  @media screen and (max-width: 960px) {
    font-size: 0.8em;
    line-height: 1em;
    &:before {
      font-size: 1em;
      line-height: 1em;
    }
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 7px;
  overflow: hidden;
  list-style: none;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5px;
  padding: 25px;
  box-shadow: 5px 11px 50px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.card};
  border-radius: 30px;
  min-height: 550px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 500px;
    width: 85%;
  }
  @media screen and (max-width: 660px) {
    width: 90%;
    padding: 15px;
  }
`;

export const SmallCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  height: 100%;
  margin: 5px;
  padding: 25px;
  box-shadow: 5px 11px 50px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.card};
  border-radius: 30px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media screen and (max-width: 660px) {
    padding: 15px;
  }
`;

export const FooterContainer = styled.div`
  margin-top: 5em;
  height: 50px;
  background: ${({ theme }) => theme.card};
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.preloaderBackup};
  background: ${({ theme }) => theme.preloaderSupport};
  background: ${({ theme }) => theme.preloader};
  transition: all 1s ease-in-out;
  overflow-y: hidden;
  .image {
    height: 150px;
    width: 150px;
  }
`;
