import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";

function ExcelTable() {
  const [stocks, setStocks] = useState([]);

  const fetchStocks = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://prototype.sbulltech.com/api/v2/instruments"
      );
      let JsonData = csvJSON(response.data);
      if (JsonData.length > 0) {
        setStocks(JsonData);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  //Function to convert CSV to JSON
  const csvJSON = (csv) => {
    const lines = csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i]) continue;
      const obj = {};
      const currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result;
  };

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  const renderedStocks = stocks.map((stock) => {
    let { Symbol, Name, Sector } = stock;
    if (!Symbol) {
      Symbol = stock.item.Symbol;
      Name = stock.item.Name;
      Sector = stock.item.Sector;
    }
    return (
      <Body key={Symbol}>
        <td>{Symbol}</td>
        <td>{Name}</td>
        <td>{Sector}</td>
      </Body>
    );
  });

  return (
    <Container>
      <Header>
        <h3>Header</h3>
      </Header>

      <Title>
        <h2>Table displaying data received in CSV format</h2>
      </Title>

      <Table>
        <TableHeader>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </TableHeader>

        <tbody>{renderedStocks}</tbody>
      </Table>
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
  justify-content: center;
  width: 100%;
  position: absolute;
`;

const Title = styled.div`
  margin-top: 80px;
  text-align: center;
`;

const Table = styled.table`
  position: relative;
  margin-top: 50px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px black;
  width: 100%;
`;

const TableHeader = styled.thead`
  font-size: 14px;
  background-color: #5bc2d2;
  color: #fff;

  th {
    border: 1px solid #443c68;
    width: auto;
    padding: 10px 10px;
    line-height: 1.7;
  }
`;

const Body = styled.tr`
  td {
    border: 1px solid #443c68;
    width: auto;
    padding: 10px 10px;
    line-height: 1.7;
  }
`;

export default ExcelTable;
