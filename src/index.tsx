import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
void (async () => {
  const rootElement = document.getElementById("root");
  if (rootElement === null) {
    throw new Error("No root element found");
  }
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
})();
