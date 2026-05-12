import baralhos from "../data/baralho.js";

function ListarBaralhos() {
    if (baralhos.length === 0) {
        console.log("Nenhum baralho nos registros")
        return baralhos
    }
    console.log(baralhos)
    return baralhos
}

export default ListarBaralhos