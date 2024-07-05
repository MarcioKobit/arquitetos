import PointsHome from "./Home/PointsHome";
import { Link, useLocation } from "react-router-dom";
import ProfileModal from "./ProfileModal";

import logo_white from "../assets/logo-white.png";
import logo from "../assets/logo.png";
import profile_img from "../assets/profile-img.png";
import bell from "../assets/bell.png";
import gray_bell from "../assets/gray-bell.png";
import { AiOutlineMenu } from "react-icons/ai";

import { useState, useEffect } from "react";

const NavBar = () => {
	const Links = [
		{ name: "Início", link: "/" },
		{ name: "Prêmios", link: "/prizes" },
		// { name: "Lojas", link: "/stores" },
		{ name: "Extratos", link: "/extracts" },
		{ name: "Dúvidas", link: "/faq" },
	];

	const location = useLocation();
	const { pathname } = location;
	// alert(pathname);
	const isDark = pathname === "/prizes";
	// const isDark = pathname === "/";

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [open, setOpen] = useState(false);

	const handleProfileClick = () => {
		setIsModalOpen(true);
		document.body.classList.add("modal-open");
	};

	const closeModal = () => {
		setIsModalOpen(false);
		document.body.classList.remove("modal-open");
	};

	const [scrollingDown, setScrollingDown] = useState(false);

	const handleScroll = () => {
		setScrollingDown(window.scrollY > 0);
		setTimeout(() => {
			setOpen(false)
		}, 500);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`w-full fixed top-0 left-0 z-10 ${scrollingDown && window.innerWidth < 768 ? "fade-out" : "fade-in"}`}>
			<div className={`md:flex ${pathname === "/" ? "h-44 md:h-48" : "h-24 md:h-32"} items-center justify-between px-4 md:px-10 py-4 tracking-wider font-inter ${isDark ? "bg-green-600" : "bg-white"}`}>
				<div className="font-bold text-2xl md:mb-8 cursor-pointer flex items-center font-inter text-gray-800">
					<Link to="/">
						<img src={isDark ? logo_white : logo} alt="Logo" className="w-44 object-contain" />
					</Link>
				</div>

				<div onClick={() => setOpen(!open)} className="text-3xl absolute right-6 top-6 cursor-pointer md:hidden">
					<AiOutlineMenu className={`${pathname === "/" ? "text-white" : "text-green-600"} md:hidden`} size={32} />
				</div>

				<ul className={`md:flex md:items-center md:pb-0 text-xs uppercase font-normal ${isDark ? "text-white bg-green-600" : "text-gray-400 bg-white"
					} absolute md:static md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"}`}>
					{Links.map((link) => (
						<li key={link.name} className={`mr-6 ${pathname === link.link && "text-green-300 font-bold"} text-lg md:text-xs md:my-0 my-7`}>
							<Link to={link.link}>{link.name}</Link>
						</li>
					))}
					<div>
						<img src={profile_img} alt="Foto de Perfil" className="absolute md:relative right-20 md:right-0 -top-16 md:top-0 h-12 w-12 md:h-16 md:w-16 rounded-full mx-4 cursor-pointer" onClick={handleProfileClick} />
					</div>
					<div className="absolute md:relative right-16 md:right-0 -top-12 md:top-0">
						<img src={isDark ? bell : gray_bell} alt="Sino" className="w-6 h-6 md:ml-4 object-scale-down" />
						<div className={`absolute rounded-full w-3 h-3 -mt-7 ml-3 md:ml-7 ${isDark ? "bg-green-400" : "bg-green-700"}`}></div>
					</div>
				</ul>
			</div>
			{pathname === "/" ? <PointsHome /> : null}
			<ProfileModal isOpen={isModalOpen} onClose={closeModal} user={{ name: "aaa", subtitle: "bbb", avatar: profile_img }} />
		</div>
	);
};

export default NavBar;
