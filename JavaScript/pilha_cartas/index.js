// No script, começamos criando um array para ser o baralho, uma variável para a opção do menu e o laço do while que funcionará enquanto a opção for diferente de “3”:
const baralho = []
let opcao = ""

do {
    opcao = prompt( // A seguir precisamos exibir um prompt com a quantidade de cartas no baralho e as opções:
        "Cartas no baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )

    switch (opcao) { // E então, para terminar, adicionamos o switch com um comportamento para cada opção:
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Você puxou um(a) " + cartaPuxada)
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
} while (opcao !== "3");
