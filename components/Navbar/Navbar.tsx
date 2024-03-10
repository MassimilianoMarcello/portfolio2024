"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import barsSolid from "@/public/assets/bars-solid.svg";
import xmarkSolid from "@/public/assets/xmark-solid.svg";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleCloseMenu = () => {
    setClick(false);
  };

  const logoe = "/assets/logie_2.png";

  return (
    <NavContainer>
      <NavFixed>
        <Link href="/" passHref>
          <LogoContainer>
            <AnimatedLogo>
              <Image src={logoe} alt="mass dev logo" width={70} height={70} />
            </AnimatedLogo>
            <AnimatedText>Mass Dev</AnimatedText>
          </LogoContainer>
        </Link>
        <MenuIcon onClick={handleClick}>
          <Image
            src={click ? xmarkSolid : barsSolid}
            alt={click ? "Close Icon" : "Bars Icon"}
            width={40}
            height={40}
          />
        </MenuIcon>
      </NavFixed>
      <NavMenu className={click ? "active" : ""}>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/about_me" passHref>
            <NavLink>About Me</NavLink>
          </Link>
        </NavItem>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </NavItem>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/blog_post" passHref>
            <NavLink>Blog</NavLink>
          </Link>
        </NavItem>
        <NavItem onClick={handleCloseMenu}>
          <Link href="/" passHref>
            <NavLink>Contact</NavLink>
          </Link>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  width: 100%;
  background-color: #171d35;
  position: fixed;
  border-bottom: solid 0.2rem #feeb64;
`;

const NavFixed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: -1rem;
  margin-top: 0.3rem;
`;

const AnimatedLogo = styled.div`
  animation: fadeIn 2s ease-in-out;
  align-items: center;

  img {
    background-color: aliceblue;
    border-radius: 50%;
    animation: spin 2s linear;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AnimatedText = styled.h1`
  font-family: "protest guerrilla";
  font-size: 2.5rem;
  color: #fff;
  margin-left: 0.5rem;
  margin-top: 4rem;
  animation: slideIn 1s ease-in-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  img {
    color: red;
    background-color: white;
  }
  @media screen and (min-width: 920px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: none;
  margin-bottom: -2rem;
font-family: "Quicksand", sans-serif;

  @media screen and (min-width: 920px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
 
  }

  &.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #171d35;
    margin-top: 5.2rem;
  }
`;

const NavItem = styled.li`
  margin: 3.5rem;
  text-align: center;
a{
  text-decoration: none;
}
  @media screen and (min-width: 920px) {
    margin-top: -4.5rem;

    margin-left: 0;
  }
`;

const NavLink = styled.div`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #feeb64;
  }
`;
