//Exercício 1
interface Carro{
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}


const meuCarro: Carro = {
    marca: "Tesla",
    modelo: "Model Y",
    ano: 2025
}


console.log(meuCarro);


//Exercício 2


interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicacao: Multiplicacao = (x, y) => x * y;
console.log(multiplicacao(10, 5));


//Exercício 3
function inverterArray<T>(inverter: T[]): T[]{
    return inverter.reverse();
}


const numeros = [1,2,3,4,5];
const numerosInvertidos = inverterArray(numeros);
console.log(numerosInvertidos);


const strings = ['a', 'b', 'c', 'd'];
const stringsInvertidas = inverterArray(strings);
console.log(stringsInvertidas);


//Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}


class Usuario {
    constructor(public nome: string, public email: string) {}
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


// Exemplo de uso
const repo = new RepositorioUsuario();
repo.salvar(new Usuario("Alice", "alice@email.com"));
repo.salvar(new Usuario("Bob", "bob@email.com"));


console.log(repo.obterTodos());


//Exercício 5
type RespostaServidor = string | boolean;
function processarResposta(respostaServer: RespostaServidor){
    console.log(`O valor passado foi: ${respostaServer}`)
}


const teste = true;
const resposta = processarResposta(teste);
console.log(resposta);


//Exercício 6
type Estudante = {
    nome: string;
    curso: string;
};


type Trabalhador = {
    empresa: string;
    cargo: string;
};


type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador1: EstudanteTrabalhador = {
    nome: "Paulo",
    curso: "Engenharia de Software",
    empresa: "Fiap",
    cargo: "CEO"
}


console.log(estudanteTrabalhador1)

