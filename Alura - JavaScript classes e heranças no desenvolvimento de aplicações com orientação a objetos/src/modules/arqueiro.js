import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem{
    static tipo = 'Arqueiro';
    static descricao = 'Você tem o meu arco!';
    constructor(nome, level, destreza){
        super(nome, level);
        this.destreza = destreza;
    }

    obterInsigna(){
        if(this.level >= 5 && this.destreza >= 5){
            return 'Dominador de flechas';
        }
        return super.obterInsigna();
    }
}