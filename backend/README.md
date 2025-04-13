## 🔧 Backend - Pizza API

Este backend gestiona la lógica de negocio de la aplicación Pizza Shop. Expone una API REST con rutas para manejar productos (pizzas) y órdenes.

---

## 🚀 Tecnologías

- Node.js + Express
- MongoDB + Mongoose
- dotenv
- express-validator
- cors

---

## ⚙️ ¿Cómo ejecutar el backend?

### 1. Instalación

```
npm install
```
2. Archivo .env
En la raíz del backend, creá un archivo .env con:

MONGODB_URI=mongodb://localhost:27017/pizza-shop
Asegurate de tener MongoDB corriendo en tu máquina o usar un servicio remoto (como Atlas).

3. Ejecutar el servidor
```
npm start
```
Esto levantará el servidor en http://localhost:5050.

## 📌 Endpoints principales

# 🧀 /api/pizza
Método	Ruta	Descripción
GET	/	Listar todas las pizzas
POST	/	Crear una nueva pizza
GET	/:id	Obtener pizza por ID
PATCH	/:id	Editar una pizza
DELETE	/:id	Eliminar una pizza

# 🧾 /api/order
Método	Ruta	Descripción
GET	/	Listar todas las órdenes
POST	/	Crear nueva orden
GET	/:id	Obtener orden por ID
PATCH	/:id	Editar una orden
DELETE	/:id	Eliminar una orden

# 🔍 Validaciones
Validación de campos requeridos

status de orden debe ser pending, completed, o cancelled

Validación de IDs y URLs

## 🧑‍💻 Autora
Sofía Moneta
