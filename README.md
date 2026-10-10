# 🌦️ Previsão Climática — API

API do projeto **Previsão Climática**: busca o tempo atual e a previsão de 3 dias de qualquer cidade e guarda a lista de cidades favoritas. A mesma API atende a versão **web** e a versão **mobile**.

| Parte | Repositório |
|---|---|
| API (este) | [api-wheather](https://github.com/LucianoMachadoS/api-wheather) |
| Web (React) | [front-wheather](https://github.com/LucianoMachadoS/front-wheather) |
| Mobile (React Native) | [previsao-climatica-mobile-front](https://github.com/LucianoMachadoS/previsao-climatica-mobile-front) |

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=flat&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white)

## ✨ Funcionalidades

- Tempo atual por cidade, em português, consumindo a [WeatherAPI](https://www.weatherapi.com/)
- Previsão para os próximos 3 dias
- Cidades favoritas salvas no banco; a resposta do tempo já informa se a cidade é favorita
- Validação de parâmetros com **Zod** e tratamento central de erros
- Chave da API externa protegida no `.env`

## 🔌 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/weather/:cityName` | Tempo atual da cidade (+ se é favorita) |
| GET | `/weather/nextdays/:cityName` | Previsão de 3 dias |
| GET | `/favoritecity` | Lista as cidades favoritas |
| POST | `/favoritecity` | Adiciona cidade favorita |
| DELETE | `/favoritecity/:id` | Remove cidade favorita |

## 🚀 Como rodar

Crie uma chave gratuita em [weatherapi.com](https://www.weatherapi.com/) e um `.env`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/clima"
API_KEY=sua_chave_da_weatherapi
```

```bash
git clone https://github.com/LucianoMachadoS/api-wheather.git
cd api-wheather
npm install
npx prisma migrate dev
npm run dev
```

A API sobe em `http://localhost:3333`.

---
Feito por [Luciano Machado](https://github.com/LucianoMachadoS) · [LinkedIn](https://www.linkedin.com/in/luciano-machado-9253a1265/)
