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


## Rodando localmente

Essa aplicação pode ser executada localmente. É necessário que estejam
instalados _node.js_, _npm_, e comandos básicos que geralmente vêm integrados em
sistemas Linux. Com tais ferramentas corretamente dispostas, digite

```shell
npm install
```

Desta forma, todas as dependências do projeto devem ser instaladas no diretório
*node_modules*. Então, para realizar o deploy de todas as aplicações, basta
rodar o script _deploy.sh_:

```shell
./deploy.sh
```

Este script deve iniciar três servidores, nas portas 3000, 3001 e 8000. É fácil
ver se eles estão em pé utilizando o script *check_servers.sh*.

```shell
./check_servers.sh
```

Para reiniciar os servidores, pode-se executar `restart.sh`.
