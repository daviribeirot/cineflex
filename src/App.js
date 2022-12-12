import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Filmes from "./components/Filmes";
import Sessoes from "./components/Sessoes";

function App() {
  return (
    <>
      <Topo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:idFilme" element={<Sessoes />}/>
          {/* <Route path="/assentos/:idSessao" element={<Assentos/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
