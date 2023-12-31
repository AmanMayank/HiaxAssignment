import { useState } from "react";
import styled from "styled-components";
import SortableTable from "./SortableTable";

function ExcelUpload() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  const [headers, setHeaders] = useState([]);

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
    const updatedStr1 = str.replace(/"/g, "");
    const updatedStr = updatedStr1.replace(/;/g, ",");

    const headers = updatedStr.slice(0, updatedStr.indexOf("\n")).split(delim);
    const rows = updatedStr.slice(updatedStr.indexOf("\n") + 1).split("\n");

    const headerconfig = headers.reduce((obj, header, i) => {
      obj[i] = header;
      return obj;
    }, []);

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setHeaders(headerconfig);
    setCsvArray(newArray);
  };

  const headerConfig = headers.map((header, i) => {
    return {
      label: header,
      render: (stock) => stock[header],
      sortValue: (stock) => stock[header],
    };
  });

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
            setCsvArray([]);
            if (csvFile) submit();
          }}
        >
          Submit
        </button>
      </Form>

      {csvArray.length > 0 && (
        <SortableTable csvArray={csvArray} headerConfig={headerConfig} />
      )}
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
  position: relative;
  max-width: 100vw;
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
