

import { Button, Flex, Form, Input, message } from "antd";
import { isMobile } from 'react-device-detect';
import { userAuth } from "../AuthProvider/userAuth";
import { useNavigate, } from "react-router-dom";


import logo from "./../assets/Logo_clube_branca.png";
import guys_laptop from "./../assets/guys-laptop.png";
import money_hand from "./../assets/money-hand.png";
import lock from "./../assets/lock.png";
import artboard1 from "./../assets/artboard1.png";
import artboard2 from "./../assets/artboard2.png";
import { RiFacebookLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { toast } from "react-toastify";

const gWidth = isMobile == true ? '80%' : 400;

const Login = () => {
	const auth = userAuth();
    const navigate = useNavigate();

    toast.success(window.innerWidth)

	async function onFinish(values: { email: string, password: string }) {
		try {
			const login = await auth.authenticate(values.email, values.password);
			if (login != null) {
				navigate("/");
			} else {
				console.log('Erro de Login')
				message.error('Dados de acesso inválidos')
			}

		} catch (error) {
			console.log('Erro de Login')
			message.error('Dados de acesso inválidos')
		}
	}

	return (
		<div className="flex flex-col md:flex-row h-screen font-inter">
			<div className="md:w-1/2 flex flex-col justify-center items-center">
				<img className="mb-4 corBlack" src={logo} width={393} height={96} alt="logo" />
				<h2 className="text-sm mb-4 mt-28 md:mt-12 text-zinc-550 leading-5">Digite e-mail e senha para acessar a conta.</h2>
                <Form name='basic' onFinish={onFinish} style={{ width: gWidth }}>
					<Form.Item name='email' rules={[{ required: true, message: 'Informar seu e-mail!' }]}>
						<Input placeholder="E-mail" />
					</Form.Item>

					<Form.Item name='password' rules={[{ required: true, message: 'Informar sua senha' }]}>
						<Input.Password placeholder="Senha" />
					</Form.Item>

                    <Form.Item >
						<Flex gap="small">
							<Button type="text" htmlType="submit">
								<img className="ml-4" src={money_hand} width={28} height={28} alt="money-hand" />
								<p className="text-xs text-zinc-500 leading-5 mr-4">Acessar</p>
							</Button>
							<Button type="text" className="">
								<img className="" src={lock} width={20} height={20} alt="lock" />
								{/* <AiOutlineUnlock size={28} className="text-green-600 ml-4" /> */}
								<p className="text-xs  leading-5">Esqueci minha senha</p>
							</Button>
						</Flex>
					</Form.Item>
				</Form>
				<div className="flex flex-col items-center mt-32">
					<div className="flex mb-4">
						<SlSocialInstagram size={38} className="corBranca" />
						<RiFacebookLine size={38} className="corBranca" />
					</div>
					<p className="text-sm corBranca break-words w-32 text-center ">.</p>
				</div>
			</div>
			<div className="w-1/2 h-screen hidden md:block">
				<img className="absolute hidden md:block bottom-0 start-1/3 z-0" width={300} height={300} src={artboard2} alt="artboard2" />
				<img className="absolute h-screen object-cover z-1" src={guys_laptop} alt="guys_laptop" />
			</div>
			<img className="absolute hidden md:block z-0" width={200} height={200} src={artboard1} alt="artboard1" />
		</div>
	);
};
export default Login;
