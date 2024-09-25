const readline = require('readline');

// Configura a interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que faz uma pergunta e retorna a resposta
const pergunta = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(resposta);
        });
    });
};

// Função principal que executa o formulário
const formularioEnem = async () => {
    console.log("Bem-vindo ao formulário do ENEM 2024!");

    const nome = await pergunta("Nome completo: ");
    const cpf = await pergunta("CPF: ");
    const dataNascimento = await pergunta("Data de nascimento (DD/MM/AAAA): ");
    const email = await pergunta("E-mail: ");
    const telefone = await pergunta("Telefone: ");

    console.log("\n-- Endereço --");
    const endereco = await pergunta("Endereço (Rua, número): ");
    const bairro = await pergunta("Bairro: ");
    const cidade = await pergunta("Cidade: ");
    const estado = await pergunta("Estado: ");
    const cep = await pergunta("CEP: ");

    console.log("\n-- Informações de Escolaridade --");
    const escola = await pergunta("Nome da escola: ");
    const tipoEscola = await pergunta("Tipo de escola (Pública/Privada): ");
    const anoConclusao = await pergunta("Ano de conclusão ou previsto (AAAA): ");

    console.log("\n-- Curso e Local de Prova --");
    const cursoDesejado = await pergunta("Curso desejado: ");
    const cidadeProva = await pergunta("Cidade onde deseja realizar a prova: ");

    const necessidadesEspeciais = await pergunta("Possui necessidades especiais? (Sim/Não): ");
    let especificarNecessidades = "";
    if (necessidadesEspeciais.toLowerCase() === "sim") {
        especificarNecessidades = await pergunta("Especifique suas necessidades especiais: ");
    }

    console.log("\n-- Confirmação dos Dados --");
    console.log(`Nome completo: ${nome}`);
    console.log(`CPF: ${cpf}`);
    console.log(`Data de Nascimento: ${dataNascimento}`);
    console.log(`E-mail: ${email}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Endereço: ${endereco}, ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`);
    console.log(`Escola: ${escola} (${tipoEscola}), Ano de Conclusão: ${anoConclusao}`);
    console.log(`Curso desejado: ${cursoDesejado}`);
    console.log(`Cidade da Prova: ${cidadeProva}`);
    if (necessidadesEspeciais.toLowerCase() === "sim") {
        console.log(`Necessidades Especiais: ${especificarNecessidades}`);
    } else {
        console.log("Necessidades Especiais: Não possui");
    }

    const confirmar = await pergunta("\nConfirma os dados? (Sim/Não): ");
    if (confirmar.toLowerCase() === "sim") {
        console.log("\nFormulário enviado com sucesso! Boa sorte no ENEM 2024!");
    } else {
        console.log("\nFormulário não enviado. Por favor, revise os dados e tente novamente.");
    }

    rl.close();
};

// Chama a função principal para executar o formulário
formularioEnem();
