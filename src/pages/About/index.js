import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

import { Container, TechList, TechItem } from "./styles";

const techItem = ["Node.js", "ReactJS", "React Native", "Express.js", "Redux", "Hooks", "MongoDB", "PostgreSQL"];

export default function About() {
  return (
    <Layout center id="about">
      <Title>About</Title>
      <Container>
        <Paragraph>
          I'm 26 years old, I live in Brazil, in Tatuí, a town in the
          countryside of the state of São Paulo. I'm currently studying
          Information Tecnology Management at FATEC-Tatuí. I started in the
          dev area in 2017, when I worked in a IT company and I loved it.
          I really like the JavaScript ecosystem and today I'm 100% focused on
          studying Node.js, ReactJS, React Native, MongoDB and PostgreSQL.
        </Paragraph>
        <TechList>
          {techItem.map(tech => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechList>
      </Container>
    </Layout>
  );
}
