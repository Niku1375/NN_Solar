import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initializeGA4 } from "./lib/analytics";

const queryClient = new QueryClient();

const gaId = import.meta.env.VITE_GA_ID;
if (gaId) {
  initializeGA4(gaId);
} else {
  console.warn("VITE_GA_ID environment variable is not set");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
