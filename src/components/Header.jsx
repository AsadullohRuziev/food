import React from "react";
import styled from "styled-components";
import { FaUtensils } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar>
      <Logo>
        <LogoIcon />
        Food
      </Logo>
      <Nav>
        <Link>Home</Link>
        <Link>Speciality</Link>
        <Link>Popular</Link>
        <Link>Gallery</Link>
        <Link>Review</Link>
        <Link>Order</Link>
      </Nav>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem 9%;
  z-index: 1000;
`;

const Link = styled.a`
  font-size: 2rem;
  color: #666;
  margin-left: 2rem;
  cursor: pointer;
  &:hover {
    color: var(--red);
  }
`;

const Logo = styled.a`
  font-size: 2.5rem;
  color: #666;
  font-weight: bolder;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled(FaUtensils)`
  padding-right: 0.5rem;
  color: var(--red);
  font-size: 2.5rem;
`;

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
`;
