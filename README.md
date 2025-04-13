# 🍕 Challenge Fullstack - Pizza Shop

Este proyecto es una aplicación fullstack desarrollada para el challenge de **CodingCloud**. Simula una tienda de pizzas donde los usuarios pueden explorar productos, agregarlos al carrito y generar órdenes.

## 🧩 Arquitectura

El proyecto está dividido en dos partes principales:

- 📦 **Backend**: API REST construida con Node.js, Express y MongoDB.
- 🎨 **Frontend**: Interfaz de usuario hecha con React, Vite y TailwindCSS.

Ambas aplicaciones funcionan localmente de manera independiente pero están conectadas entre sí.

---

## 🛠 Tecnologías utilizadas

| Área     | Tecnologías                                        |
|----------|----------------------------------------------------|
| Frontend | React, Vite, TailwindCSS, Axios, React Icons       |
| Backend  | Node.js, Express, MongoDB, Mongoose, dotenv        |
| Extras   | Sonner (notificaciones), express-validator, CORS   |

---

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Cloná el repositorio

```
git clone https://github.com/moneta-sofia/ChallengeCC.git
cd ChallengeCC
```

2. Iniciar Backend
```
cd backend
npm install
npm start
```
Asegurate de tener una base de datos MongoDB corriendo y la variable MONGODB_URI en un archivo .env. 


3. Iniciar Frontend
En una nueva terminal:
```
cd frontend
npm install
npm run dev
```


## 🧑‍💻 Autora
Sofía Moneta
