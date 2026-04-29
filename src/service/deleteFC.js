import baralhos from "../data/baralho.js";
import flashcards from "../data/flashcards.js";

function removerFlash (id){
    const indice = flashcards.findIndex((flashcards) => flashcards.id === id)

    if(indice == -1){
        console.log("Erro: FlashCard não encontrado!")
    }

    flashcards.splice(indice, 1)
    console.log('FlashCard removido com sucesso.')
    return true
}



export default removerFlash