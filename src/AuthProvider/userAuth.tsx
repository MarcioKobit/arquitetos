import { useContext } from "react"
import { AuthContext } from "."

export const userAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

// export default userAuth;