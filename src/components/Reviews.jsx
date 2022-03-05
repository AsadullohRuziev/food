import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import img from "../images/pic1.png";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <Section>
      <Heading title={"Our Customers"} span={"Reviews"} />
      <Container>
        <Box>
          <Img src={img} />
          <H3>john deo</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <P>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti
            Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime
            Rem. Itaque.
          </P>
        </Box>
        <Box>
          <Img src={img} />
          <H3>john deo</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <P>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti
            Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime
            Rem. Itaque.
          </P>
        </Box>
        <Box>
          <Img src={img} />
          <H3>john deo</H3>
          <Stars>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Stars>
          <P>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti
            Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime
            Rem. Itaque.
          </P>
        </Box>
      </Container>
    </Section>
  );
};

export default Reviews;

const Section = styled.section`
  padding: 2rem 9%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Box = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1rem solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  flex: 1 1 30rem;
  background: #333;
  margin-top: 6rem;
`;

const Img = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  border: 1rem solid #fff;
  margin-top: -8rem;
  object-fit: cover;
`;

const H3 = styled.h3`
  font-size: 2.5rem;
  color: #fff;
  padding: 0.5rem 0;
`;

const Stars = styled.div``;

const Star = styled(FaStar)`
  font-size: 2rem;
  color: var(--red);
  padding: 0.5rem 0;
`;

const P = styled.p`
  font-size: 1.5rem;
  color: #eee;
  padding: 1rem 0;
`;
