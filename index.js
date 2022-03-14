let eventos = [];
let participantes = [];
let ltemevento = false;
let opcao = 1;
let data_evento = "";
let palestrante = "";
let data_nasc = "";
let participante = "";

const data_atual = new Date();

const readline = require('readline-sync')

do {
    opcao = readline.question('Informe a opcao desejada: 1-Incluir Evento | 2-Incluir Participante | 3-Sair: ');
    ltemevento = false;
    switch (opcao) {
        case "1":{
            data_evento = readline.question('Informe a data do evento: ');
            if (new Date(data_evento) > data_atual) {
                for (let i = 0; i < eventos.length; i++){
                    if (eventos[i][0] == data_evento){
                        console.log('Evento na data informada ja cadastrado.');
                        ltemevento = true;
                        break;
                    }
                }
                if (!ltemevento) {
                    palestrante = readline.question('Informe o palestrante do evento: ');
                    eventos.push([data_evento,palestrante])
                }
                for (let i = 0; i < eventos.length; i++){
                    console.log('Evento na data: '+eventos[i][0]+' - Palestrante: '+eventos[i][1]);
                }
            } else {
                console.log('Data invalida.');
            }
            break;
        } 

        case "2": {
            if (participantes.length < 100) {
                data_evento = readline.question('Informe a data do evento: ');
                for (let i = 0; i < eventos.length; i++){
                    if (eventos[i][0] == data_evento){
                        ltemevento = true;
                        break;
                    }
                }
                if (ltemevento) {
                    data_nasc = readline.question('Informe a data de nascimento: ');
                    if ((data_atual - new Date(data_nasc)) < 18) {
                        console.log('Nao permitido pela idade.');
                        break;
                    } else {
                        participante = readline.question('Informe nome do participante: ');
                        participantes.push([data_evento,data_nasc,participante]);
                        for (let i = 0; i < eventos.length; i++) {
                            console.log('Evento na data: '+eventos[i][0]+' - Palestrante: '+eventos[i][1]);
                            for (let j = 0; j < participantes.length; j++) {
                                if (participantes[j][0] == eventos[i][0]) {
                                    console.log('Participante: '+participantes[j][2]);
                                }
                            }
                        }
                    }
                } else {
                    console.log('Evento na data informada nao localizado.');
                }
            } else {
                console.log('Numero maximo de participantes atingido.');
            }
            break;
        }
    }
} while (opcao != "3");

console.log('Fim do cadastramento');
