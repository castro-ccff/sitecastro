// ===== Interação: botão que muda de cor ao clicar =====

const botao = document.getElementById("botao-cor");

const cores = ["#e94560", "#0f3460", "#16a085", "#8e44ad", "#f39c12"];
let indiceCor = 0;

if (botao) {
  botao.addEventListener("click", function () {
    indiceCor = (indiceCor + 1) % cores.length;
    botao.style.backgroundColor = cores[indiceCor];
  });
}

// ===== Desafio extra: buscar repositórios do GitHub =====

const listaProjetos = document.getElementById("lista-projetos");

if (listaProjetos) {
  fetch("https://api.github.com/users/castro-ccff/repos")
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (repos) {
      listaProjetos.innerHTML = "";

      if (repos.length === 0) {
        listaProjetos.innerHTML = "<li>Ainda não tenho repositórios públicos.</li>";
        return;
      }

      repos.forEach(function (repo) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.textContent = repo.name;
        item.appendChild(link);
        listaProjetos.appendChild(item);
      });
    })
    .catch(function (erro) {
      listaProjetos.innerHTML = "<li>Não foi possível carregar os projetos agora.</li>";
      console.error("Erro ao ir buscar repositórios:", erro);
    });
}