import { Container } from "../styles";
import Menu from "./Menu";
import PortFolioContent from "./PortFolioContent";
import ExcelTable from "./ExcelTable";

function Home({ table }) {
  return (
    <Container>
      <Menu />
      {!table && <PortFolioContent />}
      {table && <ExcelTable />}
    </Container>
  );
}

export default Home;
