# API Backend — Sistema de Gerenciamento

API RESTful desenvolvida em Node.js para gerenciamento e fornecimento de dados para a aplicação.

---

## Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework Web:** Express.js
- **Banco de Dados:** MongoDB
- **Autenticação:** JSON Web Token (JWT)
- **Criptografia:** Bcrypt / BcryptJS
- **Segurança e Utilitários:** CORS, Dotenv

---

## Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Instância local do MongoDB ou conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Passos

1. **Clonar o repositório:**
   ```
   git clone <URL_DO_SEU_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

**Instalar as dependências:**

   npm install


**Configurar as Variáveis de Ambiente:** 

Crie um arquivo .env na raiz do projeto com base no modelo .env.example:Snippet de códigoPORT=3000
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<bancodedados>
JWT_SECRET=sua_chave_secreta_aqui


**Iniciar o servidor:**

# Modo de desenvolvimento
   npm run dev

# Modo de produção
   npm start

A API estará acessível em http://localhost:3000.


**Rotas da API**

# Autenticação

# Método  |    Rota               |    Autenticação     |  Descrição
  POST       /api/auth/register           Não              Regista um novo utilizador no sistema.
  POST       /api/auth/login              Não              Realiza o login e devolve o token JWT.



**Recursos principais**

# Método   |   Rota               |   Autenticação   |    Descrição
  GET        /api/recurso                Não              Lista todos os registos.
  GET        /api/recurso/:id            Não              Procura um registo específico por ID.
  POST       /api/recurso                Sim              Cria um novo registo no banco de dados.
  PUT        /api/recurso/:id            Sim              Atualiza os dados de um registo existente.
  DELETE     /api/recurso/:id            Sim              Remove um registo do banco de dados.

Nota: Para acessar as rotas protegidas por autenticação, inclua o cabeçalho:

Authorization: Bearer <SEU_TOKEN_JWT>