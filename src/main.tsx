import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./App";

const theme = extendTheme({
  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: "semibold",
        fontSize: "sm",
      },
    },
    FormErrorMessage: {
      baseStyle: {
        fontSize: "sm",
      },
    },
  },
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("rootElement is not defined");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
