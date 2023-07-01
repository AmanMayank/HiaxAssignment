import styled from "styled-components";
import { Fragment } from "react";

function Table({ csvArray, config }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = csvArray.map((row) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(row)}</td>;
    });
    return <tr key={row.name}>{renderedCells}</tr>;
  });
  return (
    <TableContaier>
      {csvArray.length > 0 ? (
        <>
          <table>
            <TableHeader>
              <tr>{renderedHeaders}</tr>
            </TableHeader>

            <Body>{renderedRows}</Body>
          </table>
        </>
      ) : null}
    </TableContaier>
  );
}

const TableContaier = styled.div`
  margin-left: 50px;
  max-width: 100%;
  table {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
    padding: 4px;
  }
`;

const TableHeader = styled.thead`
  font-size: 14px;
  background-color: #5bc2d2;
  color: #fff;

  th {
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
    width: auto;
    padding: 10px 10px;
    line-height: 1.7;
  }
`;

const Body = styled.tbody`
  td {
    border: 1px solid #443c68;
    width: auto;
    max-height: 10px;
    padding: 10px 10px;
    line-height: 1;
  }
`;

export default Table;
