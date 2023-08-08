import "./App.css";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
