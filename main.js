import BotaoConclui from './components/taskDone.js'
import BotaoDeleta from './components/taskDelete.js';
import BotaoCountdown from './components/addDate.js';

const criarTarefa = (evento) => {

    evento.preventDefault();
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    //tarefa.appendChild(BotaoCountdown());
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
    input.focus();
} 

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);