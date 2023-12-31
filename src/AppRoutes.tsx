import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./paginas/Home";
import { Sobre } from "./paginas/Sobre";
import { Especialidades } from "./paginas/Especialidades";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Sobre} path="/sobre" />
        <Route Component={Especialidades} path="/especialidades" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
