const readline = require('readline-sync');
const Contato = require('./modelos');

const contatos = [];

function adicionarContato(nome, email, telefone){
    const novoContato = new Contato(nome, email,telefone);
    contatos.push(novoContato);

}

function  listarContatos(){
    return contatos;
}

function  buscarContato(nome){
    return contatos.find(contato => contato.nome === nome);
}

function atualizarContato(nome, email, telefone){
    const encontrarContato = buscarContato(nome);
    if(encontrarContato){
        contatoEncontrado.email = email
        contatoEncontrado.telefone = telefone
    } else {
        console.log("Contato não localizado");
    }
}

function removerContato(nome){
    const index = contatos.findIndex(contato => contato.nome === nome);
    if(index !== -1){
        contatos.splice(index, 1);
    }
}

module.exports = {
    adicionarContato,
    listarContatos,
    buscarContato,
    atualizarContato,
    removerContato,
  };