import baralhos from "../data/baralho.js";
import flashcards from "../data/flashcards.js";
import removerFlash from "./deleteFC.js";
function removerBaralho (id){
    const indice = baralhos.findIndex((baralhos) => baralhos.id === id)

    for(let i = 0; i < flashcards.length; i++){
        if(flashcards[i].idBaralho = id){
            removerFlash( flashcards[i].id)
        }
    }
    if(indice == -1){
        console.log("Erro: baralho não encontrado!")
    }

    baralhos.splice(indice, 1)
    console.log('Baralho removido com sucesso.')
    return true
}




export default removerBaralho