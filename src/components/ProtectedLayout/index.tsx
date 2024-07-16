import { userAuth } from "../../AuthProvider/userAuth";


export const ProtectdLayout = ({ children }: { children: JSX.Element }) => {
    const auth = userAuth();



    // console.log('Protected: ' + JSON.stringify(auth))

    if (!auth.id) {

        return (
            <h1>You don't have access</h1>
        )
    }



    return children
};