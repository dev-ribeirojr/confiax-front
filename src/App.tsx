import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";
import { Routes } from "@/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
