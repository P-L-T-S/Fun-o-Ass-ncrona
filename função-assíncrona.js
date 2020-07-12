/*
const inputElement = document.querySelector("input");

const btnElement = document.querySelector("button");
// função com parametro idade q cria uma promessa
const checaIdade = (idade) => {
    // cria uma promessa com parametros resolve e reject
    return new Promise((resolve, reject) => {
        // se a idade for menor q 18, executa o reject
        if(idade < 18){
            // reject "recebe" o valor entre os parenteses
            reject(`${idade} é menor que 18 anos`);
        }
        // se não, executa o resolve
        else{
            // resolve "recebe" o valor entre os parenteses
            resolve(`${idade} é maior que 18 anos`);
        }
    })
}

btnElement.onclick = () => {
    let inputValue = inputElement.value;
    // executa a função
    checaIdade(Number(inputValue))
        // caso a promessa tenha sucesso, executa o then
        .then(response => {
            // response recebe o valor do resolve
            console.log(response);
        })
        .catch((error => {
            // o error recebe o valor do reject
            console.log(error);
        }))
        inputElement.value = "";
}
*/
