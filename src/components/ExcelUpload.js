import { useState } from "react";
import styled from "styled-components";
import SortableTable from "./SortableTable";

function ExcelUpload() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      // console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    // console.log(newArray);
    setCsvArray(newArray);
  };

  const config = [
    {
      label: "Symbol",
      render: (stock) => stock.Symbol,
      sortValue: (stock) => stock.Symbol,
    },
    {
      label: "Name",
      render: (stock) => stock.Name,
      sortValue: (stock) => stock.Name,
    },
    {
      label: "Sector",
      render: (stock) => stock.Sector,
      sortValue: (stock) => stock.Sector,
    },
  ];

  return (
    <Container>
      <Form id="csv-form">
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={(e) => {
            setCsvFile(e.target.files[0]);
          }}
        ></input>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (csvFile) submit();
          }}
        >
          Submit
        </button>
      </Form>

      <SortableTable csvArray={csvArray} config={config} />
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
  position: relative;
  background: #9b9eab;
  overflow: hidden;
`;

const Form = styled.form`
  height: 50px;
  margin-top: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  input {
    margin-bottom: 10px;
  }
`;

export default ExcelUpload;
