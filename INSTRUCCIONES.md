# 🚀 INSTRUCCIONES DE EJECUCIÓN - Tienda Virtual

## ⚙️ REQUISITOS PREVIOS

Antes de comenzar, asegúrate de tener instalado:

1. **Node.js** (incluye npm)
   - Descargar desde: https://nodejs.org/
   - Versión recomendada: 18.x o superior

2. **MySQL** (o XAMPP con MySQL)
   - Si usas XAMPP: Descarga desde https://www.apachefriends.org/
   - O MySQL Server independiente

---

## ✅ PASO 1: Preparar la Base de Datos

### Opción A: Usando XAMPP (Recomendado)
1. Instala XAMPP
2. Inicia Apache y MySQL desde el panel de control
3. Abre http://localhost/phpmyadmin en tu navegador
4. Crea una base de datos nueva
5. Importa el archivo: `backend/scripts/init-db.sql`
   - Copia todo el contenido del archivo SQL
   - Pégalo en la pestaña SQL de phpMyAdmin
   - Ejecuta

### Opción B: Usando MySQL Server directamente
```bash
mysql -u root -p < backend/scripts/init-db.sql
```

---

## ✅ PASO 2: Instalar Dependencias del Backend

Abre terminal/cmd en la carpeta `backend` y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (express, mysql2, bcrypt, etc.)

---

## ✅ PASO 3: Iniciar el Servidor Backend

En la terminal (en la carpeta backend), ejecuta:

```bash
npm start
```

Deberías ver algo como:
```
✅ Conectado a MySQL
Servidor corriendo en puerto 3000
```

**¡NO cierres esta terminal! El servidor debe estar corriendo en segundo plano.**

---

## ✅ PASO 4: Abrir el Frontend

1. Abre el explorador de archivos
2. Navega a la carpeta `frontend`
3. Haz doble click en `index.html`
4. O arrastra `index.html` a tu navegador favorito

**¡Listo! El sitio debería abrirse. Ve al paso de Uso.**

---

## 📝 CÓMO USAR LA APLICACIÓN

### 1️⃣ REGISTRO (Crear cuenta)
- Click en "Regístrate aquí"
- Llena los datos:
  - **Nombre**: Tu nombre completo
  - **Email**: Ej: micuenta@correo.com
  - **Contraseña**: Mínimo 6 caracteres
  - **Tipo de usuario**: Elige entre Admin o Vendedor
- Click en "Registrarse"
- Serás redirigido al login

### 2️⃣ LOGIN (Iniciar sesión)
- Completa email y contraseña
- Click en "Iniciar Sesión"
- Serás enviado al dashboard

### 3️⃣ DASHBOARD (Panel de control)

#### Si eres ADMINISTRADOR:
- ✅ Puedes ver todos los productos
- ✅ Puedes crear nuevos productos (botón "➕ Nuevo Producto")
- ✅ Puedes editar productos (botón "✏️ Editar")
- ✅ Puedes eliminar productos (botón "🗑️ Eliminar")
- ✅ Puedes buscar productos

#### Si eres VENDEDOR:
- ✅ Puedes ver todos los productos
- ✅ Puedes buscar productos
- ❌ NO puedes crear productos
- ❌ NO puedes editar productos
- ❌ NO puedes eliminar productos

### 4️⃣ BÚSQUEDA DE PRODUCTOS
- Escribe en el campo de búsqueda
- Presiona Enter o click en "Buscar"
- Los productos se filtrarán automáticamente
- Click en "Limpiar Búsqueda" para volver a ver todo

### 5️⃣ CERRAR SESIÓN
- Click en "Cerrar Sesión" en la esquina superior derecha

---

## 🧪 DATOS DE PRUEBA PRECARGADOS (OPCIONAL)

Si ejecutaste el SQL con datos de prueba, puedes usar:

**Admin:**
- Email: admin@ejemplo.com
- Contraseña: 123456

**Vendedor:**
- Email: vendedor@ejemplo.com
- Contraseña: 123456

> ⚠️ Nota: Las contraseñas en el archivo SQL son placeholders. Debes crear nuevas cuentas o actualizar el hash.

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ Error: "Cannot find module"
**Solución:** 
```bash
npm install
```

### ❌ Error: "connect ECONNREFUSED 127.0.0.1:3306"
**Solución:** Asegúrate de que MySQL esté corriendo (XAMPP iniciado)

### ❌ Error: "Database does not exist"
**Solución:** Importa el archivo SQL en la base de datos (ve al Paso 1)

### ❌ El sitio no carga en el navegador
**Solución:** 
- Asegúrate de estar abriendo `frontend/index.html`
- Actualiza la página (Ctrl+R o F5)
- Comprueba que el backend está corriendo (Paso 3)

### ❌ Error al registrar/login
**Solución:**
- Abre la consola del navegador (F12)
- Ve a la pestaña Network
- Verifica que las solicitudes llegan a http://localhost:3000

---

## 📊 ESTRUCTURA DE CARPETAS

Tu proyecto debería verse así:

```
tienda-virtual-proyecto/
├── backend/              ← Aquí inicia el servidor (npm start)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── scripts/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/             ← Aquí abres index.html en el navegador
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── index.html
│
├── README.md
└── INSTRUCCIONES.md      ← Este archivo
```

---

## 🎯 RESUMEN RÁPIDO

1. **Instala Node.js** (si no lo tienes)
2. **Inicia MySQL** (XAMPP o servidor)
3. **Importa el SQL** (frontend/scripts/init-db.sql)
4. **Ejecuta** `npm install` en la carpeta backend
5. **Ejecuta** `npm start` en la carpeta backend (déjalo corriendo)
6. **Abre** `frontend/index.html` en tu navegador
7. **¡Listo!** Regístrate y comienza a usar la app

---

## ✨ CARACTERÍSTICAS COMPLETADAS

✅ Login y Registro
✅ CRUD de Productos
✅ Buscador de Productos
✅ Restricción de permisos (Vendedor vs Admin)
✅ Interfaz responsiva
✅ Validaciones en frontend y backend
✅ Manejo de errores

---

## 📞 NOTAS FINALES

⚠️ **Importante:**
- Mantén el servidor backend corriendo mientras uses la app
- No cierres la terminal del backend
- Si necesitas detener el servidor, presiona Ctrl+C
- Para reiniciar, ejecuta nuevamente `npm start`

¡Espero que disfrutes usando tu Tienda Virtual! 🏪✨

¿Problemas? Revisa la consola del navegador (F12) para mensajes de error específicos.
