export default function Chute(props) {
    const {setInput, input, desabilitaInput, botaoInput} = props
    
    return (
        <div className="adivinhar-palavra">
            <h1>Já sei a palavra!</h1>

            <input
                placeholder="Digete seu chute..."
                onChange={(event) => setInput(event.target.value)}
                value={input}
                disabled={desabilitaInput}
            />

            <button onClick={botaoInput}>
                Chutar
            </button>

        </div>
    )
}