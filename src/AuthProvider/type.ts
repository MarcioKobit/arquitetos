export interface IUser {
    id?: number;
    idpessoa?: number;
    nome?: string;
    token?: string;
    rota?: string;
    cupom?: string;

}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}