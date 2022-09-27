export default function Letras(props) {
    const {alfabeto, letraClicada, lClicadas} = props
    
    return (
        <div className="teclado-virtual">
            {alfabeto.map((letra, index) =>

                <button
                    key={index}
                    onClick={() => letraClicada(letra, index)}
                    disabled={lClicadas.includes(letra)}
                >
                    {letra}
                </button>

            )}
        </div>
    )
}