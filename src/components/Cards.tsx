type CardProps = {
  title: string;
  description: string;
  imageURL: string;
  category: (
    | "cassoro"
    | "gatin"
    | "galinha"

  )[];
};

export default function Cards({
  title,
  description,
  imageURL,
  category,
}: CardProps) {
  return (
    <div className="bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl text-center font-semibold text-amber-900 mb-2">
        {title}
      </h2>
      <img
        className="mt-3 rounded-2xl"
        src={imageURL}
        alt={`Imagem de ${title}`}/>
      <p className="text-justify text-amber-800 mt-2">
        {description}
      </p>
      <p className="mt-4 text-amber-800">
        <strong>Categoria:</strong> {category.join(", ")}
      </p>
    </div>
  );
}
