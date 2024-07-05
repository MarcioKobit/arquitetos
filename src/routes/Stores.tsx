import { useState, ChangeEvent } from "react";
import store_map from "../assets/store-map.png";
import { AiOutlineSearch } from "react-icons/ai";

import NavBar from "../components/NavBar";
import StoresList from "../components/Stores/StoresList";

interface Store {
	title: string;
	score: number;
}

const Stores = () => {
	const [searchText, setSearchText] = useState("");

	const storesList: Store[] = [
		{ title: "Pormade Blumenau", score: 4.5 },
		{ title: "Pormade Gaspar", score: 4.5 },
		{ title: "Pormade Indaial", score: 4.5 },
		{ title: "Pormade Joinville", score: 4.5 },
		{ title: "Pormade Curitiba", score: 4.5 },
	];

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
	};

	const filteredStores = storesList.filter((store) => store.title.toLowerCase().includes(searchText.toLowerCase()));

	return (
		<>
			<NavBar />
			<div className="justify-center font-inter mx-auto max-w-screen-xl md:mt-48">
				<div className="flex flex-col items-center justify-center mb-6 md:mb-12">
					<div className="flex absolute top-24 md:top-36 font-light text-center text-2xl md:text-4xl text-zinc-400">
						Conheça nossas <span className="text-green-600 font-bold ml-2">lojas</span>
					</div>
				</div>
				<div className="flex flex-col md:flex-row md:px-6 lg:px-16 mt-40 md:mt-0">
					<div className="w-4/5 mx-auto md:w-1/2 md:mr-6 md:mb-20">
						{
              window.innerWidth <= 768 && <img src={store_map} className="w-full" alt="Store Map" />
            }
						<div className="relative md:mb-12 mt-8 md:mt-0">
							<input
								type="text"
								value={searchText}
								onChange={handleSearchChange}
								className="appearance-none bg-zinc-100 rounded-full w-full h-12 py-2 px-4 md:px-5 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
								placeholder="Buscar lojas"
							/>
							<AiOutlineSearch className="absolute top-3 right-3 md:top-4 md:right-5 text-green-500" />
						</div>
            {
              window.innerWidth > 768 && <img src={store_map} className="w-full" alt="Store Map" />
            }
					</div>
					<div className="w-full md:w-1/2 md:ml-6">
						<div className="flex flex-col items-center divide-y">
							{filteredStores.map((store) => (
								<StoresList key={store.title} title={store.title} score={store.score} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Stores;
