document.getElementById("pdi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let aluno = document.getElementById("aluno").value;
    let meta = document.getElementById("meta").value;
    let objetivos = document.getElementById("objetivos").value;
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;

    let novoPDI = { aluno, meta, objetivos, inicio, fim, progresso: 2 };

    let pdiList = JSON.parse(localStorage.getItem("pdilist")) || [];

    // Verifica se estamos editando ou criando um novo PDI
    if (localStorage.getItem("editingIndex") !== null) {
        let editingIndex = localStorage.getItem("editingIndex");
        pdiList[editingIndex] = novoPDI; // Atualiza o PDI existente
        localStorage.removeItem("editingIndex"); // Limpa o índice de edição
    } else {
        pdiList.push(novoPDI); // Cria um novo PDI
    }

    localStorage.setItem("pdilist", JSON.stringify(pdiList));

    alert("PDI cadastrado com sucesso!");
    window.location.href = "lista.html"; // Volta para a lista
});
