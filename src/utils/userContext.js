import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "ak",
    email: "ak@gmail.com",
  },
});

export default userContext;
