import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";

// Tylko App – bez Suspense, bez StrictMode
createRoot(document.getElementById("root")).render(<App />);
