import { useState } from "react";
import { Cardiologista } from "../componentes/Especialidades/Cardiologista";

export const Especialidades = () => {
  return (
    <>
      <h1>Nossas Especialidades</h1>
      <p className="p2">
        Nossa equipe é formada profissionais qualificados comprometidos com um
        atendimento eficiente.
      </p>
      <div>
        <button id="btncontato" className="btn btn-info rounded-pill px-3">
          <a href="/Cardiologista">Cardiologista</a>
        </button>
        <button id="btncontato" className="btn btn-info rounded-pill px-3">
          <a href="/Dermatologista">Dermatologista</a>
        </button>
        <button id="btncontato" className="btn btn-info rounded-pill px-3">
          <a href="/Ginecologista">Ginecologista</a>
        </button>
      </div>
      <img className="doc1" src="doc1.png" />
      <img className="doc2" src="doc2.png" />
      <img className="doc3" src="doc3.png" />
    </>
  );
};
