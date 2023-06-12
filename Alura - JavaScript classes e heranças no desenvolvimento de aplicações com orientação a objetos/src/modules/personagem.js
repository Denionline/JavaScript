export class Personagem {
    nome
    vida
    mana
    level
    tipo
    descricao

    obterInsigna(){
        if(this.level >= 5){
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} Iniciante `
    }
}