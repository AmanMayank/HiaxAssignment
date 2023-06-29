import styled from "styled-components";
import {
  AiFillLeftCircle,
  AiFillAccountBook,
  AiFillRightCircle,
} from "react-icons/ai";

function Menu() {
  return (
    <Container>
      <Logo>
        <img src="/images/HaiX_logo_colour.png" alt="logo" />
      </Logo>

      <Navmenu>
        <MenuItem>
          <span>FAVOURITES DASHBOARD</span>
        </MenuItem>
        <MenuItem>
          <span>REALTIME CHATGPT INSIGHTS(BETA)</span>
        </MenuItem>
        <MenuItem>PORTFOLIO COMPETITOR INSIGHTS</MenuItem>
        <MenuItem>LINKEDIN INSIGHTS</MenuItem>
      </Navmenu>

      <Icon>
        <AiFillLeftCircle />
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
  background-image: linear-gradient(#505157, #40e2ec);
  height: 100vh;
  overflow-y: hidden;
  position: relative;
`;

const Logo = styled.span`
  font-size: 0px;
  img {
    padding: 20px 10px 20px 15px;
    height: 35px;
    margin-left: 10px;
  }
`;

const Navmenu = styled.ul`
  padding: 20px 0px;
  list-style-type: none;
`;

const MenuItem = styled.li`
  padding: 20px 5px;
  color: white;
  font-size: 14px;
  border-bottom: 2px solid white;

  &:hover {
    cursor: pointer;
    color: #e7e8f0;
    background-color: #14a0cc;
  }
`;

const Icon = styled.div`
  width: inherit;
  font-size: 35px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 50px;
  color: white;
  transition-duration: 200ms;

  &:hover {
    font-size: 40px;
    cursor: pointer;
  }
`;

export default Menu;
