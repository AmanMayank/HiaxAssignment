import styled from "styled-components";
import { AiFillLeftCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Menu() {
  const Navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <img src="/images/HaiX_logo_colour.png" alt="logo" />
      </Logo>

      <Navmenu>
        <MenuItem onClick={() => Navigate("/")}>
          PORTFOLIO COMPETITOR INSIGHTS
        </MenuItem>
        <MenuItem onClick={() => Navigate("/table")}>
          TABLE FROM CSV DATA
        </MenuItem>
        <MenuItem>DUMMY OPTION</MenuItem>
        <MenuItem>DUMMY OPTION</MenuItem>
      </Navmenu>

      <Icon>
        <AiFillLeftCircle />
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
  background-image: linear-gradient(#171c26, #40e2ec);
  overflow-y: hidden;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Logo = styled.span`
  img {
    padding: 20px 10px 20px 15px;
    height: 35px;
    margin-left: 10px;
    background: white;
    border-radius: 30%;
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
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    cursor: pointer;
    color: #e7e8f0;
    background-color: #14a0cc;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
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
