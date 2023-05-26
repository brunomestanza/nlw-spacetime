
# NLW Spacetime

Uma cápsula do tempo, para compartilhar e salvar suas melhores memórias


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Server
`DATABASE_URL=DATABASE_URL="file:./dev.db"`

`GITHUB_CLIENT_ID="YOUR GITHUB CLIENT ID FOR MOBILE"`

`GITHUB_CLIENT_SECRET="YOUR GITHUB CLIENT SECRET FOR MOBILE"`

`GITHUB_CLIENT_ID="YOUR GITHUB CLIENT ID FOR WEB"`

`GITHUB_CLIENT_SECRET="YOUR GITHUB CLIENT SECRET FOR WEB"`


## API Reference

#### Register an user

```http
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `code` | `string` | **Required**. Código retornado pelo OAuth do GitHub |

#### Get memories

```http
  GET /memories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário nos headers |

#### Get memory by id

```http
  GET /memories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário nos headers |
| `id`      | `string` | **Required**. Id do memória nos parâmetros da requisição |

#### Create a memory

```http
  POST /memories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário nos headers |
| `content`      | `string` | **Required**. Conteúdo da memória |
| `coverUrl`      | `string` | **Required**. Link da imagem de capa da memória |
| `isPublic`      | `boolean` | **Required**. Se a memória é ou não pública |

#### Update a memory

```http
  PUT /memories:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário nos headers |
| `id`      | `string` | **Required**. Id da memória nos parâmetros da requisição |
| `content`      | `string` | **Required**. Conteúdo da memória |
| `coverUrl`      | `string` | **Required**. Link da imagem de capa da memória |
| `isPublic`      | `boolean` | **Required**. Se a memória é ou não pública |

#### Delete a memory

```http
  DELETE /memories/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do usuário nos headers |
| `id`      | `string` | **Required**. Id do memória nos parâmetros da requisição |









## Reconhecimentos

 - [Feito no NLW da Rocketseat](https://www.rocketseat.com.br/)