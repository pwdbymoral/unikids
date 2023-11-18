function search(input) {
    // Obtém o texto digitado no input
    const searchText = input.value.toLowerCase();

    // Obtém todos os spans de tags
    const spans = document.querySelectorAll(".tags");

    // Itera sobre os spans
    for (const span of spans) {
        // Recupera a div que possui o span
        const div = span.parentElement.parentElement
        // Verifica se o texto digitado está presente no span
        if (span.textContent.toLowerCase().includes(searchText)) {
            // Exibe a div
            div.style.display = "block";
        } else {
            // Esconde a div
            div.style.display = "none";
        }
    }
}

// Liga o evento de mudança do input de busca
document.querySelector("#input-busca").addEventListener("change", search);
