import baralhos from "../data/baralho.js";

function CreateBaralho(titulo) {
    let NovoBaralho ={
        titulo : titulo,
        id : 0
    }
    if (baralhos.lenght > 0) {
        let ultimoBaralho = baralhos[baralhos.lenght - 1];
        NovoBaralho.id = ultimoBaralho.id + 1
    } else {
        NovoBaralho.id = 1
    }

    baralhos.push(NovoBaralho);
    return {data : NovoBaralho}
}

export default CreateBaralho