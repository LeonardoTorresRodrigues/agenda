import BotaoConclui from './components/taskDone.js'
import BotaoDeleta from './components/taskDelete.js';

const criarTarefa = (evento) => {

    evento.preventDefault();

    let day = document.getElementById('day');
    let dayValue = day.value;
    let month = document.getElementById('month');
    let monthValue = month.value;
    let year = document.getElementById('year');
    let yearValue = year.value;

    let dateValue = document.createElement('p');
    dateValue.classList.add('date');
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`
    const dateContent = `<p class="date-content">Dia ${dayValue} do ${monthValue} de ${yearValue}</p>`

    tarefa.innerHTML = conteudo + dateContent;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    tarefa.appendChild(dateValue);
    lista.appendChild(tarefa);
    input.value = " ";
    day.value = " ";
    month.value = " ";
    year.value = " ";
    input.focus();
} 

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);