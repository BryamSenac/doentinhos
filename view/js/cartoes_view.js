document.addEventListener("DOMContentLoaded", function () {
    // Função para criar um cartão dinâmico
    function createCard(data, nomeVacina, paraQueServe, validade, assinatura) {
        // Cria o container do cartão
        const card = document.createElement("div");
        card.classList.add("box");

        // Adiciona o título "Pesquisar"
        const title = document.createElement("h3");
        title.textContent = "Pesquisar";
        card.appendChild(title);

        // Cria a área de informações do cartão
        const info = document.createElement("div");
        info.classList.add("info");

        // Adiciona as informações
        const dateP = document.createElement("p");
        dateP.textContent = `Data: ${data}`;
        info.appendChild(dateP);

        const nomeVacinaP = document.createElement("p");
        nomeVacinaP.textContent = `Vacina: ${nomeVacina}`;
        info.appendChild(nomeVacinaP);

        const paraQueServeP = document.createElement("p");
        paraQueServeP.textContent = `Para que serve: ${paraQueServe}`;
        info.appendChild(paraQueServeP);

        const validadeP = document.createElement("p");
        validadeP.textContent = `Validade: ${validade}`;
        info.appendChild(validadeP);

        const assinaturaP = document.createElement("p");
        assinaturaP.textContent = `Assin: ${assinatura}`;
        info.appendChild(assinaturaP);

        // Anexa o info ao card
        card.appendChild(info);

        // Retorna o cartão completo
        return card;
    }

    // Adiciona cartões dinâmicos à página
    const gridContainer = document.getElementById("grid-container");

    // Exemplo de dados que podem vir de um servidor ou formulário
    const dados = [
        { data: "01/01/2024", nomeVacina: "BCG", paraQueServe: "Tuberculose", validade: "12/2024", assinatura: "Dr. João" },
        { data: "05/02/2024", nomeVacina: "Hepatite B", paraQueServe: "Hepatite B", validade: "11/2024", assinatura: "Dra. Maria" },
        { data: "10/03/2024", nomeVacina: "Poliomielite", paraQueServe: "Poliomielite", validade: "10/2024", assinatura: "Dr. José" },
        { data: "15/04/2024", nomeVacina: "Rotavírus", paraQueServe: "Gastroenterite", validade: "09/2024", assinatura: "Dra. Ana" },
        { data: "20/05/2024", nomeVacina: "DTP", paraQueServe: "Difteria, tétano, coqueluche", validade: "08/2024", assinatura: "Dr. Pedro" },
        { data: "25/06/2024", nomeVacina: "HPV", paraQueServe: "Papilomavírus", validade: "07/2024", assinatura: "Dra. Sofia" },
        { data: "30/07/2024", nomeVacina: "Febre Amarela", paraQueServe: "Febre Amarela", validade: "06/2024", assinatura: "Dr. Lucas" },
        { data: "05/08/2024", nomeVacina: "Influenza", paraQueServe: "Gripe", validade: "05/2024", assinatura: "Dra. Carla" }
    ];

    // Percorre os dados e cria os cartões
    dados.forEach(dado => {
        const card = createCard(dado.data, dado.nomeVacina, dado.paraQueServe, dado.validade, dado.assinatura);
        gridContainer.appendChild(card);
    });

    // Evento do botão de pesquisa
    document.querySelector(".search-btn").addEventListener("click", function () {
        let searchTerm = document.querySelector(".search-bar").value;
        let pacienteName = document.querySelector(".paciente-bar").value;
        alert(`Pesquisa realizada para: ${searchTerm} Paciente: ${pacienteName}`);
    });
});
