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
