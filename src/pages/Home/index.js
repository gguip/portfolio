import React from "react";
import { useSpring } from "react-spring";
import { Container, TitleWrapper, StyledButton, Imagem } from "./styles";
import img from "../../assets/test.png";

import Layout from "../../components/Layout";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";

export default function Home() {
  const Fade = useSpring({
    delay: 400,
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <Layout vh id="home">
      <Container>
        <TitleWrapper style={Fade}>
          <Title>Hi,</Title>
          <Title>I'm Guilherme Passarinho de Oliveira,</Title>
          <SubTitle>A Full Stack Developer</SubTitle>

          <StyledButton
            activeClass="active"
            to="about"
            smooth
            spy
            offset={-90}
            duration={650}
          >
            About me
          </StyledButton>
        </TitleWrapper>

        <Imagem src={img} />
      </Container>
    </Layout>
  );
}
