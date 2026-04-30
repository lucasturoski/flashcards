import flashcards from "../data/flashcards.js";
import baralhos from "../data/baralho.js";
function CreateFlashCard(NovoFlashCard) {
    const indice = baralhos.findIndex(baralho => baralho.id === NovoFlashCard.idBaralho);
    if(indice<0){
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxdeck not foundxxxxxxxxxxxxxxxxxxxxxx")
    }else{
    if (flashcards.lenght > 0) {
        let ultimoFlashCard = flashcards[flashcards.lenght - 1];
        NovoFlashCard.id = ultimoFlashCard.id + 1
    } else {
        NovoFlashCard.id = 1
    }

    flashcards.push(NovoFlashCard);
    return
}
}
export default CreateFlashCard