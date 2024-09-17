import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { userAuth } from "../AuthProvider/userAuth";
import { Button, Form, Input, Select, Space, Popconfirm } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { isMobile } from 'react-device-detect';


import 'react-toastify/dist/ReactToastify.css';
import { CheckOutlined } from "@ant-design/icons";
import api from "../services/api";


const { Search } = Input;
const gWidth = isMobile == true ? '98%' : 800;

const gWidthIdentityType = isMobile == true ? '20%' : '10%';
const gWidthIdentity = isMobile == true ? '40%' : '45%';
const gWidthFone = isMobile == true ? '40%' : '45%';

const gWidthZipCode = isMobile == true ? '35%' : '20%';
const gWidthStreet = isMobile == true ? '60%' : '70%';
const gWidthNumber = isMobile == true ? '15%' : '10%';

const gWidthState = isMobile == true ? '20%' : '10%';
const gWidthCity = isMobile == true ? '50%' : '70%';
const gWidthCountry = isMobile == true ? '30%' : '20%';


const DadosUsuarios = () => {
    const auth = userAuth();
    const [form] = Form.useForm();
    const [optionsState, setoptionsState] = useState([])

    const optIdentityType = [
        {
            value: 'CPF',
            label: 'CPF',
        },
        {
            value: 'CNPJ',
            label: 'CNPJ',
        }
    ];


    async function onFinish(values: {
        name: string, identityType: string, identityity: string, zipCode: string, street: string, number: string, state: string, city: string,
        neighbourhood: string, complement: string, mobileNumber: string, country: string
    }) {
        try {
            try {

                // console.log(values.name)

                const wRetorno = await toast.promise(
                    new Promise((resolve, reject) => {
                        // setTimeout(() => {
                        const data = {
                            name: values.name.toUpperCase(),
                            identityType: values.identityType,
                            identity: values.identityity,
                            zipCode: values.zipCode.toUpperCase(),
                            street: values.street.toUpperCase(),
                            number: values.number,
                            state: values.state,
                            city: values.city.toUpperCase(),
                            neighbourhood: values.neighbourhood.toUpperCase(),
                            complement: values.complement.toUpperCase(),
                            mobileNumber: values.mobileNumber,
                            country: values.country.toUpperCase(),

                        };
                        // const objChangePassword = api.put(auth.rota + '/login', data);

                        resolve(data)
                    }),
                    {
                        pending: "Atualizando Cadastro...",
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
                console.log(wRetorno)

                // if (wRetorno.data.STATUS == true) {

                //     setdisabledInput(true)
                // } else {
                //     toast.error('Erro ao alterar a senha, tente novamente');
                // }



            } catch (error) {
                // console.log()
            }

        } catch (error) {
            console.log('Erro:' + error);
        }
    }

    const UpperFirstWord = (pTexto: string) => {
        if (pTexto == null || pTexto == '') {
            return '';
        }

        const wTexto = pTexto[0].toUpperCase() + pTexto.substring(1).toLowerCase();
        return wTexto;
    }

    const justNumbers = (text: string) => {
        text = text.replaceAll(" ", "")
        const numbers = text.replace(/[^0-9]/g, '');
        return parseInt(numbers);
    }

    const onSearch = async (value: string) => {
        if (value == '' || value == null) {
            toast.error('Número do CEP não informado');
            return false
        }

        const wRetorno = await toast.promise(
            new Promise((resolve, reject) => {
                // setTimeout(() => {
                const objDados = api.get('/cep?cep=' + justNumbers(value));

                resolve(objDados)
            }),
            {
                pending: "Consultando CEP...",
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

            form.setFieldsValue({
                zipCode: wRetorno.data.DATA.cep,
                street: UpperFirstWord(wRetorno.data.DATA.logradouro),
                state: wRetorno.data.DATA.uf,
                city: UpperFirstWord(wRetorno.data.DATA.localidade),
                neighbourhood: UpperFirstWord(wRetorno.data.DATA.bairro),
                complement: UpperFirstWord(wRetorno.data.DATA.complemento),

            });
            // console.log(wRetorno.data)
        } else {
            toast.error('Erro ao Consultar o CEP');
        }
    }

    const getDadosSYS = async () => {
        try {
            const objDados = await api.get(auth.rota + '/dados');

            if (objDados.data.STATUS == true) {
                form.setFieldsValue({
                    name: UpperFirstWord(objDados.data.DATA.sys.name),
                    identityType: objDados.data.DATA.sys.identityType,
                    identity: objDados.data.DATA.sys.identity,
                    zipCode: objDados.data.DATA.sys.zipCode,
                    street: UpperFirstWord(objDados.data.DATA.sys.street),
                    number: objDados.data.DATA.sys.number,
                    state: objDados.data.DATA.sys.state,
                    city: UpperFirstWord(objDados.data.DATA.sys.city),
                    neighbourhood: UpperFirstWord(objDados.data.DATA.sys.neighbourhood),
                    complement: UpperFirstWord(objDados.data.DATA.sys.complement),
                    mobileNumber: objDados.data.DATA.sys.mobileNumber,
                    country: objDados.data.DATA.sys.country
                });

                setoptionsState(objDados.data.DATA.ufs);
            }

        } catch (error) {
            // console.log(error)
        }
    }

    const confirm = () =>
        new Promise((resolve) => {

            const data = {
                name: form.getFieldValue('name').toUpperCase(),
                identityType: form.getFieldValue('identityType'),
                identity: form.getFieldValue('identityity'),
                zipCode: form.getFieldValue('zipCode').toUpperCase(),
                street: form.getFieldValue('street').toUpperCase(),
                number: form.getFieldValue('number'),
                state: form.getFieldValue('state'),
                city: form.getFieldValue('city').toUpperCase(),
                neighbourhood: form.getFieldValue('neighbourhood').toUpperCase(),
                complement: form.getFieldValue('complement').toUpperCase(),
                mobileNumber: form.getFieldValue('mobileNumber'),
                country: form.getFieldValue('country').toUpperCase()

            };


            toast(JSON.stringify(data))
            setTimeout(() => resolve(null), 3000);
        })

    useEffect(() => {
        getDadosSYS();
    }, []);

    return (
        <>
            <NavBar />
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex absolute top-32 font-inter font-light text-center text-4xl text-zinc-400">
                    Atualização de dados
                </div>
                <div className="flex absolute top-60 font-inter font-light text-center text-4xl text-zinc-800">
                    <Space direction="horizontal" size="large">
                        <Form form={form} name='basic' onFinish={onFinish} style={{ width: gWidth }}>

                            <Space.Compact style={{ width: gWidth }}>
                                <Form.Item name='name' style={{ width: '100%' }} rules={[{ required: true, message: 'Informar nome!' }]}>
                                    <Input placeholder="Nome de Arquiteto." />
                                </Form.Item>
                            </Space.Compact>

                            <Space.Compact style={{ width: gWidth }}>
                                <Form.Item style={{ width: gWidthIdentityType }} name='identityType' rules={[{ required: true, message: 'Selecionar tipo!' }]}>
                                    <Select disabled={true} options={optIdentityType} />
                                </Form.Item>
                                <Form.Item style={{ width: gWidthIdentity }} name='identity' rules={[{ required: true, message: 'Informar Documento!' }]}>
                                    <Input readOnly={true} placeholder="Documento" />
                                </Form.Item>
                                <Form.Item style={{ width: gWidthFone }} name='mobileNumber' rules={[{ required: true, message: 'Informar Telefone!' }]}>
                                    <Input placeholder="Telefone" />
                                </Form.Item>
                            </Space.Compact>

                            <Space.Compact style={{ width: gWidth }}>
                                <Form.Item style={{ width: gWidthZipCode }} name='zipCode' rules={[{ required: true, message: 'Selecionar tipo!' }]}>
                                    <Search
                                        placeholder="CEP"
                                        onSearch={onSearch}
                                    />
                                </Form.Item>
                                <Form.Item style={{ width: gWidthStreet }} name='street' rules={[{ required: true, message: 'Informar Endereço!' }]}>
                                    <Input placeholder="Endereço" />
                                </Form.Item>
                                <Form.Item style={{ width: gWidthNumber }} name='number' rules={[{ required: true, message: 'Informar Número!' }]}>
                                    <Input placeholder="Número" />
                                </Form.Item>
                            </Space.Compact>

                            <Space.Compact style={{ width: gWidth }}>
                                <Form.Item style={{ width: '40%' }} name='neighbourhood' rules={[{ required: true, message: 'Informar o Bairro!' }]}>
                                    <Input placeholder="Bairro" />
                                </Form.Item>
                                <Form.Item style={{ width: '60%' }} name='complement' rules={[{ required: false, message: 'Informar o Bairro!' }]}>
                                    <Input placeholder="Complemento" />
                                </Form.Item>
                            </Space.Compact>


                            <Space.Compact style={{ width: gWidth }}>
                                <Form.Item style={{ width: gWidthState }} name='state' rules={[{ required: true, message: 'Selecionar UF!' }]}>
                                    <Select options={optionsState} />
                                </Form.Item>
                                <Form.Item style={{ width: gWidthCity }} name='city' rules={[{ required: true, message: 'Informar Cidade!' }]}>
                                    <Input placeholder="Cidade" />
                                </Form.Item>
                                <Form.Item style={{ width: gWidthCountry }} name='country' rules={[{ required: true, message: 'Informar Pais!' }]}>
                                    <Input readOnly={true} placeholder="País" />
                                </Form.Item>
                            </Space.Compact>

                            <Space.Compact >
                                <Form.Item >
                                    {/*
                                    <Button type="text" style={{ width: '300px' }} htmlType="submit">
                                        <CheckOutlined />
                                        <p className="text-xs text-zinc-500 leading-5 mr-4">Modificar</p>
                                    </Button> */}

                                    <Popconfirm
                                        title="Alterações cadastro"
                                        description="Confirma as alterações em seu cadastro?"
                                        onConfirm={confirm}
                                        onOpenChange={() => console.log('open change')}
                                    >
                                        {/* <Button type="primary">Open Popconfirm with Promise</Button> */}
                                        <Button type="text" style={{ backgroundColor: 'green', width: '300px' }}>
                                            <CheckOutlined />
                                            <p className="text-xl text-white leading-5 mr-4">Modificar</p>
                                        </Button>
                                    </Popconfirm>

                                    {/* <Button type="text">
                                        <CloseCircleOutlined />
                                        <p className="text-xd text-zinc-500 leading-5 mr-4">Cancelar</p>
                                    </Button> */}

                                </Form.Item>
                            </Space.Compact>


                        </Form>
                    </Space>
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

export default DadosUsuarios;
