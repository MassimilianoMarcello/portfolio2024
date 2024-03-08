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
        <NavItem>
          <Link href="/about_me" passHref>
            <NavLink>About Me</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/blog_post" passHref>
            <NavLink>Blog</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <NavLink>Use Client</NavLink>
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
`;

const NavFixed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
 
`;

const AnimatedLogo = styled.div`
  animation: fadeIn 2s ease-in-out;
align-items: center;

  img {
    /* width: 5rem;
    height: 5rem; */
    background-color: aliceblue;
    border-radius: 50%;
  }
`;

const AnimatedText = styled.h1`
  font-family: "protest guerrilla";
  font-size: 2rem;
  color: #fff;
  margin-left: 1rem;
`;

const MenuIcon = styled.div`
  cursor: pointer;
img{
  color: red;
}
`;

const NavMenu = styled.ul`
  list-style: none;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 0;
    width: 100%;
    background-color: #171d35;
  }
`;

const NavItem = styled.li`
  margin: 3.5rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #feeb64;
  }
`;
