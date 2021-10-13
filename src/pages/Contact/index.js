import React from "react";
import {
  FaRegEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaStackOverflow
} from "react-icons/fa";
import Layout from "../../components/Layout";
import Title from "../../components/Title";

import { Container, Link, ContactLink } from "./styles";

export default function Contact() {
  return (
    <Layout center id="contact">
      <Title>Get in touch</Title>
      <Container>
        <Link target="_blank" href="mailto:guilhermepassarinho@gmail.com">
          <FaRegEnvelope size={16} />
          guilhermepassarinho@gmail.com
        </Link>
        <br /> <br />
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5515988030747"
        >
          <FaWhatsapp size={16} />
          Feel free to send me a message.
        </Link>
        <br />
        <br />
        <p>
          Made with ♥ by{" "}
          <a
            href="https://github.com/gguip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guilherme Passarinho de Oliveira
          </a>
        </p>
        <p>
          Credits by{" "}
          <a
            href="https://github.com/DanielNeris"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel
          </a>
        </p>
        <p>© Copyright 2021 copyright - All Rights Reserved</p>
        <br />
        <p>
        <br />
          <ContactLink
            href="https://github.com/gguip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="#000" />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/guilhermepassarinho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#000" />
          </ContactLink>
          <ContactLink
            href="https://stackoverflow.com/users/13016265/gguip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow size={24} color="#000" />
          </ContactLink>
        </p>
      </Container>
    </Layout>
  );
}
