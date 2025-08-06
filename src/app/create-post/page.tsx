import NavBar from "@/components/NavBar";
import Cards from "@/components/Cards";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="bg-amber-50 min-h-screen px-4 py-8">
      

      <h1 className="text-center font-bold text-4xl mb-6 uppercase text-amber-900">
        Animais fofinhos divos:
      </h1>

      <p className="text-justify text-lg text-amber-900 max-w-4xl mx-auto mb-10 leading-relaxed">
       
        Aqui você encontra uma pequena seleção de animais adoráveis com imagens e descrições.
      </p>

      <div className="flex justify-center mb-12">
        <Button className="bg-amber-700 text-white hover:bg-amber-800 transition-colors duration-300">
          veja mais
        </Button>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-8 uppercase">

          Gato dorminhoco, cachorro festeiro, galinha mandona, porquinho charmoso, 
          pato estiloso e coelho saltitante. impossível não amar essa gangue!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Cards
            title="cachorro"
            description="Especialista em virar o sofá, roubar petisco e fazer você rir até chorar!"
            imageURL="https://i.pinimg.com/736x/94/b1/02/94b1021c4f8294c4a0b6e8213ca0374f.jpg"
            category={["cassoro"]}
          />

          <Cards
            title="gatinho"
            description="Dorminhoco profissional, mestre em ronronar e dono das melhores travessuras"
            imageURL="https://i.pinimg.com/736x/1f/54/ac/1f54acbbecdfb5b248d42ace992b699b.jpg"
            category={["gatin"]}
          />

          <Cards
            title="galinha"
            description="Cócó glamourosa que desfila pelo galinheiro como se fosse uma passarela"
            imageURL="https://i.pinimg.com/736x/9f/fe/39/9ffe39bd13dd9d0a5a32f960eb78c70f.jpg"
            category={["galinha"]}
          />

          <Cards
            title="Porquinho"
            description="Rosado, fofinho e adora um dia na praia!"
            imageURL="https://i.pinimg.com/736x/05/0b/10/050b1064081c2ce5dc44be2d354f8abe.jpg"
            category={["porquin"]}
          />
          
          <Cards
            title="Pato"
            description="Nada com graça e vive fazendo quá quá."
            imageURL="https://i.pinimg.com/736x/15/3d/07/153d0736395fd60b8cfcd492ba300a53.jpg"
            category={["patin"]}
          />

          <Cards
            title="Coelho"
            description="Pulador ágil, orelhas grandes e muito amoroso."
            imageURL="https://i.pinimg.com/1200x/59/23/d2/5923d2ae76e6890208d687f0d29a3bd3.jpg"
            category={["coelo"]}
          />




        </div>
      </div>
    </div>
  );
}
