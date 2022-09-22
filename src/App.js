export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // JSX - JavaScript and XML
    return (
        <div>
            <div class="forca">
                <img src="./assets/forca0.png" alt="forca" />
                <div class="forca-itens">
                <button>Escolher Palavra</button>
                <h1>_ _ _</h1>
            </div>
            </div>
            <div class="teclado-virtual">
                {alfabeto.map((letra) => <button>{letra}</button>)}
            </div>
            <div class="adivinhar-palavra esconde">
                <h1>Já sei a palavra!</h1>
                <input></input>
                <button>Chutar</button>
            </div>
        </div>
    )

}

