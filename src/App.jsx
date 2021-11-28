import { Routes } from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";
import { UserFiltersProvider } from "./hooks/useFilter";
import "./style/global.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={client}>
      <UserFiltersProvider>
        <Routes />
      </UserFiltersProvider>
    </QueryClientProvider>
  );
};

export default App;
