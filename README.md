# Jogo da Forca

- Esse é um jogo muito conhecido: o jogo da forca! Nele, a pessoa jogadora tem que adivinhar uma palavra chutando letra por letra e, se cometer 6 erros, ela perde o jogo. Caso adivinhe a palavra antes disso, ela ganha. 

Deploy: https://projeto-jogo-da-forca-08-ix24.vercel.app/

## Sobre

- Ao apertar em escolher palavra, o input e letras passam a ficar habilitadas
- A palavra é sorteada e a forca é zerada
- Aparece a palavra a ser adivinhada na tela, com um underline ( `_` ) para cada letra que a palavra possui
- O botão de uma letra já clicada é desabilitado
- Se a palavra escolhida no jogo tiver a letra que o usuário apertou o underline da posição correspondente à letra deve ser substituído pela letra em si
- Uma letra com ou sem acento é aceita (quando a pessoa aperta a, se a palavra tem á, à, â ou ã, ela também irá aparecer. O mesmo vale para c e ç)
- Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou a contagem de erros aumenta e a imagem na forca deve mudar
- Caso o usuário deseje, ele pode chutar a palavra inteira no input, se acertar a palavra, ele ganha imediatamente, mas se errar, ele perde imediatamente
- Quando o usuário ganha, a palavra completa fica em verde e os botões e input voltam a ficar desabilitados
- Caso o usuário perca a imagem final que aparece é a do boneco enforcado e a palavra fica revelada em vermelho

