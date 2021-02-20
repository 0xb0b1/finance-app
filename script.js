const Modal = {
    open() {
        // abrir formulário
        // Adicionar a classe `active`
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        // fechar o formulário
        // Remover a classe `active`
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Criação website",
    amount: 500000,
    date: "21/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -200,
    date: "22/01/2021",
  },
];

const Transaction = {
    incomes() {
        // soma das entradas
    },

    expenses() {
        // soma das saídas
    },

    total() {
        // entradas - saídas
    }
}