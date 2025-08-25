

export function Filter() {
    const frutas = ['maçã', 'uva', 'melancia', 'carambola']

    const resultado = frutas.filter((fruta) => {
        const primeiraLetra = fruta[0]
        const ultimaletra = fruta [fruta.length-1]
        if (ultimaletra == "a" && primeiraLetra == "m") {
            return true
        } else {
            return false
        }
    })

    return (
        <div>

        </div>
    )
}
