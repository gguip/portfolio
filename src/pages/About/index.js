import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

import { Container, TechList, TechItem } from "./styles";

const techItem = ["Node.js", "ReactJS", "React Native", "Express.js", "Redux", "Hooks", "MongoDB", "PostgreSQL", "Saga", "MySQL", "Styled Components", "ElectronJS", "Firebase", "Typescript"];

export default function About() {
  return (
    <Layout center id="about">
      <Title>About</Title>
      <Container>
        <Paragraph>
        I'm 27 years old, I live in Brazil, in Tatuí, a town in the
          countryside of the state of São Paulo. I'm graduated in Information
          Tecnology Management at FATEC-Tatuí. I started in the dev area in
          2017, when I worked in a IT company and I loved it. I really like the
          JavaScript ecosystem and today I'm 100% focused on studying Node.js,
          ReactJS, React Native, MongoDB and PostgreSQL. Actually my main goal
          is work in a great company and take an exchange program to Vancouver - Canada.
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
