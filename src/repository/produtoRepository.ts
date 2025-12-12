import { Produto } from "../model/produto";

export interface produtoRepository {
    
    // CRUD
    procurarPorId(id: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(id: number): void;
}