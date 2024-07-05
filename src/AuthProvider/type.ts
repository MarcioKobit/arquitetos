export interface IUser {
    id?: number;
    nome?: string;
    token?: string;
    rota?: string;

}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}