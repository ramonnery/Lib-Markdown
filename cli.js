import { pegaArquivo } from './index.js'
import { validaUrls } from './http-validacao.js'
import chalk from 'chalk'

const caminho = process.argv

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2])
    if(caminhoDoArquivo[3] === 'validar') {
        console.log(chalk.yellow.bold('Links validados:'), validaUrls(resultado))
    }
    else {
        console.log(chalk.yellow.bold('Lista de links:'), resultado)
    }
}

processaTexto(caminho)