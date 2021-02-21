const Modal = {
    open() {
        // abrir formulário
        // Adicionar a classe `active`
        document.querySelector(".modal-overlay").classList.add("active");
    },

    close() {
        // fechar o formulário
        // Remover a classe `active`
        document.querySelector(".modal-overlay").classList.remove("active");
    },
};

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
    },
};

// pegar as transações e colocar no HTML
const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction) {
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
                </td>
         `;

        return html;
    },
};

transactions.forEach((transaction => DOM.addTransaction(transaction);
