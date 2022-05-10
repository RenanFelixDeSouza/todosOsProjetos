/*function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes();
            this.precionaEnter();

        },
        precionaEnter(){
            this.display.addEventListener('keyup', e=> {
                if(e.keyCode === 13){
                this.realizaConta()}
            })
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Digita somente números aí meu filhote!');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Ta errado isso aí!')
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }



    };
}


const calculadora = criaCalculadora();

calculadora.inicia();

*/
const inputTarefa = document.querySelector(".input-nova-tarefa");
const btnTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

function criali() {
    const li = document.createElement('li');
    return li;
}
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
});

function limpaInput(){
inputTarefa.value = '';
inputTarefa.focus();
}


function criaBotaoApaga(li){
    li.innerText += ' ';
const BotaoApaga = document.createElement('button');
BotaoApaga.innerText = 'Apagar';
BotaoApaga.setAttribute('class', 'apagar')
BotaoApaga.setAttribute('title', 'apagar essa tarefa')
li.appendChild(BotaoApaga)
}

function criaTarefa(textoInput) {
    const li = criali();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApaga(li);
    salvarTarefa();
}
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function(e){
    const el = e.target;
if(el.classList.contains('apagar')) {
el.parentElement.remove();
salvarTarefa();
}

});


function salvarTarefa(){
    const liTarefa = tarefas.querySelectorAll('li')
const listaDeTarefas = [];

for (let tarefa of liTarefa) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '');
listaDeTarefas.push(tarefaTexto);
}
const tarefaJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefaSalva() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
}
}
adicionaTarefaSalva()








function Calculadora(){
this.display = document.querySelector('.display')

this.inicia = () => {
    this.capturaclique()
    this.enviaEnter()
}

this.enviaEnter = () => {
    this.display.addEventListener('keypress', e => {
        if(e.keyCode !== 13) return;
       this.eqNumDisplay()
    })
}
this.capturaclique = () => {
    document.addEventListener('click', event => {
        const el = event.target 
        if(el.classList.contains('btn-num')) this.addNumDisplay(el)
        if(el.classList.contains('btn-clear')) this.clearNumDisplay(el)
        if(el.classList.contains('btn-del')) this.delNumDisplay(el)
        if(el.classList.contains('btn-eq')) this.eqNumDisplay(el)
    })
}

this.addNumDisplay = el => this.display.value += el.innerText;
this.clearNumDisplay = () => this.display.value = '';  
this.delNumDisplay = () => this.display.value = this.display.value.slice(0, -1) 
this.eqNumDisplay = () => {
    try {
const conta = eval(this.display.value);
if(!conta){
    alert('Conta invalida')
return;
}
this.display.value = conta
    }catch(e){
        alert('conta invalida');
        return;
    }
}


}

const calculadora = new Calculadora();
calculadora.inicia();


date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("data").innerHTML = (day) + "/" + month + "/" + year;

document.getElementById('data').style.color = 'white';
document.getElementById('data').style.textAlign = 'center';
document.getElementById('data').style.fontSize = '20pt';


function relogio(){
    var data=new Date();
    var hor=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }
    
    var horas=hor + ":" + min + ":" + seg;
    
    document.getElementById("rel").value=horas;
}

var timer=setInterval(relogio,1000);
