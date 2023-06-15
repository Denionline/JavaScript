export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    constructor(nome, level){
        this.nome = nome;
        this.level = level;
        this.vida = 100;
        this.mana = 100;
    }

    obterInsigna(){
        if(this.level >= 5){
            return `Implacavel ${this.constructor.tipo}`;
        }
        return `${this.constructor.tipo} Iniciante `;
    }

    static verificaVencedor(personagem1, personagem2){
        if(personagem1.level === personagem2.level){
            return 'Empate!!!';
        }
        if(personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o Vencedor!`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o Vencedor!`
    }
}