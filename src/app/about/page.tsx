// import NavBar from "@/components/NavBar"
"use client"
import Likes from "@/components/Likebutton";
import Counter from "@/components/ui/Counter";

export default function About(){

    return(
        <div>
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>

            <Likes initial = {0} />

        </div>
    )
}