import { createContext, useContext, useState } from "react";

const INITIAL_FILTERS = { name: "", age: "" };

const UserFiltersContext = createContext({
  filters: INITIAL_FILTERS,
  onChangeFilters: () => {},
});

export const UserFiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const onChangeFilters = (event) => {
    const { name, value } = event.target;
    setFilters((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <UserFiltersContext.Provider value={{ filters, onChangeFilters }}>
      {children}
    </UserFiltersContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(UserFiltersContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within a UserFiltersProvider");
  }

  return context;
};

export default useFilter;
