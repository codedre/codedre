import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${140/16}em;
  line-height: ${150/140};
  letter-spacing: ${-1.05/140}em;
  text-transform: uppercase;
  width: 100%;
`;

const IndexPage = () => (
  <Container>
    <Title>Something should go here 😅</Title>
  </Container>
)

export default IndexPage
