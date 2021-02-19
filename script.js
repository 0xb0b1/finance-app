const Modal = {
    open() {
        // abrir formulário
        // Adicionar a classe `active`
        document.querySelector('modal-overlay').classList.add('active')
    },

    close() {
        // fechar o formulário
        // Remover a classe `active`
        document.querySelector('modal-overlay').classList.remove('active')
    }
}