import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./../routes/Login.tsx";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;