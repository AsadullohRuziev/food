import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import img from "../images/p-1.jpg";
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const Popular = () => {
  return (
    <Section>
      <Heading title={"Most"} span={"Popular"} title2={"Foods"} />
      <BoxContainer>
        <Box>
          <Span>$5 - $20</Span>
          <Img src={img} />
          <H3>tasty burger</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <Button title={"order now"} />
        </Box>
        <Box>
          <Span>$5 - $20</Span>
          <Img src={img} />
          <H3>tasty burger</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <Button title={"order now"} />
        </Box>
        <Box>
          <Span>$5 - $20</Span>
          <Img src={img} />
          <H3>tasty burger</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <Button title={"order now"} />
        </Box>
        <Box>
          <Span>$5 - $20</Span>
          <Img src={img} />
          <H3>tasty burger</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <Button title={"order now"} />
        </Box>
        <Box>
          <Span>$5 - $20</Span>
          <Img src={img} />
          <H3>tasty burger</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <Button title={"order now"} />
        </Box>
        <Box>
          <Span>$5 - $20</Span>
          <Img src={img} />
          <H3>tasty burger</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <Button title={"order now"} />
        </Box>
      </BoxContainer>
    </Section>
  );
};

export default Popular;

const Section = styled.div`
  padding: 2rem 9%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Box = styled.div`
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  text-align: center;
  flex: 1 1 30rem;
  position: relative;
`;

const Img = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  border-radius: .5rem;
`;

const Span = styled.span`
    position: absolute;
    top: 3rem;
    left: 3rem;
    background-color: var(--red);
    color: #fff;
    font-size: 2rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
`;

const H3 = styled.h3`
      color:#333;
  font-size: 2.5rem;
  padding-top: 1rem;
`;

const Stars = styled.div``;
const Star = styled(FaStar)`
    color: gold;
  font-size: 1.7rem;  
  /* padding:1rem .1rem; */   //padding nimagadir ishlamadi FaStar da 

  margin: 1rem .3rem;
`;
