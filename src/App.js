import React, { useCallback } from "react";
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
import getPalavras from "./palavras";

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [cor, setCor] = React.useState("cinza");
    const [contador, setContador] = React.useState(0);
    const [palavraSorteada, setPalavraSorteada] = React.useState('');
    const [palavraUnderlines, setPalavraUnderlines] = React.useState([]);
    //const [conteudoImput, setConteudoImput] = React.useState[''];

    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    function sortearPalavra() {
        let palavras = getPalavras();
        const indice = Math.floor(Math.random() * palavras.length); //floor arredonda para o menor número inteiro e random retorna um indice aleatóri
        let palavra = palavras[indice];
        
        setPalavraSorteada(palavra);
        setPalavraUnderlines(palavra.split("").map((letraP) => '_ '));
    }

    function iniciarPartida() {
        sortearPalavra();
        setCor("azul");
    }

    function letraClicada(letra) {
        console.log(palavraSorteada);
        console.log(palavraUnderlines);

        if (palavraSorteada.includes(letra)) {
            setPalavraUnderlines(letra)
        } else  {
            setContador(contador + 1);
        }
        console.log(contador)
    }


    // JSX - JavaScript and XML 
    return (
        <>
            <div className="forca">
                <img src={imagens[contador]} alt="forca" />
                <div className="forca-itens">
                    <button onClick={iniciarPartida}>Escolher Palavra</button>
                    <h1>{palavraUnderlines}</h1>
                </div>
            </div>
            <div className="teclado-virtual">
                {alfabeto.map((letra, index) => <button key={index} className={cor} onClick={() => letraClicada(letra)}>{letra}</button>)}
            </div>
            <div className="adivinhar-palavra">
                <h1>Já sei a palavra!</h1>
                <input></input>
                <button className={cor}>Chutar</button>
            </div>
        </>
    )

}

