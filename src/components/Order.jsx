import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import img from "../images/order-img.jpg";
import Button from "./Button";

const Order = () => {
  return (
    <Section>
      <Heading span={"Order"} title2={"Now"} />
      <Row>
        <ImgDiv>
          <Img src={img} />
        </ImgDiv>
        <Form>
          <InputBox>
            <Input tape="text" placeholder="name" />
            <Input type="email" placeholder="email" />
          </InputBox>
          <InputBox>
            <Input type="number" placeholder="number" />
            <Input type="text" placeholder="food name" />
          </InputBox>
          <Textarea placeholder="address" name="" id="" cols="30" rows="10" />
          <Button title={"Order Now"} />
        </Form>
      </Row>
    </Section>
  );
};

export default Order;

const Section = styled.section`
  padding: 2rem 9%;
`;

const Row = styled.div`
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-radius: 0.5rem;
`;
const ImgDiv = styled.div`
  flex: 1 1 30rem;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Form = styled.form`
  flex: 1 1 50rem;
  padding: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.7rem;
  color: #333;
  text-transform: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  width: 49%;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.7rem;
  color: #333;
  text-transform: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  width: 49%;
  width: 100%;
  resize: none;
  height: 15rem;
`;
