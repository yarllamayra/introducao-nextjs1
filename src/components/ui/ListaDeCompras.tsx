

"use client"

import { useState } from "react";

export default function ListaDeCompras() {

    const [lista, setLista] = useState([
        {item:"Arroz", comprado: false },
        {item:"Feijão", comprado: false },
        {item:"Macarrão", comprado: false },
    ])

    const marcarcomprado = (index:number) => {
        const novaLista = [...lista]
        novaLista[index].comprado = !novaLista[index].comprado
        setLista(novaLista)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                    Lista de Compras
                </h2>
                <ul className="space-y-4">
                    {lista.map((produto,index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-4 rounded-lg transition 
                                ${produto.comprado 
                                    ? "line-through text-gray-400 bg-gray-100" 
                                    : "text-gray-700 bg-gray-50 hover:bg-gray-100"}
                            `}
                        >
                            <span className="text-lg">{produto.item}</span>
                            <button
                                onClick={() => marcarcomprado(index)}
                                className={`text-sm px-4 py-2 rounded-md 
                                    ${produto.comprado 
                                        ? "bg-red-100 text-red-700 hover:bg-red-200" 
                                        : "bg-green-100 text-green-700 hover:bg-green-200"} 
                                    font-medium transition`}
                            >
                                {produto.comprado ? "Comprado" : "Comprar"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
