import React, { useState } from 'react';
import Configuracoes from './Configuracoes';
import Inicio from './Inicio';

export default function app1() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const toggleTema = () => {
    setTemaEscuro((prevTema) => !prevTema);
  };

  return (
    <>
      <Configuracoes onToggleTema={toggleTema} />
      <Inicio temaEscuro={temaEscuro} />
    </>
  );
}
