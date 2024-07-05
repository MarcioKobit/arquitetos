import { useEffect, useState } from "react";
import Table from "../components/Extracts/Table";
import NavBar from "../components/NavBar";
import { userAuth } from "../AuthProvider/userAuth";
import api from "../services/api";


const Extracts = () => {
    const [extrato, setextrato] = useState([]);
    const auth = userAuth();

    const getExtrato = async () => {
        try {
            const objExtrato = await api.get(auth.rota + '/extrato');
            setextrato(objExtrato.data.DATA);
            // console.log(objExtrato.data.DATA)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getExtrato();
    }, []);

    return (
        <>
            <NavBar />
            <div className="flex-grow flex flex-col items-center justify-center mb-5">
                <div className="flex absolute top-32 font-inter font-light text-center text-4xl text-zinc-400">
                    Veja seus <span className="text-green-600 font-bold ml-2">extratos</span>
                </div>
            </div>
            <Table data={extrato} />
        </>
    )
}

export default Extracts;