import { BrowserRouter, Routes, Route } from "react-router-dom";

import Prizes from "../routes/Prizes.tsx";
import Home from "../routes/Home.tsx";
// import Home from "../routes/Home.tsx";
import Prize from "../routes/Prize.tsx";
import Extracts from "../routes/Extracts.tsx";
import Stores from "../routes/Stores.tsx";
import Faq from "../routes/Faq.tsx";
import ChangeSenha from "../routes/ChangeSenha.tsx";
import DadosUsuarios from "../routes/DadosUsuarios.tsx";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prizes" element={<Prizes />} />
            <Route path="/prize/:id" element={<Prize />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/extracts" element={<Extracts />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/changepass" element={<ChangeSenha />} />
            <Route path="/dados" element={<DadosUsuarios />} />
            <Route path="*" element={<Prize />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;
