export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    constructor(nome, level, tipo){
        this.nome = nome;
        this.level = level;
        this.tipo = tipo
        this.vida = 100
        this.mana = 100
    }

    obterInsigna(){
        if(this.level >= 5){
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} Iniciante `
    }
}