export default function Jogo(props) {
    const {imagens, contador, iniciarPartida, corPFinalizada, pUnderlines} = props
    
    return (
        <div className="forca">
            <img src={imagens[contador]} alt="forca" />
            <div className="forca-itens">

                <button onClick={iniciarPartida}>
                    Escolher Palavra
                </button>

                <h1 className={corPFinalizada}>{pUnderlines}</h1>
            </div>
        </div>
    )
}