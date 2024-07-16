import api from "../services/api";
import { IUser } from "./type";

export function setUserLocalStorage(user: IUser | null) {
    sessionStorage.setItem('p', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = sessionStorage.getItem('p');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export function setPontosLocalStorage(pontos: number,) {
    sessionStorage.setItem('nlvpoints', pontos + "");
}

export function getPontosLocalStorage() {
    const pontos = sessionStorage.getItem('nlvpoints');

    if (!pontos) {
        return 0;
    }

    return parseInt(pontos) ?? 0;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const wRetorno = await api.post('/login', { LOGIN: email, SENHA: password,  AREA: "ARQUITETOS", AMBIENTE: 'DEV' });
        // console.log(wRetorno);
        return wRetorno.data;
        // return wRetorno;
    } catch (error) {
        
        // console.log('V' + error)
        // return error;
    }
}


export async function getPontos(user: IUser) {
    try {
        const wRetorno = await api.get(user.rota + '/pontos');
        return wRetorno.data;
    } catch (error) {
        return null;
    }
}