import styled from "styled-components";
import SocialMediaBar from "./SocialMediaBar";

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

      <SocialMediaBar />

      <DataContainer>
        <ButtonContainer>
          <Button>Sentiment</Button>
          <Button>Hashtag</Button>
        </ButtonContainer>

        <GraphContainer>
          <Graph>1</Graph>
          <Graph>2</Graph>
        </GraphContainer>
      </DataContainer>
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

const DataContainer = styled.div`
  height: 50vh;
  background-color: #5bc2d2;
  position: relative;
  padding: 10px 10px;
`;

const ButtonContainer = styled.div`
  height: 10vh;
  display: flex;
  margin-left: 2px;
`;

const Button = styled.button`
  width: auto;
  height: 20px;
  padding: 0px 5px;
  margin-right: 2px;
  margin-left: 2px;
`;

const GraphContainer = styled.div`
  border: 2px solid black;
  display: flex;
  margin: 10px 10px 10px 10px;
  height: 30vh;
  // top right bottom left
`;

const Graph = styled.div`
  border: 2px solid black;
  margin: 10px 10px 10px 10px;
  width: 30%;
  height: auto;
`;

export default Content;
