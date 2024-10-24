document.addEventListener("DOMContentLoaded", function () {
    // Função para criar um cartão dinâmico
    function createCard(data, nomeVacina, paraQueServe, validade, assinatura) {
        const card = document.createElement("div");
        card.classList.add("box");

        const title = document.createElement("h3");
        title.textContent = "Pesquisar";
        card.appendChild(title);

        const info = document.createElement("div");
        info.classList.add("info");

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

        card.appendChild(info);
        return card;
    }

    // Função para exibir cartões na tela
    function renderCards(filteredData) {
        const gridContainer = document.getElementById("grid-container");
        gridContainer.innerHTML = ''; // Limpa os cartões anteriores
        filteredData.forEach(dado => {
            const card = createCard(dado.data, dado.nomeVacina, dado.paraQueServe, dado.validade, dado.assinatura);
            gridContainer.appendChild(card);
        });
    }

    // Exemplo de dados
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

    // Renderiza os cartões ao carregar a página
    renderCards(dados);

    // Evento do botão de pesquisa na área de cartões (vacina/paciente)
    document.getElementById("vacina-search-btn").addEventListener("click", function () {
        let vacinaSearchTerm = document.getElementById("vacina-search").value.toLowerCase();
        let pacienteSearchTerm = document.getElementById("paciente-search").value.toLowerCase();

        const filteredData = dados.filter(dado => 
            dado.nomeVacina.toLowerCase().includes(vacinaSearchTerm) || dado.assinatura.toLowerCase().includes(pacienteSearchTerm)
        );
        renderCards(filteredData);
    });

    // Evento do botão de pesquisa no header
    document.getElementById("header-search-btn").addEventListener("click", function () {
        let headerSearchTerm = document.getElementById("header-search").value.toLowerCase();
        
        const filteredData = dados.filter(dado => 
            dado.nomeVacina.toLowerCase().includes(headerSearchTerm) || dado.assinatura.toLowerCase().includes(headerSearchTerm)
        );
        renderCards(filteredData);
    });
});
