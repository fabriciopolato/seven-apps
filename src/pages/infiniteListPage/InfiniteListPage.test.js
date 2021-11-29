import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "react-query";

import { InfiniteListPage } from "./InfiniteListPage";
import { UserFiltersProvider } from "../../hooks/useFilter";
import { users } from "../../mocks/mocks";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const Wrapper = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <UserFiltersProvider>{children}</UserFiltersProvider>
    </QueryClientProvider>
  );
};

Object.defineProperty(window.screen, "height", { value: 1000 });

test("renders all elements correctly", async () => {
  render(<InfiniteListPage />, { wrapper: Wrapper });
  expect(screen.getByAltText("Seven App Logo")).toBeInTheDocument();
  expect(screen.getByText("SevenApps")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Age")).toBeInTheDocument();
});

test("Filter name is working properly", async () => {
  render(<InfiniteListPage />, { wrapper: Wrapper });
  const nameInput = screen.getByPlaceholderText("Name");
  const [user1, user2] = users.data;

  userEvent.type(nameInput, user1.name);
  expect(await screen.findByText(user1.name)).toBeInTheDocument();
  expect(screen.queryByText(user2.name)).not.toBeInTheDocument();
});

test("Filter age is working properly", async () => {
  render(<InfiniteListPage />, { wrapper: Wrapper });
  const ageInput = screen.getByPlaceholderText("Age");
  const [user1, user2] = users.data;

  userEvent.type(ageInput, String(user1.age));
  expect(await screen.findByText(user1.age)).toBeInTheDocument();
  expect(screen.queryByText(user2.age)).not.toBeInTheDocument();
});

test("renders users on screen", async () => {
  render(<InfiniteListPage />, { wrapper: Wrapper });
  await waitFor(() => {
    users.data.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });
  });
});
