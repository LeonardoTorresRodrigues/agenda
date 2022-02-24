const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    botaoDeleta.classList.add('delete-button');

    return botaoDeleta
}

const deletarTarefa = (evento) => { 
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta

}

export default BotaoDeleta