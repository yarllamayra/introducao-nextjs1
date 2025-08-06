import NavBar from "@/components/NavBar";
import Cards from "@/components/Cards";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="bg-amber-50 min-h-screen px-4 py-8">
      {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time" /> */}

      <h1 className="text-center font-bold text-4xl mb-6 uppercase text-amber-900">
        Animais fofinhos divos:
      </h1>

      <p className="text-justify text-lg text-amber-900 max-w-4xl mx-auto mb-10 leading-relaxed">
        {/* Espaço para descrição se desejar no futuro */}
        Aqui você encontra uma pequena seleção de animais adoráveis com imagens e descrições.
      </p>

      <div className="flex justify-center mb-12">
        <Button className="bg-amber-700 text-white hover:bg-amber-800 transition-colors duration-300">
          veja mais
        </Button>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-8 uppercase">
          animais:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Cards
            title="cachorro"
            description="cachorrin"
            imageURL="https://i.pinimg.com/736x/94/b1/02/94b1021c4f8294c4a0b6e8213ca0374f.jpg"
            category={["cassoro"]}
          />

          <Cards
            title="gatinho"
            description="gatin"
            imageURL="https://i.pinimg.com/736x/1f/54/ac/1f54acbbecdfb5b248d42ace992b699b.jpg"
            category={["gatin"]}
          />

          <Cards
            title="galinha"
            description="cócó"
            imageURL="https://i.pinimg.com/736x/9f/fe/39/9ffe39bd13dd9d0a5a32f960eb78c70f.jpg"
            category={["galinha"]}
          />
        </div>
      </div>
    </div>
  );
}
