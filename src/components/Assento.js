import { useState } from "react";
import styled from "styled-components";

export default function Assento({ name, isAvailable, ids, setIds, id, numeroAssento, setNumeroAssento }) {
    const [corSelecionada, setCorSelecionada] = useState(false);

    function selecionado(name) {
        if (name) {
            setCorSelecionada(!corSelecionada);
            setIds([...ids, id]);
            setNumeroAssento([...numeroAssento, name]);
        } if (!isAvailable) {
            alert("Esse assento não está disponível")
            setCorSelecionada("");
        }
    }

    return (
        <Poltronas
            data-test="seat"
            onClick={() => selecionado(name)}
            isAvailable={isAvailable}
            corSelecionada={corSelecionada} >
            {name}
        </Poltronas>
    )
}

const Poltronas = styled.button`
  width: 35px;
  height: 35px;
  border:none;
  background: ${props => props.isAvailable ? '#84a59d' : '#F7C52B'};
  background-color: ${props => props.corSelecionada ? '#1AAE9E' : ''};
  border-radius: 50%;
  font-size: 13px;
  color: #000000;
  margin-bottom: 10px;
  margin-right: 8px;
  cursor: pointer;
`