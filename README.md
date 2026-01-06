# 🔐 GateKeeper API

API de autenticação e gerenciamento de usuários desenvolvida com Node.js, Express e Prisma ORM.

## 📋 Descrição

GateKeeper API é uma solução robusta para autenticação de usuários com suporte a JWT (JSON Web Tokens), criptografia de senhas e gerenciamento de roles (USER/ADMIN). Ideal para ser utilizada como base em aplicações que necessitam de controle de acesso seguro.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express 5** - Framework web
- **Prisma ORM** - ORM moderno para Node.js
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação via tokens
- **Bcrypt** - Criptografia de senhas
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
src/
├── controllers/    # Controladores da aplicação
├── services/       # Lógica de negócio
├── routes/         # Definição de rotas
├── middlewares/    # Middlewares de autenticação
├── lib/           # Configurações (Prisma)
└── server.js      # Ponto de entrada da aplicação

prisma/
└── schema.prisma  # Schema do banco de dados
```

## ⚙️ Pré-requisitos

- Node.js (v14 ou superior)
- PostgreSQL
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/kaiquedm12/GateKeeper-API.git
cd GateKeeper-API
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env na raiz do projeto
DATABASE_URL="postgresql://usuario:senha@localhost:5432/gatekeeper"
JWT_SECRET="sua_chave_secreta_aqui"
```

4. Execute as migrations do Prisma:
```bash
npx prisma migrate dev
```

5. Inicie o servidor:
```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

## 📚 Endpoints

### Autenticação

- **POST** `/auth/register` - Registrar novo usuário
  ```json
  {
    "name": "Nome do Usuário",
    "email": "email@exemplo.com",
    "password": "senha123"
  }
  ```

- **POST** `/auth/login` - Fazer login
  ```json
  {
    "email": "email@exemplo.com",
    "password": "senha123"
  }
  ```

### Health Check

- **GET** `/health` - Verificar status da API

## 🛡️ Segurança

- Senhas criptografadas com bcrypt
- Autenticação via JWT
- Tokens com expiração de 24 horas
- Validação de dados de entrada

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Kaique DM](https://github.com/kaiquedm12)

---

⭐ Se este projeto foi útil, considere dar uma estrela!