import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-areas: "leftside main";
  grid-template-columns: minmax(0, 2fr) minmax(0, 12fr);
  row:gap:20px;
  border: 2px solid black;
`;

export { Container };
