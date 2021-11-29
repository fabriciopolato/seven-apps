import { useFilter } from "../../hooks/useFilter";
import * as Styled from "./StyledComponents";

export const Filter = () => {
  const { onChangeFilters, filters } = useFilter();

  return (
    <Styled.FilterContainer>
      <Styled.Input
        type="text"
        name="name"
        id="name"
        onChange={onChangeFilters}
        placeholder="Name"
        value={filters.name}
      />
      <Styled.Input
        size="sm"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
        onChange={onChangeFilters}
        value={filters.age}
      />
    </Styled.FilterContainer>
  );
};

export default Filter;
