import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";

import { getUsers } from "../services/users";
import Row from "./components/Row";

export const Home = () => {
  const { data, isLoading } = useQuery("users", () => getUsers());

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div>
      {data.slice(0, 10).map((user) => (
        <Row key={uuidv4()} data={user} />
      ))}
    </div>
  );
};

export default Home;
