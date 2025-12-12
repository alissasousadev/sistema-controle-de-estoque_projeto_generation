import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Produto } from "./src/model/produto"; 

export function main() {

    let opcao: number;

    // Objeto da Classe Produto (Teste)

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                   "*****************************************************");
        console.log("                                                     ");
        console.log("👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑");
        console.log("                                                     ");
        console.log("        PRINCESA CELL - CONTROLE DE ESTOQUE          ");
        console.log("                                                     ");
        console.log("👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑 👑");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Atualizar Dados do Produto           ");
        console.log("            4 - Deletar Produto                      ");
        console.log("            5 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log(colors.fg.yellowstrong, 
                "\nSistema Finalizado");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastrar Produto\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar Dados do Produto\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nDeletar Produto\n\n", colors.reset);

                keyPress()
                break;
           default:
                console.log(colors.fg.redstrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

function sobre(): void {
    console.log("\n******************************************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Alissia Sousa - alissiasuelen@hotmail.com");
    console.log("https://github.com/alissasousadev/sistema-controle-de-estoque_projeto_generation");
    console.log("********************************************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();