import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { Container } from "@chakra-ui/react";
import styled from "styled-components";
import Footer from "./Footer";

const BodyContainer = styled(Container)`
  max-width: 56rem;
  margin: 0 auto;
  @media (min-width: 768px) {
  }
`;
const NavMenu = styled.a`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;
const NavbarLinks = styled.a`
  font-size: 1rem;
  color: gray;
  padding: 0.25rem;
  @media (min-width: 640px) {
    font-size: 1.25rem;
    padding: 1rem;
  }
`;
const BodyMain = styled.main`
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 42rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
const NavBar = styled.nav`
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
`;

export default function Body({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <BodyContainer centerContent={true}>
      <NavBar>
        <NavMenu>
          <NextLink href="/blog">
            <NavbarLinks>Blog</NavbarLinks>
          </NextLink>
          <NextLink href="/about">
            <NavbarLinks>About</NavbarLinks>
          </NextLink>
          <NextLink href="/">
            <NavbarLinks>Home</NavbarLinks>
          </NextLink>
        </NavMenu>
      </NavBar>
      <BodyMain>{children}</BodyMain>
      <Footer />
    </BodyContainer>
  );
}
