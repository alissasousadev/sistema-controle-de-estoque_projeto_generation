import { Produto } from "./produto"; 

export class Smartphone extends Produto { 

    private _modelo: string;
    private _armazenamento: number;

    constructor(id: number, nome: string, preco: number, quantidade: number, modelo: string, armazenamento: number) {

        super(id, nome, preco, quantidade); 

        this._modelo = modelo;
        this._armazenamento = armazenamento;
    }

    public get modelo() {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        this._modelo = modelo;
    }

    public get armazenamento() {
        return this._armazenamento;
    }

    public set armazenamento(armazenamento: number) {
        this._armazenamento = armazenamento;
    }

     public visualizar(): void {
        super.visualizar();
        console.log("****************************************************************************");
        console.log("                                                                            ");
        console.log("Modelo: " + this._modelo + " | Armazenamento: " + this._armazenamento + " GB");
        console.log("                                                                            ");
        console.log("****************************************************************************");
    }
}