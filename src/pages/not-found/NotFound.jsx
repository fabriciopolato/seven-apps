import { useNavigate } from "react-router-dom";

import * as Styled from "./StyledNotFound";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Styled.NotFound>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={handleClick}>Back to Home</button>
    </Styled.NotFound>
  );
};
