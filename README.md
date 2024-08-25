# ITA-Certification

**Repositório de Certificação de Projetos do Instituto Tecnológico de Aeronáutica (ITA)**

![image](https://github.com/user-attachments/assets/f57d356a-6059-4cd8-b625-0698448cc181)


## Visão Geral

Livrologia é uma aplicação desenvolvida em Angular, projetada para permitir que usuários autenticados visualizem, gerenciem e acompanhem seu progresso na leitura de livros. A aplicação possui funcionalidades de autenticação de usuário, detalhes de livros, rankings de usuários e acompanhamento de progresso de leitura, pontos e troféus.

## Funcionalidades

- **Login de Usuário:** Usuários registrados podem fazer login no sistema de forma segura.
- **Dashboard:** Exibe uma lista de livros avaliados, com opções para marcar livros como "em leitura".
- **Detalhes do Livro:** Permite que os usuários visualizem informações detalhadas sobre livros específicos, incluindo título, autor, sinopse e número de páginas.
- **Ranking de Usuários:** Exibe um ranking de usuários ordenados pela quantidade de pontos acumulados.
- **Perfil do Usuário:** Exibe os pontos acumulados e troféus conquistados pelo usuário no sistema.
- **Marcar como Em Leitura:** Os usuários podem marcar um livro como "em leitura" e acompanhar seu progresso ao longo do tempo.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Começando

### Pré-requisitos

Certifique-se de ter:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Instalação

Clone o repositório e navegue até o diretório do projeto:

```
git clone https://github.com/zrodrigolimaz/ITA-Certification.git
cd ITA-Certification

```

Instale as dependências do projeto:

```
npm install

```

### Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

![image](https://github.com/user-attachments/assets/f391c188-fa80-4310-a249-e60ed01312e3)


### Geração de Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

### Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io/).

### Executando Testes End-to-End

Execute `ng e2e` para executar testes end-to-end. Antes de executar o comando, você precisa adicionar um pacote que implemente as capacidades de testes end-to-end.

## Documentação

### Passo 1: Gerar Documentação com Compodoc

Para gerar uma documentação mais detalhada do projeto, utilize o [Compodoc](https://compodoc.app/), uma ferramenta para gerar documentação de projetos Angular.

### Instalando o Compodoc

```
npm install -g @compodoc/compodoc

```

### Gerando a Documentação

No diretório do projeto, execute:

```
compodoc -p tsconfig.app.json

```

Este comando gerará a documentação na pasta `documentation/`.

### Visualizando a Documentação

Para visualizar a documentação gerada:

```
compodoc -s
```
## Notion Especifications 
[NOTION](https://zrodrigolimaz.notion.site/90b6ea9955294b0fb1f1dadecfd63a28?v=e1554ead3fdd4a16b0fcfeb5754f98d2&pvs=25).
