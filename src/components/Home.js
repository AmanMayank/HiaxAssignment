import Menu from "./Menu";
import PortFolioContent from "./PortFolioContent";
import styled from "styled-components";
import ExcelUpload from "./ExcelUpload";

function Home({ table }) {
  return (
    <Container>
      <Menu />
      {!table && <PortFolioContent />}
      {table && <ExcelUpload />}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas: "leftside main";
  grid-template-columns: minmax(0, 2fr) minmax(0, 12fr);
  row:gap:20px;
  border: 2px solid black;
  position:relative;
`;

export default Home;
