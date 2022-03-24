import ClienteRepository from "../../core/ClienteRepository";
import Cliente from "../../core/Cliente";
import firebase from "./DatabaseConfig";
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import SnapshotOptions = firebase.firestore.SnapshotOptions;

export default class ColecaoCliente implements ClienteRepository {

    private conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }
    }


    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete();
    }

    async obter(): Promise<Cliente[]> {
        const query = await this.colecao().get();
        return query.docs.map((doc) => doc.data()) ?? [];
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente);
            return cliente;
        } else {
            const docRef = await this.colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data();
        }
    }

    private colecao() {
        return firebase.firestore().collection("clientes").withConverter(this.conversor);
    }
}
