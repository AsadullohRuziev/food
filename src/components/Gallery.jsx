import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import img from "../images/g-1.jpg";
import Button from "./Button";

const Gallery = () => {
  return (
    <Section>
      <Heading title={"Our Food"} span={"Gallery"} />
      <Container>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
        <Box>
          <Img src={img} />
          <Content>
            <H3>Tasty Food</H3>
            <P>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
              Deleniti, Ipsum.
            </P>
            <Button title={"Order Now"} />
          </Content>
        </Box>
      </Container>
    </Section>
  );
};

export default Gallery;

const Section = styled.section`
  padding: 2rem 9%;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;


const Content = styled.div`
  position: absolute;
  top:-100%; left:0;
  height: 100%;
  width:100%;
  background:rgba(255,255,255,.9);
  padding:2rem;
  padding-top: 5rem;
  text-align: center;
`;


const Box = styled.div`
  height:25rem;
  flex:1 1 30rem;
  border:1rem solid #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover ${Content} {       //fixseeeeeeeeeeeeeed    🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺🕺
             top: 0;
        }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;



// hoverni togirlashim kerak 🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧🔧🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨🔩🔩🔩🔩🔩🔩🔩🔩🔩🔩


const H3 = styled.h3`
  font-size: 2.5rem;
  color: #333;
`;

const P = styled.p`
  font-size: 1.5rem;
  color: #666;
  padding: 1rem 0;
`;
