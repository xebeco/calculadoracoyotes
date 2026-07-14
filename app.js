const custos = [600, 1050, 600, 400];

const tabela = document.querySelector("#tabela");
const linhas = tabela.querySelectorAll("tbody tr");

function formatar(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function atualizar() {

    let totalGeral = 0;
    let custoGeral = 0;
    let lucroGeral = 0;
    let painelGeral = 0;
    let membroGeral = 0;

    linhas.forEach((linha, index) => {

        const valor = Number(linha.querySelector(".valor").textContent);

    const qtd = Number(linha.querySelector("input").value);

    const total = valor * qtd;

    const custo = custos[index] * qtd;

    const lucro = total - custo;

    const membro = lucro * 0.20;

    const painel = total - membro;
        linha.querySelector(".total").textContent = formatar(total);
        linha.querySelector(".custo").textContent = formatar(custo);
        linha.querySelector(".lucro").textContent = formatar(lucro);
        linha.querySelector(".painel").textContent = formatar(painel);
        linha.querySelector(".membro").textContent = formatar(membro);

        totalGeral += total;
        custoGeral += custo;
        lucroGeral += lucro;
        painelGeral += painel;
        membroGeral += membro;

    });

    document.getElementById("total").textContent = formatar(totalGeral);
    document.getElementById("custo").textContent = formatar(custoGeral);
    document.getElementById("lucro").textContent = formatar(lucroGeral);
    document.getElementById("painel").textContent = formatar(painelGeral);
    document.getElementById("membro").textContent = formatar(membroGeral);

    document.getElementById("fat").textContent = formatar(totalGeral);
    document.getElementById("luc").textContent = formatar(lucroGeral);
    document.getElementById("pai").textContent = formatar(painelGeral);
    document.getElementById("mem").textContent = formatar(membroGeral);

}

linhas.forEach(linha => {

    linha.querySelector("input").addEventListener("input", atualizar);

});

atualizar();
