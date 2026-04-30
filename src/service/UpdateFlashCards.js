import flashcards from "../data/flashcards.js";

export default function updateFlashCards(id, quest, aswenr) {
    const indice = flashcards.findIndex(f => f.id === id);

    if (indice === -1) {
        console.log("Card not found");
        return;
    }

    flashcards[indice].pergunta = quest;
    flashcards[indice].resposta = aswenr;
    return
}