import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "./Footer"
import Sessao from "./Sessao"

export default function Sessoes() {

    const [filme, setFilme] = useState(undefined);
    const { idFilme } = useParams();
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;

    useEffect(() => {
        const promise = axios.get(URL)
        promise.then(res => setFilme(res.data));
        promise.catch(err => console.log(err.response.data))
    }, []);


    if (filme === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <Container>
            Selecione o horário:
            <ListaHorarios>
                {filme.days.map(f => (
                    <Sessao
                        data-test="movie-day" 
                        filme={f}
                        key={f.id}
                    />
                ))}
            </ListaHorarios>
            <Footer posterURL={filme.posterURL} title={filme.title} />
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: "#293845";
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const ListaHorarios = styled.div`
    margin-top: 30px;
`
