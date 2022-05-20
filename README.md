# Competency Mapping Project

Proof of concept repo for competency mapping built with React + NextJS, Apollo Client, KeystoneJS, and GraphQL.

## Repo Structure

├── frontent (NextJS frontend app)
├── backend (KeystoneJS backend app)

## 🚀 Getting Started

Note: we use yarn for both frontend and backend apps
**Yarn:** [Yarn Installation Docs](https://yarnpkg.com/getting-started/install)

### Frontend

1. Navigate to frontend directory

```sh
   cd frontend/
```

2. Install dependencies

```sh
   yarn install
```

3. Create .env

```sh
  # Request env variables from @natestormer
   touch .env
```

4. Start dev server

```sh
   yarn dev
```

## 🚀 GraphQL Codegen

GraphQL codegen will happen every time a dev or prod build is initiated.

Note: If you are updating `.graphql` files, you will need to restart your dev server for codegen schema and types to be generated

### Backend

1. Navigate to backend directory

```sh
   cd backend/
```

2. Install dependencies

```sh
   yarn install
```

3. Create .env

```sh
  # Request env variables from @natestormer
   touch .env
```

4. Start dev server

```sh
   yarn dev
```
