# Exercícios de TypeScript

Este repositório contém diversos exercícios práticos de TypeScript, abordando conceitos essenciais como interfaces, tipos genéricos, type alias e intersection types. Cada exercício implementa um conceito fundamental de TypeScript para reforçar o aprendizado da linguagem.

## Requisitos

- Node.js instalado ([Download Node.js](https://nodejs.org/))
- TypeScript instalado globalmente:
  ```sh
  npm install -g typescript
  ```

## Como Executar

1. Clone o repositório:
   ```sh
   git clone <https://github.com/jzampieri/Evoluindo-em-TypeScript>
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd exercicios-typescript
   ```
3. Compile os arquivos TypeScript:
   ```sh
   tsc
   ```
4. Execute o código gerado com Node.js:
   ```sh
   node dist/index.js
   ```
   Ou, se estiver usando `ts-node`:
   ```sh
   ts-node src/index.ts
   ```

## Exercícios Implementados

### 1. Interface Multiplicação
Definição de uma interface `Multiplicacao` para tipar uma função de multiplicação e sua implementação.

### 2. Função Genérica `inverterArray<T>`
Criação de uma função genérica que recebe um array de qualquer tipo e retorna o array invertido.

### 3. Interface `Carro`
Criação de uma interface para representar um carro e um objeto com seus atributos.

### 4. Interface Genérica `Repositorio<T>`
Implementação de um repositório genérico para armazenar dados, com um exemplo aplicado a usuários.

### 5. Type Alias `RespostaServidor`
Definição de um tipo que pode ser `string` ou `boolean`, com uma função para processar esses valores.

### 6. Intersection Type `EstudanteTrabalhador`
Criação de um tipo que combina as propriedades de um estudante e um trabalhador, representando um indivíduo que ocupa ambas as funções.

## Estrutura do Projeto
```
📁 exercicios-typescript
 ┣ 📁 src
 ┃ ┣ 📜 index.ts  # Código principal
 ┃ ┗ 📜 outrosArquivos.ts
 ┣ 📁 dist  # Código compilado
 ┣ 📜 package.json  # Configuração do npm
 ┣ 📜 tsconfig.json  # Configuração do TypeScript
 ┣ 📜 README.md  # Documentação do projeto
```

