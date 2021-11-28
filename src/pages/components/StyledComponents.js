import styled from "styled-components";

export const CellContainer = styled.div.attrs({
  className: "cell-container",
})`
  margin: auto;
  padding: 0.5rem;
  font-weight: bold;

  .even {
    border-radius: 10px;
    padding: 1rem;
    background-color: #539138;
    border: 3px solid #2f4858;
  }
  .odd {
    border-radius: 10px;
    padding: 1rem;
    background-color: #00716d;
    border: 3px solid #2f4858;
  }
`;

export const FilterContainer = styled.div.attrs({
  className: "filter-container",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  min-width: 350px;
  margin: 1rem;
`;

export const Input = styled.input.attrs({
  className: "input",
})`
  width: ${(props) => {
    let size = "";
    switch (props.size) {
      case "sm":
        size = "100px";
        break;
      case "md":
        size = "350px";
        break;
      default:
        size = "200px";
        break;
    }
    return size;
  }};
  border-radius: 6px;
  border: 3px solid #2f4858;
  padding: 0.5rem;
  font-size: 1rem;
`;
