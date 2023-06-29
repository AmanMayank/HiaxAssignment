import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home table={false} />} />
        <Route path="/table" element={<Home table={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
