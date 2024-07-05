import { MdKeyboardArrowRight } from "react-icons/md";

interface CardProps {
	icon: string;
	title: string;
}

const CardsHome: React.FC<CardProps> = ({ icon, title }) => {
	const numLines = title.length;
	const isLargeTitle = numLines > 10;

	return (
		<div className="grid grid-cols-2 bg-white green-box-shadow shadow-opacity rounded-lg pl-6 pb-4 pr-4 pt-8 m-6 w-52 h-44">
			<div className="col-span-2 mr-8 w-16 h-16">
				<img className="text-zinc-800" src={icon} alt="trophy" />
			</div>
			<div className={`${isLargeTitle ? "mt-4" : "mt-8"}`}>
				<p className="text-sm font-medium capitalize text-zinc-800">{title}</p>
			</div>
			<div className="ml-auto mt-8">
				<MdKeyboardArrowRight className="text-green-600" size={20} />
			</div>
		</div>
	);
};

export default CardsHome;
