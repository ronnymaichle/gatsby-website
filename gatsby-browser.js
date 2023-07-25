import "./src/styles/global.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { MenuProvider } from "./src/components/MenuContext";

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);
