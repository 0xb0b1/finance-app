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
        let income = 0;
        transactions.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        });
        return income;
    },

    expenses() {
        let expense = 0;

        transactions.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense -= transaction.amount;
            }
        });
        return expense;
    },

    total() {
        return Transaction.incomes() - Transaction.expenses();
    },
};

//
const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return signal + value;
    },
};

// pegar as transações e colocar no HTM
const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
            `;

        return html;
    },

    updateBalance(value) {
        document.getElementById(
            "incomeDisplay"
        ).innerHTML = Utils.formatCurrency(Transaction.incomes());

        document.getElementById(
            "expenseDisplay"
        ).innerHTML = Utils.formatCurrency(Transaction.expenses());

        document.getElementById(
            "totalDisplay"
        ).innerHTML = Utils.formatCurrency(Transaction.total());
    },
};

transactions.forEach((transaction) => DOM.addTransaction(transaction));

DOM.updateBalance();
