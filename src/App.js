import { useState } from "react";
import "./styles/reset.css"
import "./styles/style.css";
import palavras from "./palavras";
import forca0 from "./imagens/forca0.png"
import forca1 from "./imagens/forca1.png"
import forca2 from "./imagens/forca2.png"
import forca3 from "./imagens/forca3.png"
import forca4 from "./imagens/forca4.png"
import forca5 from "./imagens/forca5.png"
import forca6 from "./imagens/forca6.png"

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // JSX - JavaScript and XML 
    return (
        <>
            <div className="forca">
                <img src={forca0} alt="forca" />
                <div className="forca-itens">
                    <button>Escolher Palavra</button>
                    <h1>_ _ _</h1>
                </div>
            </div>
            <div className="teclado-virtual">
                {alfabeto.map((letra) => <button>{letra}</button>)}
            </div>
            <div className="adivinhar-palavra esconde">
                <h1>Já sei a palavra!</h1>
                <input></input>
                <button>Chutar</button>
            </div>
        </>
    )

}

