# fullcycle-ci-desafio


## Descrição
Projeto criado para resolver o desafio do curso de Integração Contínua da plataforma FullCycle.

## 1 - Requisitos
- git
- node v18.x
- npm v9.x

## 2 - Interagindo com o projeto
Clone o repositório em sua máquina.
```bash
$ git clone https://github.com/gubsocosta/fullcycle-ci-desafio.git
```

Altere a branch atual para `develop`.
```bash
$ git checkout develop
```

Crie uma nova branch a partir da branch `develop`.
```bash
$ git checkout -b <nome_da_branch>
```

Crie/Altere alguma funcionalidade dentro do diretório `src`.

Suba as alterções feitas na nova branch para o repositório remoto.
```bash
$ git push -u origin <nome_da_branch>
```

Faça uma pull-request da nova branch para branch `develop`

Após a criação da pull-request, acesse o link das [actions](https://github.com/gubsocosta/fullcycle-ci-desafio/actions)
do GitHub para visualizar a execução dos jobs da pipeline.