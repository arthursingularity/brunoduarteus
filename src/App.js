import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Formulario from "./Formulario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;