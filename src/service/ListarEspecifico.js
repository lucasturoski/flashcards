import baralhos from "../data/baralho.js";
import flashcards from "../data/flashcards.js";

function ListarFlashCardsEspecificos(ID) {
    let control = 0
    let novaLista =[]
    for (let i = 0; i < flashcards.length; i++) {
        if (ID === flashcards[i].idBaralho) {
            console.log(flashcards[i])
            control = 1
            novaLista.push(flashcards[i])
        }
    }
    if (control == 0) {
        console.log("FlashCard não encontrado")
    }
    return novaLista
}

export default ListarFlashCardsEspecificos