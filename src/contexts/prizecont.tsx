import { useContext } from "react"
import { PrizesContext } from "./prizesContext.tsx"

export const prizeCont = () => {
    const context = useContext(PrizesContext);

    return context;
}

// export default userAuth;