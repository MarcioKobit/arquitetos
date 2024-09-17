interface TableData {
    id: number;
    proposta: string;
    cliente: string;
    valor: number;
    pontos: number;
    loja: string;
    datacompra: string;
}

interface Props {
    data: TableData[];
}

const TableMobile: React.FC<Props> = ({ data }) => {


    const columns = ["Cliente", "Proposta", "Pontos", "Data"];

    return (
        <div className="w-full mx-auto mt-56" style={{ width: '100%' }}>
            <div className="">
                <table className="min-w-full font-inter text-sm">
                    <thead>
                        <tr>
                            {columns.map((item) => (
                                <th className="py-2 px-2 md:px-4 text-gray-400 font-normal text-left" key={item}>
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.cliente}</td>
                                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.proposta}</td>
                                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.pontos}</td>
                                <td className="py-3 px-2 md:px-4 md:py-7 text-gray-700">{item.datacompra}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableMobile;
