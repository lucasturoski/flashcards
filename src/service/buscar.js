import baralhos from "../data/baralho.js";
import flashcards from "../data/flashcards.js";


function busca(flashcards, perguntaUsuario){
for(let i = 0; i < flashcards.length; i++){
    if(flashcards[i].pergunta === perguntaUsuario){
        console.log(`Pergunta encontrada em ${i+1}`)
        console.log(flashcards[i])
    }else{
        console.log("Erro: FlashCard não encontrado!")
    }
}
}
export default busca