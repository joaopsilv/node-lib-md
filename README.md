# Link Validator

## Sobre
Projeto que provém a verificação do status de links de arquivos MarkDown através de uma interface de linha de comando (CLI). É capaz tanto de oferecer a validação e a listagem de links de somente um arquivo, quanto de arquivos de um diretório inteiro.

Foi construído com o intuito de exercitar o uso de JavaScript com funções assíncronas e se familiarizar com Node.js, aproveitando a situação para trabalhar com expressões regulares (regex) pela primeira vez. Usufruiu-se da biblioteca Chalk para estilizações no terminal e da API File System, ambas anexadas mais abaixo.

É justo mencionar que a estruturação do projeto foi feita com o apoio de um curso da plataforma de aprendizagem de programação <a href="https://www.alura.com.br" target="_blank">Alura</a>.

## Instalação
Tendo em vista que a aplicação não foi publicada no NPM como uma biblioteca - haja vista sua confecção apenas para estudo -, para usá-la é necessário clonar o repositório do GitHub localmente.
```
git clone <https://github.com/joaopsilv/node-lib-md.git>
```

## Uso
Após clonar o repositório, é possível utilizar da aplicação através de um dos scripts de linha de comando fornecidos - o primeiro apenas para a listagem dos links nos arquivos e o segundo para que também hajam suas validações. Para isso, o Node.js deve estar instalado no ambiente de desenvolvimento.
```
npm run cli <CAMINHO_DO_ARQUIVO>
```
```
npm run cli <CAMINHO_DO_ARQUIVO> validate
```

## Tecnologias
- Node.js;
- JavaScript.

## Links
- <a href="https://www.npmjs.com/package/chalk" target="_blank">Chalk</a>;
- <a href="https://nodejs.org/api/fs.html" target="_blank">File System</a>.
