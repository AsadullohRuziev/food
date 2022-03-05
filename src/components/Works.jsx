import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import img from "../images/step-1.jpg";

const Works = () => {
  return (
    <>
      <Heading title={"How It"} span={"Works"} />
      <Section>
        <Box>
          <Img src={img} />
          <H3>choose your favorite food</H3>
        </Box>
        <Box>
          <Img src={img} />
          <H3>choose your favorite food</H3>
        </Box>
        <Box>
          <Img src={img} />
          <H3>choose your favorite food</H3>
        </Box>
        <Box>
          <Img src={img} />
          <H3>choose your favorite food</H3>
        </Box>
      </Section>
    </>
  );
};

export default Works;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
`;

const Box = styled.div`
  flex: 1 1 25rem;
  padding: 1rem;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
  border: 1rem solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;
const H3 = styled.h3`
  font-size: 3rem;
  color: #333;
  padding: 1rem;
`;
