
import { userAuth } from "../AuthProvider/userAuth";
import api from "./api";
import { setPontosLocalStorage } from "../AuthProvider/utils";



export async function f_loadPremios() {
    const auth = userAuth();
    var wRetorno = null;
    const objPremios = await api.get(auth.rota + '/premios');

    if (objPremios.data.STATUS == true) {
        wRetorno = objPremios.data.DATA;
    }

    return wRetorno

}

export async function f_getPoints() {
    try {
        var wRetorno = null;
        const auth = userAuth();
        const objPontos = await api.get(auth.rota + '/pontos');
        // console.log(objPontos.data);
        if (objPontos.data.RECORDS >= 1) {
            setPontosLocalStorage(objPontos.data.DATA.pontos);
            wRetorno = objPontos.data.DATA.pontos;

        }

    } catch (error) {
    }

    return wRetorno
}