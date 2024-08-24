# ITA-Certification
Project Certification Repository of the Aeronautical Technology Institute (ITA)

## Descrição

Livrologia é uma aplicação desenvolvida em Angular que permite aos usuários autenticados visualizar, gerenciar e acompanhar sua leitura de livros. A aplicação também inclui funcionalidades para visualização de rankings de usuários, pontos acumulados, e troféus conquistados.

### Licença
Este projeto é licenciado sob os termos da licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Funcionalidades

- **Login de Usuário:** Permite que usuários registrados façam login no sistema.
- **Dashboard:** Exibe uma lista de livros avaliados, incluindo a possibilidade de marcar livros como "em leitura".
- **Detalhes do Livro:** Permite que os usuários visualizem detalhes sobre um livro específico.
- **Ranking de Usuários:** Exibe uma lista de usuários ordenados pela quantidade de pontos acumulados.
- **Perfil do Usuário:** Exibe os pontos acumulados e troféus conquistados pelo usuário.
- **Marcar Leitura:** Permite que o usuário marque um livro como "em leitura" e acompanhe seu progresso.

# Passo 1 Tutoriais LivrologiaApp

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.8.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Criação de Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io/).

## Executando Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end em uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de testes end-to-end.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).

__

### Passo 2: Gerar Documentação Automática com Compodoc

Para gerar uma documentação mais detalhada, você pode utilizar o [Compodoc](https://compodoc.app/), uma ferramenta para gerar documentação para projetos Angular.


1. **Executando do Compodoc:**

   ```bash
   npm install -g @compodoc/compodoc

   - **Gerar a Documentação:**
    
    No diretório do seu projeto, execute:
    
    ```bash
     
    compodoc -p tsconfig.app.json
    
    ```
    
    Isso vai gerar a documentação na pasta `documentation/`.
    
- **Visualizar a Documentação:**
    
    Para visualizar a documentação gerada:
    
    ```bash

    compodoc -s
    
    ```
    
    Acesse `http://localhost:8080/` para ver a documentação.

    Para gerar uma documentação mais detalhada, você pode utilizar o [Compodoc](https://compodoc.app/), uma ferramenta para gerar documentação para projetos Angular.
