import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={handleClick}>Voltar pra home</button>
    </div>
  );
};
