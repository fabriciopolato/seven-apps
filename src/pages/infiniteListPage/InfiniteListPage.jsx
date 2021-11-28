import { useMemo, useRef } from "react";
import { useQuery } from "react-query";
import { CellMeasurerCache } from "react-virtualized";

import getFilteredUsers from "../../helpers/getFilteredUsers";
import useFilter from "../../hooks/useFilter";

import { getUsers } from "../../services/users";
import { Filter } from "../components/Filter";
import { UsersList } from "../components/UsersList";

import * as Styled from "./StyledInfiniteList";

export const InfiniteListPage = () => {
  const { data, isLoading } = useQuery("users", () => getUsers());
  const { filters } = useFilter();

  const cache = useRef(
    new CellMeasurerCache({ fixedWidth: true, defaultHeight: 100 })
  );

  const users = useMemo(
    () => getFilteredUsers(data !== undefined ? data : [], filters),
    [data, filters]
  );

  console.log(users);

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <Styled.InfiniteList>
      <Filter />
      <UsersList users={users} cache={cache} />
    </Styled.InfiniteList>
  );
};

export default InfiniteListPage;
