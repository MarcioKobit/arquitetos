
import { userAuth } from "../AuthProvider/userAuth";
import api from "./api";



export async function f_loadPremios() {
    const auth = userAuth();

    var wRetorno = null;
    const objPremios = await api.get(auth.rota + '/premios');

    if (objPremios.data.STATUS == true) {
        wRetorno = objPremios.data.DATA;
    }

    return wRetorno

}