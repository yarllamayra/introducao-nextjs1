"use client"
import { useState } from "react"


export default function MiniDisplay() {

    const [display, setDisplay] = useState("")

    // const handleOperatorClick = (operator: string) => {
    //     // Não deixo o user dgitar um operador diferente
    //     // do primeiro operador que ele digitou
    //     const operators = ["+", "-", "*", "/"]

    //     const primeiroOperador = operator 

    //     const disableOperators = operators.filter((op)=> {
    //         op !==operator
    //     })


    //     const hasAnotherOperador = disableOperators.some(
    //         (op) => display.includes(op)
    //     )
    //     if(hasAnotherOperador) return 

    //     setDisplay(display + operator)
    //     // sei o operador que o usuario digitou
    //     // sei quais são os operadores que existem(possiveis)
    // }

    const backspace = () => {
        setDisplay(display.slice(0,-1))
    }

    const calculate = () => {
    try {
        const expression = display.replace(/\s+/g, "");
        const result = new Function("return " + expression)();
        setDisplay(String(result));
    } catch (error) {
        setDisplay("Erro");
    }
}

    const sun = () => {
        const values = display.split("+")
        const result = values.reduce(
            (acumuladora, valorAtual) => acumuladora + Number(valorAtual),
            0
        )
        setDisplay(String(result))
    }

    const subtraction = () => {
        const values = display.split("-")
        const numberValues = values.map((value)=>Number(value))
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora - valorAtual
        )
        setDisplay(String(result))
    }

    const product = () => {
        const values = display.split("*")
        const numberValues = values.map((value)=>Number(value))
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora * valorAtual
        )
        setDisplay(String(result))
    }

    const division = () => {
        const values = display.split("/")
        const numberValues = values.map((value)=>Number(value))
        const result = numberValues.reduce(
            (acumuladora, valorAtual) => acumuladora / valorAtual
        )
        setDisplay(String(result))
    }

    return (
        <div className="flex flex-col items-center my-10">
            
            {/* display */}
            <div className="flex justify-center overflow-x-auto
                items-center border border-gray-400 rounded
                p-4 w-40 h-14 text-center text-xl bg-gray-50 shadow-md">
                {display}
            </div>

            {/* teclado numérico */}
            <div className="grid grid-cols-3 gap-2 w-40 h-40 mt-5">
                <button 
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow"
                onClick={() =>{ setDisplay(display + "0") }}
                >
                    0
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "1") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    1
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "2") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    2
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "3") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    3
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "4") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    4
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "5") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    5
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "6") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    6
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "7") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    7
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "8") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    8
                </button>
                <button 
                onClick={() =>{ setDisplay(display + "9") }}
                className="bg-blue-300 hover:bg-blue-400 text-white font-semibold p-2 rounded shadow">
                    9
                </button>

                <button 
                onClick={() =>{ setDisplay("")}}
                className="bg-violet-300 hover:bg-violet-400 text-white font-semibold p-2 rounded shadow">
                 C
                </button>

                {/* Botão Soma */}
                <button 
                onClick={() =>{setDisplay(`${display}+`)}}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded shadow">
                 +
                </button>

                {/* Botão Multiplicação */}
                <button 
                onClick={() =>{setDisplay(`${display}*`)}}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded shadow">
                 *
                </button>
                
                {/* Botão Divisão */}
                <button
                onClick={() =>{setDisplay(`${display}/`)}}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded shadow">
                /
                </button>
                

                <button 
                onClick={() =>{calculate()}}
                className="bg-amber-400 hover:bg-amber-500 text-white font-semibold p-2 rounded shadow">
                 =
                </button>

                <button 
                onClick={() =>{setDisplay(`${display}-`)}}
                className="bg-green-400 hover:bg-green-500 text-white font-semibold p-2 rounded shadow">
                 -
                </button>

                <button 
                onClick={() =>{backspace()}}
                className="bg-violet-300 hover:bg-violet-400 text-white font-semibold p-2 rounded shadow col-span-2">
                 backspace
                </button>
            </div>

        </div>
    )
}
