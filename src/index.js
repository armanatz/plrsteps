import { createRoot } from "react-dom/client";
import "./utils/type-defs";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
