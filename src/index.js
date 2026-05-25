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
import express from 'express';
const router = express()
router.use(express.json())
const port = 3333
router.get (("/"), (req,res)=>{
    res.send("devolvendo alguma coisa")
})

router.listen((port),()=>{
    console.log("servidor executando na porta :" + port)
})

router.post("/baralho", (req, res) => {
    const titulo = req.body.titulo
    const resultado = CreateBaralho(titulo)
    const error = resultado.error
    if (error) {
        return res.status(400).send({ message: error })
    }
    res.status(200).send({
        message: "baralho criado com sucesso",
        baralho: resultado
    })
})

router.get("/baralho", (req,res)=> {
    const resultado = ListarBaralhos()

    res.status(200).json({
        message: "baralho listados",
        listBaralho: resultado
    })

})

router.post("/flashcard/e", (req,res)=> {
    const id = req.body.id
    const resultado = ListarFlashCardsEspecificos(id)

    res.status(200).json({
        message: "baralho listados",
        listFlashCards: resultado
    })

})

router.delete("/baralho",(req,res)=>{
    const id =req.body.id
    const resultado = removerBaralho(id)

    res.status(200).json({
        message : "baralho deletado"
    })
})

router.put("/baralho",(req,res)=>{
    const id = req.body.id
    const newinfo = req.body.newinfo
    const message = updateBaralho(id,newinfo)
    res.status(200).json({
        message : message
    })
})

router.get("/flashcard", (req,res)=> {
    const resultado = ListarFlashCards()

    res.status(200).json({
        message: "baralho listados",
        listBaralho: resultado
    })

})

router.delete("/flashcard",(req,res)=>{
    const id =req.body.id
    const resultado = removerFlash(id)

    res.status(200).json({
        message : "flashcard deletado"
    })
})