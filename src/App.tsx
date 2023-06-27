import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navegacao } from "./componentes/PaginaInicial/Navegacao";
import { Container } from "react-bootstrap";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Container>
        <Navegacao></Navegacao>
        <AppRoutes></AppRoutes>
      </Container>
    </>
  );
}

export default App;
