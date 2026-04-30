import flashcards from "../data/flashcards.js";

function ListarFlashCards() {
    if (flashcards.length === 0) {
        console.log("Nenhum flashcard nos registros")
        return
    }
    console.log(flashcards)
    return
}

export default ListarFlashCards