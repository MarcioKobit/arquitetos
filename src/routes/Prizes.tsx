import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardsPrize from "../components/Prizes/CardsPrize";
import PointsPrizes from "../components/Prizes/PointsPrizes";
import { useEffect, useState } from "react";
import { Prize } from "../contexts/prizesContext.ts";
import api from "../services/api.ts";
import { userAuth } from "../AuthProvider/userAuth.tsx";
import { getPontosLocalStorage } from "../AuthProvider/utils.ts";

const Prizes = () => {
	const [prizes2, setPrizes2] = useState<Prize[]>([]);
	const auth = userAuth();
	const [pontos, setPontos] = useState(0);
	// setPontos(getPontosLocalStorage())


	const calculatePorcentage = (points: number) => {
		const porcentage = (pontos / points) * 100; // Calcula a porcentagem
		return parseFloat(porcentage.toFixed(0));
	};

	const getPrizes = async () => {
		try {
			const objPremios = await api.get(auth.rota + '/premios');
			setPrizes2(objPremios.data.DATA);
			// console.log(prize.)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getPrizes();
		setPontos(getPontosLocalStorage())
	}, []);



	return (
		<>
			<NavBar />
			<PointsPrizes points={pontos} />
			<div className="flex flex-col items-center justify-center mt-96 mb-20 font-inter">
				<div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{prizes2.map((el) => {
						return (
							<Link to={`/prize/${el.id}`} key={el.id}>
								<CardsPrize title={el.title} picture={el.picture} percentage={calculatePorcentage(el.points)} points={el.points} />
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Prizes;
