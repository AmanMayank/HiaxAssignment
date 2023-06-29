import styled from "styled-components";
import SocialMediaBar from "./SocialMediaBar";
import Graph from "./Graph";
import sentimentData from "../data/sentimentData.json";
import hashtagData from "../data/hashtagsdetails.json";

function CompanyPortFolio() {
  return (
    <>
      <Symbol>
        <h2>Symbol : Ithra</h2>
        <RemoveButton>Remove</RemoveButton>
      </Symbol>

      <SocialMediaBar />

      <DataContainer>
        <ButtonContainer>
          <Button>Sentiment</Button>
          <Button>Hashtag</Button>
        </ButtonContainer>

        <GraphContainer>
          <GraphItem>
            <Graph data={sentimentData} />
            <RemoveButton>Remove</RemoveButton>
          </GraphItem>
          <GraphItem>
            <Graph data={hashtagData} />
            <RemoveButton>Remove</RemoveButton>
          </GraphItem>
        </GraphContainer>
      </DataContainer>
    </>
  );
}

const Symbol = styled.div`
  display: flex;
  padding: 10px 20px;
  h2 {
    text-decoration: underline;
  }
`;

const DataContainer = styled.div`
  height: auto;
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

const RemoveButton = styled(Button)`
  margin-left: 10px;
`;

const GraphContainer = styled.div`
  display: flex;
  margin: 0px 10px 10px 10px;
  height: auto;
  background-image: linear-gradient(to right, #171c26, #40e2ec);
  margin-top: -30px;
  justify-content: space-between;
  // top right bottom left
`;

const GraphItem = styled.div`
  display: flex;
  margin: 10px 10px 10px 10px;
  width: auto;
  height: auto;
  overflow: hidden;
  text-align: center;
  justify-content: center;
`;

export default CompanyPortFolio;
