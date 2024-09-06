import { Transition } from "@headlessui/react"
import { Prize } from "../../contexts/prizesContext"
import vector from "../../assets/vector.png";
import ProgressBar from "../ProgressBar";
import api from '../../services/api.ts';
import { userAuth } from '../../AuthProvider/userAuth.tsx';
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

interface CardsCarouselProps {
    prizes: Prize[];
    currentImageIndex: number;
    isNextTransition: boolean;
    isFirst: boolean;
}

const CardsCarousel = ({ prizes, isNextTransition, currentImageIndex, isFirst }: CardsCarouselProps) => {


    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [index, setIndex] = useState(0);
    const [lPrizer, setlPrizes] = useState<Prize[]>([])
    const auth = userAuth();

    const calculatePorcentage = (points: number) => {
        const porcentage = (user.points / points) * 100; // Calcula a porcentagem
        return parseFloat(porcentage.toFixed(0));
    };

    const handleRedirect = (prizeId: number) => {
        navigate(`/prize/${prizeId}`); // Redirecionar para a rota desejada
    };

    const getPrizes = async () => {
        try {

            await api.get(auth.rota + '/premios?idpremio=' + currentImageIndex + '&not=true').then((resposta) => {
                console.log(resposta.data.DATA);
                setlPrizes(resposta.data.DATA);
                console.log(lPrizer.length);
                // console.log(lPrizer[index].title);

            });

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPrizes();
    }, []);


    return (
        <div>
            <Transition
                show={true}
                enter={`transition-transform duration-500 ${isNextTransition ? 'translate-x-full' : '-translate-x-full'
                    }`}
                enterFrom={isNextTransition ? '-translate-x-full' : 'translate-x-full'}
                enterTo="translate-x-0"
                leave={`transition-transform duration-500 ${isNextTransition ? '-translate-x-full' : 'translate-x-full'
                    }`}
                leaveFrom="translate-x-0"
                leaveTo={isNextTransition ? 'translate-x-full' : '-translate-x-full'}
            >
                <div className="relative mb-2 cursor-pointer" onClick={() => handleRedirect(lPrizer[index].id)}>
                    <img src={vector} className="rounded-lg absolute bottom-0 object-scale-down w-40" alt="vector" />
                    {/* <img src={prizes[index].photo[0].foto} className="rounded-lg w-40 h-36" alt="Carousel Image" /> */}
                    <div className="absolute bottom-0 left-0 right-0 pl-4 pb-3">
                        {/* <h2 className="text-white text-md font-semibold break-words w-32">{lPrizer[index].title}</h2> */}
                    </div>
                </div>
                {/* <ProgressBar progress={calculatePorcentage(lPrizer[index].points)} height={"h-4"} text={"text-xs"} /> */}
            </Transition>
        </div>


    )
}

export default CardsCarousel