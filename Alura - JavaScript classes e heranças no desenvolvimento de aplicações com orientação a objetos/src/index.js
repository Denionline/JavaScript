import { Personagem } from "./modules/personagem.js";

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }

const personagemPedrinho = new Personagem();
personagemPedrinho.nome = 'Pedrinho';
personagemPedrinho.mana = 12;
personagemPedrinho.vida = 7;
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.level = 5

const personagemJose = new Personagem();
personagemJose.nome = 'Jose';
personagemJose.tipo = 'Arqueiro';
personagemJose.level = 3;

console.log(personagemJose.obterInsigna())