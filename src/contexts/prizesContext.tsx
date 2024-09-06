import { createContext, useState } from "react";
import { IPrizeProvider, PContext, Prize } from "./type";


export const PrizesContext = createContext<PContext>({} as PContext);


export const PrizesProvider = ({ children }: IPrizeProvider) => {
    const [prizes, setPrizes] = useState<Prize[] | []>()

    async function gravaPrizes(prize: string) {

        // console.log('gravaPrizes: ' + prize)

    }

    async function limpaPrizes() {
        setPrizes([]);
    }

    return (
        <PrizesContext.Provider value={{ ...prizes, gravaPrizes, limpaPrizes }}>
            {children}
        </PrizesContext.Provider >

    )

}

// export default AuthContext;