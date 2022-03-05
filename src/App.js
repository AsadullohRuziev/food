import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Popular from "./components/Popular";
import Reviews from "./components/Reviews";
import Speciality from "./components/Speciality";
import Works from "./components/Works";
import { FaAngleUp } from "react-icons/fa";
import styled from "styled-components";


function App() {
  return (
    <>
      <Header />
      <Home />
      <Speciality/>
      <Popular/>
      <Works/>
      <Gallery/>
      <Reviews/>
      <Order/>
      <Footer/>
      <Scroll>
        <FaAngleUp/>
      </Scroll>
    </>
  );
}

export default App;


const Scroll  = styled.a`
      position: fixed;
  top:-120%;
  right:2rem;
  padding:.5rem 1.5rem;
  font-size: 4rem;
  background:var(--red);
  color:#fff;
  border-radius: .5rem;
  transition: 1s linear;
  z-index: 1000;
`
