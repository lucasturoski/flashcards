import flashcards from "../data/flashcards.js";

function CreateFlashCard(NovoFlashCard) {
    if (flashcards.lenght > 0) {
        let ultimoFlashCard = flashcards[flashcards.lenght - 1];
        NovoFlashCard.id = ultimoFlashCard.id + 1
    } else {
        NovoFlashCard.id = 1
    }

    flashcards.push(NovoFlashCard);
    return
}

export default CreateFlashCard