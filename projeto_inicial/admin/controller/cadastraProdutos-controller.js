// Importa o clienteService do módulo clientes-service.js.
import { clienteService } from "../service/clientes-service.js"

// Selecione o formulário usando o atributo [data-form].
const formulario = document.querySelector('[data-form]')

// Adicione um ouvinte de evento 'submit' ao formulário.
formulario.addEventListener('submit', (evento) => {
    
        // Previne o comportamento padrão do formulário (como recarregar a página).
        evento.preventDefault()

       const produto = evento.target.querySelector('[data-produto]').value

       const preco = evento.target.querySelector('[data-preco]').value

       const descricao = evento.target.querySelector('[data-descricao]').value

       clienteService.criarProdutos(produto, preco, descricao)
})