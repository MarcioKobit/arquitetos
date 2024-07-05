export interface Prize {
    id?: number;
    title?: string;
    picture?: string;
    points?: number;
}

export interface PContext extends Prize {
    gravaPrizes: (prize: string) => Promise<void>;
    limpaPrizes: () => void;
}


export interface IPrizeProvider {
    children: JSX.Element;
};