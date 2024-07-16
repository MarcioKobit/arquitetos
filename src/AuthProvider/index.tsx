import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./type";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage, getPontos, setPontosLocalStorage } from "./utils";



export const AuthContext = createContext<IContext>({} as IContext)


export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setUser(user);
            getPontos(user).then((resposta) => {
                resposta.STATUS == true ? setPontosLocalStorage(resposta.DATA.pontos) : setPontosLocalStorage(0);
            });
        }
    }, []);

    async function authenticate(email: string, password: string) {
        try {
            const response = await LoginRequest(email, password);
            if (response.STATUS == true) {
                console.log(response.DATA)
                const paylod = { id: response.DATA.ID, IDPESSOA: response.DATA.IDPESSOA, nome: response.DATA.NOME, token: response.DATA.TOKEN, rota: response.DATA.ROTA, cupom: response.DATA.CUPOM };
                setUser(paylod);
                setUserLocalStorage(paylod);
                const pontos = await getPontos(paylod);
                pontos.STATUS == true ? setPontosLocalStorage(pontos.DATA.pontos) : setPontosLocalStorage(0);

                return true;
            } else {
                return null;
            }


        } catch (error) {
            // console.log('P: ' + error)
            return error;
        }

    }

    async function logout() {
        setPontosLocalStorage(0);
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider >
    )
}

// export default AuthContext;