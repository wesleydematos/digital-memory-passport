import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Memorie from "./pages/Memorie";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorie" element={<Memorie />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
