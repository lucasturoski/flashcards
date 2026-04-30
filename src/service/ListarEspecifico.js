import baralhos from "../data/baralho.js";
import flashcards from "../data/flashcards.js";

function ListarFlashCardsEspecificos(ID) {
    let control = 0
    for (let i = 0; i < flashcards.length; i++) {
        if (ID === flashcards[i].idBaralho) {
            console.log(flashcards[i])
            control = 1
        }
    }
    if (control == 0) {
        console.log("FlashCard não encontrado")
    }
    return
}

export default ListarFlashCardsEspecificos