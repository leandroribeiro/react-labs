export default class Cliente {

    private _id: string
    private _nome: string
    private _idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this._nome = nome;
        this._idade = idade;
        this._id = id;
    }

    static vazio() {
        return new Cliente('', 0, null)
    }

    get idade(): number {
        return this._idade;
    }

    get nome(): string {
        return this._nome;
    }

    get id(): string {
        return this._id;
    }

}
