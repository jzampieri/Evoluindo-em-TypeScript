// Exercício 1

console.log("\nExercício 1");
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // '?' faz com que deixe opcional a variável 
  }
  
  const meuCarro: Carro = {
    marca: "Porsche",
    modelo: "911",
    ano: 2019,
    motor: "2.0 Flex"
  };
  
  console.log("Dados do meu carro:", meuCarro);

// Exercício 2

console.log("\nExercício 2");
interface Multiplicacao {
    (a: number, b: number): number;
  }
  
  const multiplicar: Multiplicacao = (a, b) => a * b;
  
  console.log("Multiplicação de 2 e 3:", multiplicar(2, 3)); // 6
  console.log("Multiplicação de 5 e 10:", multiplicar(5, 10)); // 50
  console.log("Multiplicação de -4 e 7:", multiplicar(-4, 7)); // -28

// Exercício 3

console.log("\nExercício 3");
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const strings = ["a", "b", "c", "d", "e"];
  
  console.log("Array de números invertido:", inverterArray(numeros));
  console.log("Array de strings invertido:", inverterArray(strings));

// Exercício 4

console.log("\nExercício 4");

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  interface Usuario {
    nome: string;
    email: string;
  }
  
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  
  const repo = new RepositorioUsuario();
  repo.salvar({ nome: "Julio", email: "julio@dev.com" });
  repo.salvar({ nome: "Zampieri", email: "contact@zampieri.com" });
  
  console.log("Usuários cadastrados:", repo.obterTodos());
  
// Exercício 5

console.log("\nExercício 5");

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log("Mensagem do servidor:", resposta);
  } else {
    console.log("Status do servidor:", resposta ? "Sucesso" : "Falha");
  }
}

processarResposta("Operação concluída com sucesso.");
processarResposta(true);
processarResposta(false);

// Exercício 6

console.log("\nExercício 6");

processarResposta("Operação concluída com sucesso.");
processarResposta(true);
processarResposta(false);

interface Estudante {
  nome: string;
  curso: string;
}

interface Trabalhador {
  empresa: string;
  cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
  nome: "Julio Zampieri",
  curso: "Engenharia de Software",
  empresa: "ZampiDev",
  cargo: "C.E.O"
};

console.log("Dados do estudante trabalhador:", estudanteTrabalhador);