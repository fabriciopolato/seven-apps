import styled from "styled-components";

export const NoUserMessage = styled.p.attrs({
  className: "no-user-message",
})`
  font-size: 1.5rem;
`;

export const HeaderContainer = styled.p.attrs({
  className: "header-container",
})`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderLogo = styled.img.attrs({
  className: "header-logo",
})`
  margin: 1rem 0;
  margin-right: 1rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const TextHeader = styled.p.attrs({
  className: "text-header",
})`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CellContainer = styled.div.attrs({
  className: "cell-container",
})`
  margin: auto;
  padding: 0.5rem;
  font-weight: bold;

  .cell {
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.05);
    border: 1px solid #676767;
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
  margin-bottom: 1rem;
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
  border: 1px solid #676767;
  padding: 0.5rem;
  font-size: 1rem;
`;
