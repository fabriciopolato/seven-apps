import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import { InfiniteListPage, NotFound } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/infinite-list" />}
        />
        <Route path="/infinite-list" exact element={<InfiniteListPage />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};
