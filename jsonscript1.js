const divEx1 =  document.querySelector(".example1");
const divEx2 =  document.querySelector(".example2");

let requestURL = 'https://raw.githubusercontent.com/CesarPinardi/teste-heroku/main/routes/ali.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let requestURL1 = 'https://raw.githubusercontent.com/CesarPinardi/teste-heroku/main/routes/comb.json';
let request1 = new XMLHttpRequest();
request1.open('GET', requestURL1);
request1.responseType = 'json';
request1.send();

request.onload = function () {
    const alimentacao = request.response;
    showdataAlimentacao(alimentacao);
}

request1.onload = function () {
    const combustivel = request1.response;
    showdatacombustivel(combustivel);
}

function showdataAlimentacao(obj) {
    const dataAlimentacao = obj['data']; //members -> vetor dentro do json

    for (let i = 0; i < dataAlimentacao.length; i++) { //for com os dados 
        const myArticle = document.createElement('article');
        const myPara0 = document.createElement('p');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');

        myPara0.textContent = 'ID: ' + dataAlimentacao[i]._id;
        myPara1.textContent = 'Valor Refeicao: ' + dataAlimentacao[i].valorRefeicao;
        myPara2.textContent = 'Tipo Refeicao: ' + dataAlimentacao[i].tipoRefeicao;
        myPara3.textContent = 'Cidade: ' + dataAlimentacao[i].cidade;

        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        divEx1.appendChild(myArticle);
    }
}

function showdatacombustivel(obj) {
    const datacombustivel = obj['data']; //members -> vetor dentro do json

    for (let i = 0; i < datacombustivel.length; i++) { //for com os dados 
        const myArticle = document.createElement('article');
        const myPara0 = document.createElement('p');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');

        myPara0.textContent = 'ID: ' + datacombustivel[i]._id;
        myPara1.textContent = 'Valor Combustivel: ' + datacombustivel[i].qtdKm;
        myPara2.textContent = 'Tipo Combustivel: ' + datacombustivel[i].valorKm;
        myPara3.textContent = 'Cidade: ' + datacombustivel[i].cidade;

        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        divEx2.appendChild(myArticle);
    }
}
