import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Bookshelf from "./pages/Bookshelf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  );
}

export default App;
