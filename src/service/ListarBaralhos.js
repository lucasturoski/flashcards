import baralhos from "../data/baralho.js";

function ListarBaralhos() {
    if (baralhos.length === 0) {
        console.log("Nenhum baralho nos registros")
        return
    }
    console.log(baralhos)
    return
}

export default ListarBaralhos