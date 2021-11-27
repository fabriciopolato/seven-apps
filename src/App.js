import { Routes } from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
