"use client"

import { useEffect, useState } from "react"



export default function EffectCounter() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        alert("useEffect executou!")
        document.title = `Contagem: ${count}`
    }, [count])

    return (
        <div className="text-center p-10">
            <h1>Contagem: {count} </h1>
            <button 
            className="bg-amber-50 rounded p-2
            hover:bg-amber-200"
            onClick={()=> {setCount(count+1)}}>
                incrementar
            </button>
        </div>
    )
}