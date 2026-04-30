import busca from "./service/buscar.js";
import removerBaralho from "./service/delete.js";
import baralhos from "./data/baralho.js";
import flashcards from "./data/flashcards.js";
import removerFlash from "./service/deleteFC.js";
import CreateBaralho from "./service/CreateBraralho.js";
import CreateFlashCard from "./service/CreateFlashCard.js";
import ListarBaralhos from "./service/ListarBaralhos.js";
import ListarFlashCardsEspecificos from "./service/ListarEspecifico.js";
import ListarFlashCards from "./service/ListarFlashCards.js";
import updateBaralho from "./service/UpdateBaralho.js";
import updateFlashCards from "./service/UpdateFlashCards.js";
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let pergunta
let number
let resposta
let nome
let id
let flashcard={
    id:0,
    pergunta: "",
    resposta: "",
    idBaralho: 0

}
let NovoBaralho = {
    id: 0,
    titulo: ""
}
let Opcoes = {
    1: "Criar Baralho.",
    2: "Criar FlashCard.",
    3: "Listar Baralhos.",
    4: "Listar FlashCard.",
    5: "Listar por Baralho.",
    6: "Atualizar Baralhos.",
    7: "Atualizar FlashCard.",
    8: 'Remover Baralhos.',
    9: 'Remover FlashCard.',
    10: 'Buscar Pergunta.',
    0: 'Sair.',
}
console.table(Opcoes)


while(pergunta != '0'){
    console.log("Qual a opção selecionada?")
    pergunta = prompt('')
    switch(pergunta){

        case '1':
            console.log("Qual o título que deseja adicionar a seu baralho?")
            nome = prompt('')
            NovoBaralho.titulo=nome
            CreateBaralho(NovoBaralho)
            break;
        case '2':
            
            console.log("Qual o título que deseja adicionar a seu FlashCard?")
            flashcard.pergunta = prompt('')
            console.log('Qual a resposta?')
            flashcard.resposta = prompt("")
            console.log("qual o id do baralho")
            flashcard.idBaralho = Number(prompt(""))
            CreateFlashCard(flashcard)
        case '3':
            ListarBaralhos()
            break;
        case '4':
            ListarFlashCards()
            break;
        case '5':
            console.log("Qual o id do Baralho que deseja consultar?")
            id = Number(prompt(''))
            ListarFlashCardsEspecificos(id)
            break;
        case '6':
            console.log('Qual o ID do baralho que deseja alterar?')
            id = Number(prompt(''))
            console.log("Novo Título.")
            nome = prompt('')
            updateBaralho(id, nome)
            break;
        case '7':
            console.log('Qual o ID do FlashCard que deseja alterar?')
            id = Number(prompt(''))
            console.log("Qual a nova pergunta?")
            nome = prompt('')
            console.log('Qual a Resposta?')
            resposta = prompt('')
            updateFlashCards(id, nome, resposta)
            break;
        case '8':
            console.log("Qual o id do baralho que deseja remover?")
            id = Number(prompt(''))
            removerBaralho(id)
            break;
        case '9':
            console.log("Qual o id do FlashCard que deseja remover?")
            id = Number(prompt(''))
            removerFlash(id)
            break;
        case '10':
            console.log("Qual a pergunta que deseja procurar?")
            nome = prompt('')
            busca(flashcards, nome)
            break;
        case '0':
            console.log('Saindo.')
            break;
        default:
            console.log("Opção inválida.")
            break;
    }

}