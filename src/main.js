import updateBaralho from "./service/UpdateBaralho.js";
import baralhos from "./data/baralho.js";
import flashcards from "./data/flashcards.js";
import updateFlashCards from "./service/UpdateFlashCards.js"
updateBaralho(1, "brazuca");
updateFlashCards(2,"Lugar mais perigoso do mundo","caribe")
console.log(baralhos)
console.log(flashcards)