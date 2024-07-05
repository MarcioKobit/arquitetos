import { AiFillStar } from "react-icons/ai";

import leaf_pormade from "../../assets/leaf-pormade.png";
import pig from "../../assets/pig.png";
import tag from "../../assets/tag.png";

interface StoresListProps {
    title: string;
    score: number;
}

const StoresList = ({ title, score }: StoresListProps) => {
    return (
        <div className="flex items-center justify-between w-full pt-4 pl-4 pb-4 relative">
            <div className="flex items-start">
                <img src={leaf_pormade} alt="Leaf Pormade" className="mr-3" />
                <div className="mt-3">
                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                    <div className="flex items-center mt-4 md:mt-0">
                        <AiFillStar className="w-4 h-4 text-yellow-400" />
                        <AiFillStar className="w-4 h-4 text-yellow-400" />
                        <AiFillStar className="w-4 h-4 text-yellow-400" />
                        <AiFillStar className="w-4 h-4 text-yellow-400" />
                        <AiFillStar className="w-4 h-4 text-gray-300" />
                        <span className="text-gray-500 text-sm ml-2">{score}</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-12 right-28 md:right-20 flex items-center text-xs mt-1 md:mt-0">
                <span className="text-green-400 mx-2 font-bold">Online</span>
                <span className="text-gray-500">-</span>
                <span className="text-gray-500 mx-2">Disponível 24h</span>
            </div>
            <div className="flex items-center mr-3 md:mr-0">
                <img src={pig} alt="Pig" className="mr-2" />
                <img src={tag} alt="Tag" />
            </div>
        </div>
    );
};

export default StoresList;
