import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Filmes from "./components/Filmes";

function App() {
  return (
    <>
    <Topo />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Filmes />}/>
      
      {/* <Route path="/sessoes/:idSessao"/> */}
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
