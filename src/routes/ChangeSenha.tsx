import { useState } from "react";

import NavBar from "../components/NavBar";
import { userAuth } from "../AuthProvider/userAuth";
import { Button, Flex, Form, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/api";
import lock from "./../assets/lock.png";


const ChangeSenha = () => {
    const auth = userAuth();
    const [form] = Form.useForm();
    const [disabledInput, setdisabledInput] = useState(false);

    async function onFinish(values: { currentPassword: string, newPassword: string, confimPassword: String, confimCode: String }) {
        try {
            try {
                if (!disabledInput) {
                    if (values.currentPassword.trim() == values.newPassword.trim()) {
                        toast.error('A "Nova Senha" não pode ser igual a "Senha Atual"!');
                        return false
                    }

                    if (values.newPassword.trim() != values.confimPassword.trim()) {
                        toast.error('A informações da "Nova Senha" e "Confirmação da Senha" estão diferentes!');
                        return false
                    }
                    const wRetorno = await toast.promise(
                        new Promise((resolve, reject) => {
                            // setTimeout(() => {
                            var data = { AREA: "ARQUITETOS", SENHA: values.currentPassword.trim(), NOVASENHA: values.newPassword.trim(), CONFIRMASENHA: values.confimPassword.trim() };
                            const objChangePassword = api.put(auth.rota + '/login', data);

                            resolve(objChangePassword)
                        }),
                        {
                            pending: "Atualizando Senha...",
                            success: "Processo Finalizado!",
                            error: ""
                        },
                        {
                            position: 'top-center',
                            closeOnClick: false,
                            pauseOnHover: false,
                            pauseOnFocusLoss: false,
                            draggable: false,
                            autoClose: 1
                        }
                    )

                    if (wRetorno.data.STATUS == true) {

                        setdisabledInput(true)
                    } else {
                        toast.error('Erro ao alterar a senha, tente novamente');
                    }

                } else {
                    var data = { AREA: "ARQUITETOS", EFETIVAR: values.confimCode, SENHA: '', NOVASENHA: '', CONFIRMASENHA: '' };
                    const objEfetivado = await api.put(auth.rota + '/login', data);

                    if (objEfetivado.data.STATUS == true) {
                        toast.success('Alterando Item');
                        form.resetFields();
                        setdisabledInput(false);
                    } else {
                        toast.error('Erro ao validar o código!');
                    }
                }

            } catch (error) {
                console.log()
            }

        } catch (error) {
            console.log('Erro:' + error);
        }
    }

    return (
        <>
            <NavBar />
            <div className="flex-grow flex flex-col items-center justify-center mb-5">
                <div className="flex absolute top-32 font-inter font-light text-center text-4xl text-zinc-400">
                    Alterar Senha
                </div>
                <div className="flex absolute top-60 font-inter font-light text-center text-4xl text-zinc-400">
                    <Form form={form} name='basic' onFinish={onFinish} >
                        <Form.Item name='currentPassword' rules={[{ required: true, message: 'Informar sua senha Atual!' }]}>
                            <Input.Password disabled={disabledInput} placeholder="Senha Atual." />
                        </Form.Item>

                        <Form.Item name='newPassword' rules={[{ required: true, message: 'Informar sua nova senha' }]}>
                            <Input.Password disabled={disabledInput} placeholder="Nova Senha" />
                        </Form.Item>

                        <Form.Item name='confimPassword' rules={[{ required: true, message: 'Informar sua confirmação da senha' }]}>
                            <Input.Password disabled={disabledInput} placeholder="Confimação da senha" />
                        </Form.Item>
                        {disabledInput ? (
                            <Form.Item name='confimCode' rules={[{ required: disabledInput, message: 'Informar Código de confirmação' }]}>
                                <Input disabled={!disabledInput} placeholder="Confimação da senha" />
                            </Form.Item>
                        ) : null}
                        <Form.Item wrapperCol={{ offset: 4, span: 1 }}>
                            <Flex gap="full">
                                <Button type="text" htmlType="submit">
                                    <img className="ml-4" src={lock} width={28} height={28} alt="Alterar senha" />
                                    <p className="text-xs text-zinc-500 leading-5 mr-4">Modificar</p>
                                </Button>
                            </Flex>
                        </Form.Item>
                    </Form>
                    <ToastContainer
                        position="top-center"
                        bodyClassName={() => "text-sm font-white font-med block p-4"}
                        closeOnClick={false}
                        pauseOnHover={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                    />

                </div>
            </div>
        </>
    )
}

export default ChangeSenha;