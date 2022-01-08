## Integrantes do Grupo

Alexander Thomas Mol Holmquist

Felipe Jaworoski de Campos

Fernando Tonucci de Cerqueira Oliveira

Leonel Mota

## Tema

**Plataforma para registar e gerenciar eventos**. Inicialmente estes eventos
podem ser de qualquer tipo. Exemplos:

- Fui assaltado
- Poste que caiu
- Choveu
- Passou um tornado
- Almocei

A ideia inicial é bem genérica. Isso é intencional. O objetivo é implementarmos
primeiro um bom fundamento. Posteriormente, é possível adicionar qualquer
funcionalidade que considerarmos interessante, como visualizar a densidade de
eventos em uma área geográfica, ou criar um meio de comunicação entre pessoas
que se interessem pelo mesmo tipo de evento.

## Tecnologias

### Frontend

[React](https://reactjs.org/)
[Express](https://expressjs.com/)

### Backend

[Flask](https://flask.palletsprojects.com/en/2.0.x/#user-s-guide)

### DB

[PostgreSQL](https://www.postgresql.org/)

## Sprint Initial Backlog (Nov 12 to Jan 12)

### Tarefas fundamentais

- Implementar startup e conectividade básica de um banco de dados (PostgreSQL).
  -- Leonel Mota

- Usuários pré-cadastrados. -- Leonel Mota

### 1. Como usuário, gostaria de poder cadastrar novos eventos -- Alexander Holmquist

#### Tarefas:

- Desenhar interface de cadastro de eventos.

- Criar uma seção/página para cadastro.

- Preencher a seção com componentes de interface para cadastro.

- Implementar camada de criação de eventos no banco de dados.

- Implementar API para criação de eventos do frontend para o backend.


### 2. Como usuário, gostaria de poder ver mais detalhes sobre um evento específico -- Felipe Jaworoski

#### Tarefas:

- Desenhar interface para visualização de eventos. Esta interface deve ter uma
  página dedicada para ela. Categorias básicas do evento, como descrição e
  categoria, devem ser apresentadas.

- Inserir botão para voltar para página da tabela de eventos.

- Implementar API para a leitura de um único evento (o id do link pode estar
  contido na url, por exemplo: pagina.com/eventoEspecifico?eventId=12345).

- Implementar funcionalidade do botão para voltar para página da tabela de
  eventos.

- Mapa exibindo localização (v2).

### 3. Como usuário, gostaria de ver todos os eventos cadastrados em forma de tabela -- Fernando Tonucci

#### Tarefas:

- Desenhar a página de tabela de eventos.

- Inserir no frontend um local adequado para tabela (criar arquivos de
  componentes também, etc).

- Implementar dinâmica de criação da tabela (quando carrega a página, tem que
  ter uma lógica para a tabela aparecer na tela).

- Implementar API para leitura de eventos. Essa API inicialmente pode retornar
  todos os eventos.

- Usuário deve poder clicar em um evento na tabela e ser redirecionado para a
  página do evento.

- v2: Colocar parâmetro para limitar o número de eventos lidos. O backend deve
  retornar os eventos mais recentes.

### 4. Como usuário, gostaria de ver todos os eventos cadastrados em um mapa -- Leonel Mota

#### Tarefas:

- Desenhar o lugar onde o mapa vai ficar.

- Inserir um mapa vazio no frontend com a API do OpenStreetMap ou Google Maps.

- Pegar eventos do backend e adicioná-los como um novo layer no mapa.

- Exibir uma legenda com a cor/nome de cada categoria.

- Para cada categoria, o ponto no mapa deve ter uma cor diferente.

- Usuário deve poder clicar em um evento no mapa e ser redirecionado para a
  página do evento.
  
## Backlog
- Poder cadastrar a localização do evento utilizando o seu endereço, para isso seria
  necessário utilizar uma API de geocodificação, como do Google Maps ou OpenStreetMap


## Observações

Cada história foi atribuída a um membro do grupo, mas é imprescindível que nos
ajudemos durante todo o processo de desenvolvimento, com reuniões semanais ou
quando houver necessidade. Temos vários canais de comunicação de conhecimento do
time. Também está disponível um quadro Scrum na ferramenta Trello [neste
link](https://trello.com/b/hzcN7NV4/sprint-10).

## Rodando localmente

Essa aplicação pode ser executada localmente. É necessário que estejam
instalados _node.js_, _npm_, e comandos básicos que geralmente vêm integrados em
sistemas Linux. Com tais ferramentas corretamente dispostas, digite

```shell
npm install
```

Desta forma, todas as dependências do projeto devem ser instaladas no diretório
*node_modules*. Então, para realizar o deploy de todas as aplicações:

```shell
make deploy
```

Este script deve iniciar três servidores, nas portas 3000, 3001 e 8000. É fácil
ver se eles estão em pé utilizando `healthcheck`.

```shell
make healthcheck
```

Para reiniciar os servidores, pode-se fazer:

```shell
make restart
```

Veja outras opções interessantes, como `watch`, no arquivo *Makefile*.
