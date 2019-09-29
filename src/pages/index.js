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
  height: 100%;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${140/16}em;
  line-height: ${150/140};
  letter-spacing: ${-1.05/140}em;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 768px) {
    font-size: ${60/16}em;
  line-height: ${70/60};
  letter-spacing: ${-0.8/60}em;
  }
`;

const IndexPage = () => (
  <Container>
    <Title>Something should go here 😅</Title>
  </Container>
)

export default IndexPage
