import { useEffect, useState } from "react";
import vector from "../../assets/vector.png";
import ProgressBar from "../ProgressBar";

interface Props {
	title: string;
	picture: any;
	percentage: number;
	points: number;
	width?: string;
}

const CardsPrize = ({ title, picture, percentage, points, width }: Props) => {
	const [wFoto, setwFoto] = useState('');

	const imagePrize = {
		height: 311,
		width: 271
	};


	useEffect(() => {
		if (picture != null) {
			setwFoto(picture.foto)
		} else {
			setwFoto('');
		}
	}, []);

	return (
		<div className={`bg-gray-50 rounded-lg p-3 ${width ? width : 'w-64'}`}>
			<div className="relative">
				<img src={vector} className="rounded-lg absolute bottom-0 object-scale-down" alt="vector" />
				<img src={wFoto} alt="nova_iorque" style={imagePrize} />
				<div className="absolute bottom-0 left-0 right-0 pl-6 pb-8">
					<h2 className="text-white text-md font-semibold break-words w-32">{title}</h2>
				</div>
			</div>
			<div className="relative mt-4">
				<ProgressBar progress={percentage} />
			</div>
			<p className="text-xs text-gray-700 mt-2">Necessário {points.toLocaleString("pt-BR")} pontos</p>
		</div>
	);
};

export default CardsPrize;
