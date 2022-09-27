import React from "react";
import "./styles/reset.css";
import "./styles/style.css";
import forca0 from "./imagens/forca0.png";
import forca1 from "./imagens/forca1.png";
import forca2 from "./imagens/forca2.png";
import forca3 from "./imagens/forca3.png";
import forca4 from "./imagens/forca4.png";
import forca5 from "./imagens/forca5.png";
import forca6 from "./imagens/forca6.png";
import getPalavras from "./palavras";
import Jogo from "./componentes/jogo";
import Letras from "./componentes/letras";
import Chute from "./componentes/chute";

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const [contador, setContador] = React.useState(0);                                        // contador erros                          
    const [palavraSorteada, setPalavraSorteada] = React.useState('');                         // palavra sorteada                          
    const [pSorteadaNormalizada, setPSorteadaNormalizada] = React.useState([]);               // palavra sorteada sem acentos, no array              
    const [pUnderlines, setPUnderlines] = React.useState([]);                                 // palavra que aparece no jogo em forma de underlines          
    const [corPFinalizada, setCorPFinalizada] = React.useState("");                                 // cor da palavra ao acertar ou errar    
    const [lClicadas, setLClicadas] = React.useState(alfabeto);                               // letras clicadas pelo usuário  
    const [input, setInput] = React.useState("");                                             // estadp do inpuy
    const [desabilitaInput, setDesabilitaInput] = React.useState(true);                       // habilitar e desabilitar input

    function iniciarPartida() {
        setContador(0);                 //zera contador
        setLClicadas([]);               //zera teclado
        setCorPFinalizada("");             //zera cor da palavra
        setLClicadas([]);               //habilitar teclado
        setDesabilitaInput(false);      //habilita input

        sortearPalavra();
    }

    function sortearPalavra() {
        const palavras = getPalavras();
        const indice = Math.floor(Math.random() * palavras.length);  // floor arredonda para o menor número inteiro e random retorna um indice aleatório
        const palavra = palavras[indice];
        const palavraNormalizada = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");  // tira os acentos e transforma em array
        console.log("Palavra Normalizada", palavraNormalizada);
        console.log("Palavra", palavra);

        let underline = palavraNormalizada.map(() => ' _ ');  // para cada letra da palavra, inserir um traço

        setPalavraSorteada(palavra);
        setPSorteadaNormalizada(palavraNormalizada);
        setPUnderlines(underline);
    }

    function letraClicada(letraClick) {

        setLClicadas([...lClicadas, letraClick]);  // todas as letras que já foram clicadas, mais a nova letra

        if (pSorteadaNormalizada.includes(letraClick)) { // acertou letra
            const novaPalavraDoJogo = [...pUnderlines];
            const indicesLetraNaPalavra = pSorteadaNormalizada.map((letraPalavra, idx) => letraPalavra === letraClick ? idx : -1).filter((idx) => idx !== -1);
            indicesLetraNaPalavra.forEach((index) => novaPalavraDoJogo[index] = palavraSorteada[index]);

            setPUnderlines(novaPalavraDoJogo);

            if (!novaPalavraDoJogo.includes(' _ ')) {
                setCorPFinalizada("verde");
                finalizarPartida();
            }

        } else {  // errou letra
            setContador(contador + 1);
        }

        palavraFinalizada()
    }

    function palavraFinalizada() {
        let novaQuantidadeDeErros = contador + 1;  // para o 'ciclo de vida' dar certo

        if (novaQuantidadeDeErros === 6) {
            console.log(contador)
            setPUnderlines(palavraSorteada);
            setCorPFinalizada("vermelho");
            finalizarPartida();
        }
    }

    function botaoInput() {
        if (input === palavraSorteada) {
            setPUnderlines(palavraSorteada);
            setCorPFinalizada("verde");
            finalizarPartida();
        } else {
            setPUnderlines(palavraSorteada);
            setCorPFinalizada("vermelho");
            finalizarPartida();
            setContador(6);
        }
    }

    function finalizarPartida() {
        setDesabilitaInput(true);  //desabilita input
        setLClicadas(alfabeto);  //desabilitar teclado
    }

    return (
        <>

            <Jogo
                imagens={imagens}
                contador={contador}
                iniciarPartida={iniciarPartida}
                corPFinalizada={corPFinalizada}
                pUnderlines={pUnderlines} />

            <Letras
                alfabeto={alfabeto}
                letraClicada={letraClicada}
                lClicadas={lClicadas} />

            <Chute
                setInput={setInput}
                input={input}
                desabilitaInput={desabilitaInput}
                botaoInput={botaoInput} />

        </>
    )

}

