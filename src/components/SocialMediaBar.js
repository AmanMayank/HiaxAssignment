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

function SocialMediaBar() {
  return (
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
  );
}

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
  transition: 200ms, background-position 0s;

  &:hover {
    transform: scale(1.3);
    --p: 100%;
    color: #191f20;
    cursor: pointer;
  }
`;

export default SocialMediaBar;
