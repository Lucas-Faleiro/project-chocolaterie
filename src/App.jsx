import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
