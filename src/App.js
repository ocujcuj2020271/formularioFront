import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Formulario from "./Components/formulario/formulario";
import Lista from "./Components/Lista/lista";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Formulario/> } exact />
        <Route path="/Listas" element={ <Lista/> } exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
