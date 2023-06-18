import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class arqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago';
    static descricao = 'Detentor de lancas e flechas mágicas!';

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome);
        this.ladoArqueiro = new Arqueiro(nome, destreza);
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
    }

    obterInsigna(){
        return `${this.ladoArqueiro.obterInsigna()} e ${this.ladoMago.obterInsigna()}`;
    }
}