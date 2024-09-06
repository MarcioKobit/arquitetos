import NavBar from "../components/NavBar";
import vector_big from "../assets/vector-big.png";
import ProgressBar from "../components/ProgressBar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Prizes/Carousel";
import api from "../services/api.ts";
import { userAuth } from "../AuthProvider/userAuth.tsx";
import { Prize as premio } from "../contexts/prizesContext.ts";
import ImageSlider from "../components/images/ImageSlider.tsx";

const Prize = () => {

	const auth = userAuth();
	const { id } = useParams();
	const [pontos, setPontos] = useState(0);
	const [slides, setslides] = useState([]);
	const [prize, setPrizes] = useState<premio | null>()

	const getPrizes = async () => {
		try {
			const objPremios = await api.get(auth.rota + '/premios?idpremio=' + id);
			setPrizes(objPremios.data.DATA[0]);
			setslides(objPremios.data.DATA[0].photo)

		} catch (error) {
			console.log(error)
		}
	}

	const getPontos = async () => {
		try {
			const objPontos = await api.get(auth.rota + '/pontos');
			setPontos(objPontos.data.DATA.pontos);
		} catch (error) {
			console.log(error)
		}
	}

	const calculatePorcentage = (points: number) => {
		const porcentage = (pontos / points) * 100;
		return parseFloat(porcentage.toFixed(0));
	};

	useEffect(() => {
		if (id != undefined) {
			getPrizes();
			getPontos();

		}

	}, []);

	return (
		<>
			<NavBar />
			{prize != undefined ? (
				<div className="flex flex-col md:flex-row justify-center md:items-center h-screen font-inter mt-72 md:mt-48">
					<div className="md:mr-8 mx-4 :mx-0">
						<div className="relative">
							<img src={vector_big} className="absolute bottom-0 object-contain rounded-3xl md:w-full" alt="vector" />
							<ImageSlider slides={slides} />
							{/* <img src={prize.photo[0].foto} className="rounded-3xl md:w-full" width={271} height={311} alt="" /> */}
						</div>

					</div>
					<div className="px-4 md:px-16 py-8">
						<h1 className="text-3xl md:text-3xl text-green-600 break-words font-bold mb-4 md:w-72">{prize.title}</h1>
						<p className="text-sm md:text-md text-gray-600 mb-6">Prazo: 20/12</p>
						<div className="mb-2">
							<ProgressBar progress={calculatePorcentage(prize.points)} height={"h-7"} width={"w-72"} points={pontos} text={"text-sm"} />
						</div>
						<p className="text-xs md:text-sm text-gray-400 break-words mb-6">Necessários {prize.points.toLocaleString("pt-BR")} pontos</p>
						<p className="text-sm md:text-md w-full md:w-80 mb-6 text-gray-600">
							{prize.texto}
						</p>
						{prize.type == 'R' ? (
							<button className="bg-gray-200 text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-full mb-6 md:mb-12 w-32">Adquirir</button>
						) : null}
						{/* <p className="text-sm md:text-md text-gray-600 mb-6">Outras premiações:</p> */}
						{/* <Carousel current={prize.id} /> */}
					</div>
				</div>
			) : null}
		</>
	);
};

export default Prize;
