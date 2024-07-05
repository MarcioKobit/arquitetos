import React from "react";
import { Transition } from "@headlessui/react";

import personal_data from "../assets/personal-data.png";
import profile_map from "../assets/profile-map.png";
import profile_lock from "../assets/profile-lock.png";
import profile_question from "../assets/profile-question.png";

import { RxCross1 } from "react-icons/rx";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	user: User;
}

interface User {
	name: string;
	subtitle: string;
	avatar: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
	const modalOptions = [
		{ title: "Dados pessoais", subtitle: "Veja e edite dados cadastrais", icon: personal_data, w: 28 },
		{ title: "Endereço", subtitle: "Confira e/ou edite seu endereço", icon: profile_map, w: 28 },
		{ title: "Alterar senha", subtitle: "Altere sua senha desde aqui", icon: profile_lock, w: 28 },
		{ title: "Dúvidas Frequentes", subtitle: "Tire suas dúvidas sobre a Pormade", icon: profile_question, w: 28 },
		{ title: "Dados da Conta", subtitle: "Veja e edite dados cadastrais", icon: profile_lock, w: 28 },
	];

	return (
		<Transition show={isOpen} as={React.Fragment}>
			<div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
				<Transition.Child 
                    enter="transition-opacity duration-300" 
                    enterFrom="opacity-0" 
                    enterTo="opacity-100" 
                    leave="transition-opacity duration-300" 
                    leaveFrom="opacity-100" 
                    leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black opacity-40" onClick={onClose}></div>
				</Transition.Child>

				<Transition.Child
					enter="transition-all duration-300 transform"
					enterFrom="opacity-0 translate-x-full -translate-y-full"
					enterTo="opacity-100 translate-x-0 translate-y-0"
					leave="transition-all duration-300 transform"
					leaveFrom="opacity-100 translate-x-0 translate-y-0"
					leaveTo="opacity-0 translate-x-full -translate-y-full"
				>
					<div className="absolute text-white text-4xl -top-8 right-4 md:hidden" onClick={onClose}>
						<RxCross1 />
					</div>
					<div className="flex items-center justify-center h-10/12 md:h-screen">
						<div className="w-full h-10/12 bg-green-600 mt-16 rounded-xl flex items-center">
							<div className="flex flex-col">
								<div className="absolute ml-24 md:ml-28 -mt-24">
									<div className="h-44 w-44 bg-white rounded-full">
										<div className="h-full w-full flex items-center justify-center">
											<img src={user.avatar} alt="avatar" className="h-40 w-40 object-cover rounded-full max-w-full" />
										</div>
									</div>
								</div>
								<div className="mt-16">
									{modalOptions.map((item, index) => (
										<div className="flex items-center my-8" key={index}>
											<div className="ml-16 mr-4">
												<img src={item.icon} alt="icon" width={item.w} height={item.w} />
											</div>
											<div className="ml-4 mr-16 text-white font-inter tracking-wide">
												<h2 className="mb-1">{item.title}</h2>
												<p className="text-xs font-extralight">{item.subtitle}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Transition.Child>
			</div>
		</Transition>
	);
};

export default Modal;
