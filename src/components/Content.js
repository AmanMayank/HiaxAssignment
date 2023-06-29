import styled from "styled-components";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineContainer,
  AiFillRedditCircle,
} from "react-icons/ai";

import { BsTiktok } from "react-icons/bs";

function Content() {
  const companies = [
    "Ithra",
    "Hindware",
    "Adidas",
    "Tommy Hilfiger",
    "Nestle",
    "Hilton",
    "royal carribean cruise",
    "british gas",
    "indane",
    "Relaince",
    "Adani power",
    "Emirates",
    "Itc",
  ];

  const renderedList = companies.map((company) => {
    return <NavItem key={company}>{company}</NavItem>;
  });

  return (
    <Container>
      <Header>
        <h3>Header</h3>
      </Header>

      <Title>
        <h2>Please select portfolios to compare</h2>
      </Title>

      <NavMenu>{renderedList}</NavMenu>

      <SocialMediaHeader>
        <Logo>
          <AiFillTwitterCircle />
        </Logo>
        <Logo>
          <AiFillInstagram />
        </Logo>
        <Logo>
          <BsTiktok />
        </Logo>
        <Logo>
          <AiFillYoutube />
        </Logo>
        <Logo>
          <AiFillFacebook />
        </Logo>
        <Logo>
          <AiOutlineContainer />
        </Logo>
        <Logo>
          <AiFillRedditCircle />
        </Logo>
      </SocialMediaHeader>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
  position: relative;
  background: #9b9eab;
`;

const Header = styled.div`
  height: 50px;
  background-image: linear-gradient(to right, #171c26, #40e2ec);
  color: white;
  padding: 5px 5px;
  text-align: center;
  justify-content: center;
  width: 100%;
  position: absolute;
`;

const Title = styled.div`
  margin-top: 80px;
  text-align: center;
`;

const NavMenu = styled.ul`
  margin-top: 20px;
  padding: 10px 10px;
  list-style-type: none;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 5px 2px;
  padding: 5px 5px;
  box-sizing: border-box;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border-radius: 4px;
  background-color: #5bc2d2;
  border: 1px solid #111b1a;

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    border: white;
    background-color: #191f20;
    color: white;
  }
`;

const SocialMediaHeader = styled.div`
  margin-top: 20px;
  height: 40px;
  background-color: #171c26;
  display: flex;
  padding: 5px 100px;
  justify-content: space-between;
  text-align: center;
`;

const Logo = styled.div`
  padding: 5px 0;
  display: inline-block;
  color: white;
  font-size: 30px;
  background: linear-gradient(#5bc2d2 0 0) var(--p, 0) / var(--p, 0) no-repeat;
  transition: 0.4s, background-position 0s;

  &:hover {
    transform: scale(1.3);
    --p: 100%;
    color: #191f20;
    cursor: pointer;
  }
`;

export default Content;
