import baralhos from "../data/baralho.js";

export default function updateBaralho(id, newinfo) {
    const indice = baralhos.findIndex(baralhos => baralhos.id === id);

    if (indice === -1) {
        console.log("Baralho not found");
        return "Baralho not found";
    }

    baralhos[indice].titulo = newinfo;
    return "Baralho updated"
}