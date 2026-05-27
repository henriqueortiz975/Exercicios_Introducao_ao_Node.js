# 📝 Exercícios — Introdução ao Node.js

> 🔒 *Rascunho — em revisão pelo professor antes de publicar aos alunos.*
> 

---

# 📚 O que é Node.js?

O Node.js é um ambiente de execução JavaScript.

Com ele é possível:

- criar servidores web;
- desenvolver APIs;
- trabalhar com arquivos;
- automatizar tarefas;
- criar aplicações backend.

O Node.js utiliza o JavaScript fora do navegador.

---

# 🛠️ O que é npm?

O npm (Node Package Manager) é o gerenciador de pacotes do Node.js.

Ele permite:

- instalar bibliotecas prontas;
- organizar dependências;
- automatizar comandos;
- iniciar projetos profissionais.

---

# 📝 Instruções gerais

- Crie uma pasta separada para cada exercício;
- Execute cada arquivo com `node index.js`;
- Leia os exercícios com atenção;
- Todos os códigos devem ser comentados;
- Utilize o VS Code;
- Organize corretamente os arquivos.

---

# 📦 Exercício 1 — Instalação e verificação

## 🎯 Objetivo

Confirmar que o Node.js está instalado corretamente na máquina.

---

## 📌 Passos

1. Abra o PowerShell ou CMD;
2. Digite:

```bash
node -v
```

1. Depois digite:

```bash
npm -v
```

1. Tire um print dos resultados.

---

## ✅ Resultado esperado

```bash
v20.x.x
10.x.x
```

✅ Se as versões aparecerem, o Node.js está funcionando corretamente.

---

# 📦 Exercício 2 — Olá, Mundo!

## 🎯 Objetivo

Criar e executar o primeiro programa Node.js.

---

## 📌 Passos

1. Crie a pasta:

```bash
ex02-ola-mundo
```

1. Dentro dela crie o arquivo:

```bash
index.js
```

1. Escreva o código:

```jsx
console.log('Olá, Mundo! Meu primeiro programa Node.js!');
console.log('Meu nome é: SEU NOME AQUI');
console.log('Data de hoje: ' + new Date().toLocaleDateString('pt-BR'));
```

1. Execute:

```bash
node index.js
```

---

## 💡 Explicação

- `console.log()` exibe mensagens no terminal;
- `new Date()` cria uma data atual;
- `toLocaleDateString()` formata a data.

---

# 📦 Exercício 3 — Trabalhando com variáveis

## 🎯 Objetivo

Utilizar variáveis e operações básicas.

---

## 📌 Código

```jsx
const nome = 'SEU NOME';
const idade = 18;
const curso = 'Programação Websites I';
const cidade = 'SUA CIDADE';
const anoFormatura = new Date().getFullYear() + 1;

console.log('=== Meu Perfil ===');
console.log('Nome: ' + nome);
console.log('Idade: ' + idade + ' anos');
console.log('Curso: ' + curso);
console.log('Cidade: ' + cidade);
console.log('Previsão de formatura: ' + anoFormatura);
```

---

## 💡 Explicação

- `const` cria variáveis constantes;
- `+` concatena textos;
- `getFullYear()` retorna o ano atual.

---

## 🔁 Desafio extra

Adicione:

- comida favorita;
- hobby;
- profissão desejada.

---

# 📦 Exercício 4 — Entrada de dados pelo terminal

## 🎯 Objetivo

Receber informações digitadas pelo usuário.

---

## 📌 Código

```jsx
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {

    rl.question('Digite sua idade: ', (idade) => {

        console.log('\n=== DADOS INFORMADOS ===');
        console.log('Nome: ' + nome);
        console.log('Idade: ' + idade);

        rl.close();

    });

});
```

---

## 💡 Explicação

- `require()` importa módulos;
- `readline` permite entrada de dados;
- `question()` faz perguntas;
- `close()` encerra o terminal.

---

## 🔁 Desafio extra

Pergunte também:

- cidade;
- curso;
- profissão desejada.

---

# 📦 Exercício 5 — Trabalhando com arquivos (fs)

## 🎯 Objetivo

Criar e ler arquivos utilizando o módulo nativo `fs`.

---

## 📌 Código

