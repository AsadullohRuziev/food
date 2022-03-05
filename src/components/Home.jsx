import React from "react";
import styled from "styled-components";
import homeImg from '../images/home-img.png'
import backImg from '../images/home-bg.jpg'
import Button from "./Button";

const Home = () => {
  return (
    <Hero>
      <Content>
        <H3>Food made with love</H3>
        <P>
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptas
          Accusamus Tempore Temporibus Rem Amet Laudantium Animi Optio
          Voluptatum. Natus Obcaecati Unde Porro Nostrum Ipsam Itaque Impedit
          Incidunt Rem Quisquam Eos!
        </P>
        <Button title={'Order Now'}/>
      </Content>
      <ImageContent>
          <Img src={homeImg}/>
      </ImageContent>
    </Hero>
  );
};

export default Home;

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  background: url(${backImg}) no-repeat;
  min-height: 100vh;
  align-items: center;
  background-size: cover;
  background-position: center;
  padding:2rem 9%;

`;

const Content = styled.div`
  flex: 1 1 40rem;
  padding-top: 6.5rem;
`;

const H3 = styled.h3`
  font-size: 5rem;
  color: #333;
`;

const P = styled.p`
  font-size: 1.7rem;
  color: #666;
  padding: 1rem 0;
`;

const ImageContent = styled.div`
  flex: 1 1 40rem;
`;



const Img = styled.img`
   width:100%;
  padding:1rem;
  animation: float 2s linear infinite;
`

/* keyframes styled componentsda ishlamadi va global stylega ulab quydim  🧘🧘🧘🧘🧘🧘🧘🧘🧘🧘🧘🧘*/
