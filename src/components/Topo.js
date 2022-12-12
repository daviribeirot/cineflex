import styled from "styled-components";

export default function Topo() { 
    return(
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    )
}

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 67px;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    }
`