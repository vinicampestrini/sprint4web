# JOVI Smart Save

Projeto desenvolvido para o **Challenge JOVI (FIAP, Sprint 4)**, em entrega conjunta
das disciplinas de **Web Development** e **Front-End Design**.

O **JOVI Smart Save** é uma funcionalidade inteligente para smartphones JOVI que ajuda
estudantes a organizar fotos, prints e documentos do celular em categorias
(**Estudos**, **Pessoal** e **Outros**), reduzindo a desordem da galeria e facilitando
encontrar o material certo na hora de estudar.

## Tecnologias utilizadas

- React
- Vite
- Tailwind CSS
- React Router DOM (rotas públicas e privadas)
- MockAPI (API mockada)
- Git e GitHub (versionamento)
- Vercel (deploy)

## Funcionalidades

- Landing page com as seções: A Solução, Público-Alvo, Galeria, Nossa Equipe e Contato.
- Layout responsivo para desktop, tablet e mobile.
- Login com rota privada para a área do Smart Save.
- Listagem de capturas consumida de uma API.
- Adição de capturas com sugestão automática de categoria (o usuário pode trocar).
- Filtro por categoria (Todas, Estudos, Pessoal).
- Mover capturas entre categorias e removê-las.

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

Na pasta do projeto, execute:

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Depois, acesse o endereço exibido no terminal (normalmente http://localhost:5173).


## Email e senha para teste

Para acessar use qualquer email e senha.

Após o login, a página `/smartsave` fica disponível.

## Rotas

| Rota         | Tipo    | Descrição                          |
|--------------|---------|------------------------------------|
| `/`          | Pública | Landing page                       |
| `/login`     | Pública | Tela de login                      |
| `/smartsave` | Privada | Gerenciamento das capturas         |

## API

O projeto consome uma API mockada criada no [MockAPI](https://mockapi.io), com o recurso
`capturas` (campos: `id`, `titulo`, `categoria`, `icone` e `data`).

URL base: `https://6ae7819e56b2ee1e5440727c.mockapi.io`

As requisições são feitas com `fetch` em `src/services/api.js`:

| Método   | Endpoint         | Uso                                    |
|----------|------------------|----------------------------------------|
| `GET`    | `/capturas`      | Lista as capturas                      |
| `POST`   | `/capturas`      | Adiciona uma nova captura              |
| `PUT`    | `/capturas/:id`  | Altera a categoria de uma captura      |
| `DELETE` | `/capturas/:id`  | Remove uma captura                     |

A lógica de acesso à API fica separada da interface no hook customizado `useCapturas`.

## Estrutura do projeto

```
src/
├── assets/imagens/     # Imagens da galeria
├── components/         # Header, Footer, TeamCard, CaptureCard, PrivateRoute
├── context/            # AuthContext (autenticação)
├── hooks/              # useAuth, useCapturas
├── pages/              # Home, Login, SmartSave
├── services/           # api.js (consumo da API)
├── App.jsx             # Definição das rotas
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais e Tailwind
```

## Uso de Inteligência Artificial

Foi utilizada inteligência artificial como ferramenta de apoio durante o desenvolvimento do projeto, principalmente para esclarecer dúvidas sobre React, JavaScript, Tailwind CSS e React Router, auxiliar na organização dos componentes, na configuração das rotas, na implementação da autenticação e na criação de funcionalidades da aplicação. Também foi utilizada para identificar e corrigir erros.


## Deploy

Aplicação publicada na Vercel: https://sprint4web.vercel.app

## Repositório

https://github.com/vinicampestrini/sprint4web


## Integrantes

Os nomes completos e RMs estão no arquivo `INTEGRANTES.TXT`.

---
                 
- Alyson Souto         
- Guilherme Vilela     
- Vinícius Campestrini
- Vinícius Honda      