import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import img1 from "../images/s-img-1.jpg"
import imgContent from "../images/s-1.png"

const Speciality = () => {
  return (
    <Section>
      <Heading title={"Our"} span={"Speciality"} />
      <BoxContainer>
        <Box>
            <Img src={img1}/>
            <Content>
                <ImgContent src={imgContent}/>
                <H3>tasty burger</H3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</P>
            </Content>
        </Box>
        <Box>
            <Img src={img1}/>
            <Content>
                <ImgContent src={imgContent}/>
                <H3>tasty burger</H3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</P>
            </Content>
        </Box>
        <Box>
            <Img src={img1}/>
            <Content>
                <ImgContent src={imgContent}/>
                <H3>tasty burger</H3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</P>
            </Content>
        </Box>
        <Box>
            <Img src={img1}/>
            <Content>
                <ImgContent src={imgContent}/>
                <H3>tasty burger</H3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</P>
            </Content>
        </Box>
        <Box>
            <Img src={img1}/>
            <Content>
                <ImgContent src={imgContent}/>
                <H3>tasty burger</H3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</P>
            </Content>
        </Box>
        <Box>
            <Img src={img1}/>
            <Content>
                <ImgContent src={imgContent}/>
                <H3>tasty burger</H3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</P>
            </Content>
        </Box>
      </BoxContainer>
    </Section>
  );
};

export default Speciality;

const Section = styled.div`
  padding: 2rem 9%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Box = styled.div`
  flex: 1 1 30rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover Img{
      top: 0;
  }
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: -100%;
    left: 0;
`


const Content = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 2rem;

`

const ImgContent = styled.img`
    margin: 1.5rem 0;
`

const H3 = styled.h3`
    font-size: 2.5rem;
    color: #333;
`
const P = styled.p`
    font-size: 1.6rem;
    color: #666;
    padding: 1rem 0;
`