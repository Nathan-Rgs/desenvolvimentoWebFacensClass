import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer autoClose={false} />
    <App tab="home" />
  </>
);