```jsx
const fs = require('fs');

const mensagem = `
Meu primeiro arquivo criado com Node.js.
Data: ${new Date().toLocaleString('pt-BR')}
`;

fs.writeFileSync('meuArquivo.txt', mensagem);

console.log('Arquivo criado com sucesso!');

const conteudo = fs.readFileSync('meuArquivo.txt', 'utf8');

console.log('\n=== CONTEÚDO DO ARQUIVO ===');
console.log(conteudo);
```

---

## 💡 Explicação

- `writeFileSync()` cria arquivos;
- `readFileSync()` lê arquivos;
- `utf8` permite leitura correta de textos.

---

## 🔁 Desafio extra

Crie:

- um arquivo chamado `aluno.txt`;
- contendo nome, curso e cidade.

---

# 📦 Exercício 6 — Conhecendo o npm

## 🎯 Objetivo

Criar um projeto Node.js utilizando npm.

---

## 📌 Passo 1 — Criar projeto

```bash
mkdir ex06-npm
cd ex06-npm
npm init -y
```

---

## 📌 Passo 2 — Entender o package.json

Abra o arquivo e identifique:

- name;
- version;
- main;
- scripts.

---

## 📌 Passo 3 — Personalizar

Altere:

```json
"name": "meu-projeto-node"
```

```json
"description": "Projeto criado na aula de Node.js"
```

---

## 📌 Passo 4 — Criar script start

```json
"scripts": {
    "start": "node index.js"
}
```

---

## 📌 Passo 5 — Instalar pacote

```bash
npm install chalk
```

---

## 📌 Passo 6 — Criar .gitignore

```bash
node_modules/
```

---

## 📌 Passo 7 — Listar pacotes

```bash
npm list
```

---

## 💡 Explicação

- `dependencies` → pacotes do projeto;
- `devDependencies` → pacotes de desenvolvimento;
- `node_modules` → pasta das bibliotecas.

---

## 🔁 Desafio extra

Instale:

```bash
npm install nodemon --save-dev
```

Depois crie o script:

```json
"dev": "nodemon index.js"
```

---

# 📦 Exercício 7 — Servidor HTTP simples

## 🎯 Objetivo

Criar um servidor web utilizando Node.js puro.

---

## 📌 Código inicial

```jsx
const http = require('http');

const servidor = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>Servidor funcionando!</h1>
        <p>Meu primeiro servidor Node.js.</p>
    `);

});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
```

---

## 📌 Passos

1. Execute:

```bash
node index.js
```

1. Abra no navegador:

```
http://localhost:3000
```

---

## 💡 Explicação

- `http.createServer()` cria servidor;
- `req` representa a requisição;
- `res` representa a resposta;
- `listen()` inicia o servidor.

---

## 🔁 Desafio extra

Exiba:

- nome;
- curso;
- hora atual;
- cidade.

---

# 🏆 Exercício 8 — Rotas básicas

## 🎯 Objetivo

Criar páginas diferentes utilizando URLs.

---

## 📌 Requisitos

O servidor deve responder:

| URL | Conteúdo |
| --- | --- |
| / | Página inicial |
| /sobre | Informações sobre o aluno |
| /contato | Informações de contato |

---

## 🔁 Desafio extra

Adicione:

- cores CSS;
- menu de navegação;
- horário atual.

---

# 🏆 Exercício 9 — Desafio final

## 🎯 Objetivo

Unir:

- servidor HTTP;
- módulo fs;
- npm;
- rotas.

---

## 📌 Requisitos

O sistema deve:

- registrar acessos em `log.txt`;
- mostrar página HTML personalizada;
- identificar URLs acessadas;
- exibir data e hora;
- salvar logs automaticamente.

---

## 💡 Exemplo de log

```
[14/05/2026 14:30] Acesso em /
[14/05/2026 14:32] Acesso em /sobre
```

---

# ⚠️ Problemas comuns

| Problema | Possível causa |
| --- | --- |
| node não reconhecido | Node.js não instalado |
| Porta 3000 ocupada | Outro servidor aberto |
| Cannot find module | npm install não executado |
| Arquivo não encontrado | Nome incorreto do arquivo |

---

# 📌 Critérios de entrega

| Item | Descrição |
| --- | --- |
| 📁 Organização | Uma pasta por exercício |
| 💻 Execução | Todos funcionando |
| ⭐ Desafios | Valem nota extra |
| 📤 Entrega | Repositório GitHub |
| 🧹 Organização | Código comentado |
