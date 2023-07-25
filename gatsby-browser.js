import "./src/styles/global.css";

import React from "react";
import { MenuProvider } from "./src/components/MenuContext";

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);
