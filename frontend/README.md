# 🎨 Frontend - Pizza Shop UI

Este es el frontend de la aplicación de pedidos de pizza. Permite ver el catálogo de productos, añadir al carrito y generar órdenes.

---

## ⚙️ Tecnologías

- React 19 + Vite
- TailwindCSS
- Axios
- React Icons
- Sonner (notificaciones)

---

## 🚀 ¿Cómo correr el frontend?

### 1. Instalá dependencias

```
npm install
```

2. Ejecutá el proyecto
```
npm run dev
```
Esto abrirá automáticamente la app en tu navegador (http://localhost:5173 o similar).

Asegurate de que el backend esté corriendo en http://localhost:5050/api.

🌐 Conexión con el Backend
Las peticiones HTTP se realizan con Axios hacia http://localhost:5050/api. Si tu backend corre en otro puerto o dominio, modificá la URL base en los servicios (/services/*.js).

