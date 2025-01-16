## API AUTHENTICATION CODE

![Node](https://img.shields.io/badge/nodejs_-green.svg?style=for-the-badge&logo=node&logoColor=&color=darkgreen)
![Spring](https://img.shields.io/badge/express_-black.svg?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-%236DB11F.svg?style=for-the-badge&logo=mongodb&logoColor=white&color=darkgreen)

This project is an API built using **Node, Typescript, Express and MongoDB**

## Table of Contents

-  [Installation](#installation)
-  [Usage](#usage)
-  [Database](#database)
-  [API Endpoints](#api-endpoints)
-  [Contributing](#contributing)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/...
```

2. Install dependencies with MPN

```bash
    npm install
```


## DATABASE

The project utilizes MongoDB as the database.

## Usage

```sh
   npm run dev
```

The API will be accessible at http://localhost:3333

## API Endpoints

1. Generate Hash

| Function         | Method | Endpoint        |
| ---------------- | ------ | --------------- |
| **generateHash** | POST   | `/api/generate` |

### Example

Request: - POST

```json
{
   "userId": "123654",
   "email": "patrickpqdt87289@gmail.com",
   "name": "Patrick Anjos"
}
```

Response: 200

```json
{
   "message": "Código de confirmação enviado para o E-mail: patrick@gmail.com"
}
```

---

2. Validate Hash

| Function         | Method | Endpoint        |
| ---------------- | ------ | --------------- |
| **validateHash** | POST   | `/api/validate` |

### Example

Request: - POST

```json
{
   "hash": "ZO6I3VRB",
   "userId": "22"
}
```

Response: 200

```json
{
   "_id": "666992ea4b4a80189117630f",
   "hash": "$2b$12$7W64YdCjeec8.DoAiKnit.Y.NWpT3rbpPZUGijuw2a0XF6LYsa31G",
   "userId": "123654",
   "endDate": "2024-06-12T12:32:02.228Z",
   "createdAt": "2024-06-12T12:22:02.233Z",
   "updatedAt": "2024-06-12T12:22:02.233Z",
   "__v": 0
}
```

Response: 404

```json
{
   "message": "Hash inválido!"
}
```

---
