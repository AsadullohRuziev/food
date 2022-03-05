import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Footer = () => {
    const background = {
        'background' : '#000'
    }
  return (
    <Footers>
      <Social>
        <SocialButton>Facebook</SocialButton>
        <SocialButton>Twitter</SocialButton>
        <SocialButton >Instagram</SocialButton>
        <SocialButton>Pinterest</SocialButton>
        <SocialButton>Linkedin</SocialButton>
      </Social>
      <By>
        Created by
        <Span> Asadulloh Ruziev 🤜 | 🤛 </Span> 
      </By>
    </Footers>
  );
};

export default Footer;

const Footers = styled.footer`
  background: #000;
  text-align: center;
`;

const Social = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2rem;
`;

const SocialButton = styled.button`
  display: inline-block;
  padding: 0.8rem 3rem;
  border: 0.2rem solid var(--red);
  color: var(--red);
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  margin-top: 1rem;
  background-color: #000;
  &::before{
    content: '';
  position: absolute;
  top:0; right: 0;
  width:0%;
  height:100%;
  background:var(--red);
  transition: .3s linear;
  z-index: -1;
  }
  &:hover{
      color: #fff;
      &::before{
          width: 100%;
          left: 0;
      }
  }
`;


const By = styled.h1`
  padding: 2.5rem 1rem;
  color: #fff;
  font-weight: normal;
  font-size: 2rem;
`;

const Span = styled.span`
  color: var(--red);
`;




