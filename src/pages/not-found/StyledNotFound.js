import styled from "styled-components";

export const NotFound = styled.div.attrs({
  className: "not-found",
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 3rem;
  }

  button {
    margin-top: 5rem;
    padding: 0.8rem;
    border: 1px solid #000;
    font-size: 1rem;
  }
`;
