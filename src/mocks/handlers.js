import { rest } from "msw";

import { users } from "./mocks";

export const handlers = [
  rest.get("https://random-persons.herokuapp.com/users", (req, res, ctx) => {
    return res(ctx.json(users));
  }),
];
