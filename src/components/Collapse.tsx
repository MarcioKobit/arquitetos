import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface CollapseProps {
	title: string;
	subtitle: string;
	text: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, subtitle, text }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className="w-screen flex items-center justify-center font-inter cursor-pointer my-6" onClick={handleCollapse}>
			<div className="w-5/6 bg-white rounded-lg green-box-shadow shadow-opacity p-6">
				{isCollapsed && (
					<div className="flex justify-between items-center">
						<h2 className="text-zinc-400 text-2xl font-light tracking-wide">{title}</h2>
						<button>
							<FiPlus size={32} className="text-green-600 text-xl" />
						</button>
					</div>
				)}

				{!isCollapsed && (
					<>
						<button className="relative float-right">
							{" "}
							<FiMinus size={32} className="text-green-600 text-xl" />
						</button>
						<h3 className="text-green-600 text-xl font-semibold mb-8">{subtitle}</h3>
						<p className="text-zinc-500 text-sm">{text}</p>
						<ul className="list-none text-zinc-500 text-sm mt-4">
							<li><div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 mt-4"></div>Item 1</li>
							<li><div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 mt-4"></div>Item 2</li>
							<li><div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 mt-4"></div>Item 3</li>
						</ul>
					</>
				)}
			</div>
		</div>
	);
};

export default Collapse;
