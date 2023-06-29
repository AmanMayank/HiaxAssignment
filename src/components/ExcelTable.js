import styled from "styled-components";

function ExcelTable() {
  return (
    <Container>
      <Header>
        <h3>Header</h3>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
  position: relative;
  background: #9b9eab;
  overflow: hidden;
`;

const Header = styled.div`
  height: 50px;
  background-image: linear-gradient(to right, #171c26, #40e2ec);
  color: white;
  padding: 5px 5px;
  text-align: center;
  justify-portfoliocontent: center;
  width: 100%;
  position: absolute;
`;

export default ExcelTable;
