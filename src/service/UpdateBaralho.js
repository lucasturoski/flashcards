import baralhos from "../data/baralho.js";

export default function updateBaralho(id, newinfo) {
    const indice = baralhos.findIndex(b => b.id === id);

    if (indice === -1) {
        console.log("Baralho not found");
        return;
    }

    baralhos[indice].titulo = newinfo;
}