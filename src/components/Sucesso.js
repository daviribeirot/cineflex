import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

export default function Sucesso() {
    const location = useLocation();
    return (
         <Container>
            <Titulo>Pedido feito <br></br> com sucesso!</Titulo>

            <Textos data-test="movie-info">
                <strong>Filme e sessão:</strong>
                <p>{location.state.sessao.movie.title}</p>
                <p>{location.state.sessao.day.date} - {location.state.sessao.name}</p>
            </Textos>

            <Textos data-test="seats-info">
                <strong>Ingressos</strong>
                {location.state.numeroAssento.map((a) => (
                <p key={a}>Assento: {a}</p>
                ))}
            </Textos>

            <Textos data-test="client-info">
                <strong>Comprador(a):</strong>
                <p>Nome: {location.state.name}</p>
                <p>CPF: {location.state.cpf}</p>
            </Textos>
           
            <Link to="/">
                <Botao data-test="go-home-btn">Voltar pra Home</Botao>
            </Link>       

         </Container>

    
    )
}

const Titulo = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: "#293845";
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
`
const Textos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    color: #293845;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`

const Botao = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto',sans-serif;
    color: white;
    border-radius:5px;
    border:none;
`