
import trophy from "./../assets/trophy.png";
import stores from "./../assets/stores.png";
import extracts from "./../assets/extracts.png";
// import financial_extracts from "./assets/financial-extracts.png";
import faq from "./../assets/faq.png";
import account from "./../assets/account.png";
import NavBar from "./../components/NavBar";
import CardsHome from "./../components/Home/CardsHome";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="flex items-center justify-center mt-60 md:mt-72 mb-8 sm:mb-12 font-inter">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <Link to="prizes">
                        <CardsHome icon={trophy} title={"Prêmios"} />
                    </Link>
                    {/* <Link to="stores"> <CardsHome icon={stores} title={"Lojas"} /> </Link> */}
                    <Link to="extracts">
                        <CardsHome icon={extracts} title={"Extratos"} />
                    </Link>
                    {/* <Link to="financial_extracts"><CardsHome icon={financial_extracts} title={"Extratos Financeiros"} /></Link> */}
                    <Link to="faq">
                        <CardsHome icon={faq} title={"Dúvidas Frequentes"} />
                    </Link>
                    <Link to="faq">
                        <CardsHome icon={account} title={"Conta"} />
                    </Link>
                </div>
            </div>
        </>
    );
}
