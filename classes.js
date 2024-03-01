class Funcionario {
    //para definirmos as propriedades da nossa classe, devemos definir um constructor
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    //para definirmos um método, damos o nome a ele e abrimos parenteses, caso queremos colocar parâmetros, colocamos dentre desses parenteses
    seApresentar(nome, idade, cargo){
        alert("Olá, meu nome é " + nome + " tenho " + idade + " anos, e sou " + cargo);
    }
    trabalhar(nome){
        alert( nome + ": Estou trabalhando!");
    }
}
class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
    }
    gerenciar(departamento){
        alert("Gerenciando " + departamento);
    }
}
class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
    }
    programar(linguagem){
        if(linguagem == "Java"){
            alert("Programando em Java.");
        }
        else if(linguagem == "JavaScript"){
            alert("Programando em JavaScript");
        }
        else if(linguagem == "Python"){
            alert("Programando em Python");
        }
    }
}
function exibirErro(){
    document.getElementById('span-error').style.display = "block";
    throw new Error("Erro ao cadastrar!");
}
//defining arrays to listen on the page
var gerentesList = [];
var devsList = [];
//let's create a new function to add managers and developers to the list
function addGerentes(gerente){
    gerentesList.push(gerente);
}
function addDeveloper(dev){
    devsList.push(dev);
}
const form = document.getElementById('form');
form.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    var nameGerente = form.querySelector('#nome-gerente').value;
    var idadeGerente = form.querySelector('#idade-gerente').value;
    var cargoGerente = form.querySelector('#cargo-gerente').value;
    var departamentoGerente = form.querySelector('#departamento-gerente').value;

    var nameDev = form.querySelector('#nome-desenvolvedor').value;
    var idadeDev = form.querySelector('#idade-desenvolvedor').value;
    var cargoDev = form.querySelector('#cargo-desenvolvedor').value;
    var linguagemDev = form.querySelector('#linguagem').value;

    const idadeIntGerente = Number.parseInt(idadeGerente);
    const idadeIntDev = Number.parseInt(idadeDev);
    const inputs = document.getElementsByName("input");

    function verificaCamposPreenchidos(){
        for(var i = 0; i<inputs.length; i++){
            var inputAtual = inputs[i];
            if(inputAtual.value.trim() !== ""){
                return true;
            } else {
                return false;
            }
        }
    }
    try{
        if(verificaCamposPreenchidos()){
            const novoGerente = new Gerente(nameGerente, idadeIntGerente, cargoGerente, departamentoGerente);
            novoGerente.seApresentar(nameGerente,idadeIntGerente,cargoGerente);
            novoGerente.trabalhar(nameGerente);
            novoGerente.gerenciar(departamentoGerente);
            addGerentes(novoGerente);
            const novoDev = new Desenvolvedor(nameDev, idadeIntDev,cargoDev,linguagemDev);
            novoDev.seApresentar(nameDev,idadeIntDev,cargoDev);
            novoDev.trabalhar(nameDev);
            novoDev.programar(linguagemDev);
            addDeveloper(novoDev);
            var tabela = document.getElementById('t-body');
            var novaLinhaGerente =tabela.insertRow();
            var cellNomeGerente = novaLinhaGerente.insertCell(0);
            var cellIdadeGerente = novaLinhaGerente.insertCell(1);
            var cellCargoGerente = novaLinhaGerente.insertCell(2);
            var cellDepartamentoGerente = novaLinhaGerente.insertCell(3);
            var novaLinhaDev = tabela.insertRow();
            var cellNomeDev = novaLinhaDev.insertCell(0);
            var cellIdadeDev = novaLinhaDev.insertCell(1);
            var cellCargoDev = novaLinhaDev.insertCell(2);
            var cellLinguagemDev = novaLinhaDev.insertCell(3);
            cellNomeGerente.innerHTML = novoGerente.nome;
            cellIdadeGerente.innerHTML = novoGerente.idade;
            cellCargoGerente.innerHTML = novoGerente.cargo;
            cellDepartamentoGerente.innerHTML = novoGerente.departamento;
            cellNomeDev.innerHTML = novoDev.nome;
            cellIdadeDev.innerHTML = novoDev.idade;
            cellCargoDev.innerHTML = novoDev.cargo;
            cellLinguagemDev.innerHTML = novoDev.linguagem;
            console.log(gerentesList, devsList);
        } 
    } catch{
        exibirErro();
    }
    form.reset();
});
