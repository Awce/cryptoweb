import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

function useCriptoMoneda(label, stateInicial, opciones) {
  console.log(opciones);
  const [state, actualizarState] = useState(stateInicial);

  const SeleccionarCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={e => actualizarState(e.target.value)} value={state}>
        <option value="">- Selecciona -</option>
        {opciones.map(opcion => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.FullName}>
            {opcion.CoinInfo.Name}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SeleccionarCripto];
}

export default useCriptoMoneda;
