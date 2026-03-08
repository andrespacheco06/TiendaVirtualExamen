# 🏪 Tienda Virtual - Proyecto Completo

## 📋 Descripción
Sistema de gestiónde tienda virtual con login, registro de usuarios y CRUD de productos. Implementado con Node.js + Express en el backend y HTML/CSS/JavaScript en el frontend.

## ✨ Características Completadas

### ✅ Proceso 1: Login y Registro (4.0 pts)
- Registro de usuarios con selección de rol (Admin/Vendedor)
- Validación de email duplicado
- Contraseña hasheada con bcrypt
- Login con autenticación
- Almacenamiento seguro en localStorage

### ✅ Proceso 2: CRUD de Productos (4.5 pts)
- Crear productos (solo Admin)
- Leer/Ver todos los productos
- Actualizar productos (solo Admin)
- Eliminar productos (solo Admin)
- Validación de datos en frontend y backend

### ✅ Proceso 3: Buscador y Restricciones (5.0 pts)
- Buscador en tiempo real de productos
- Restricción: Vendedores NO pueden eliminar/crear/editar productos
- Solo lectura para vendedores
- Interfaz diferenciada por rol

---

## 🚀 Instalación y Uso

### Opción 1: Ejecutar Localmente (Con XAMPP o MySQL local)

#### Paso 1: Base de Datos
1. Abre XAMPP y inicia MySQL
2. Abre phpMyAdmin (http://localhost/phpmyadmin)
3. Copia el contenido de `backend/scripts/init-db.sql` y ejecútalo
4. Listo, base de datos creada

#### Paso 2: Backend
```bash
cd backend
npm install
npm start
```
El servidor estará en http://localhost:3000

#### Paso 3: Frontend
1. Abre `frontend/index.html` en tu navegador
2. ¡Listo! Comienza a registrarte y usar la app

---

## 📁 Estructura del Proyecto

```
tienda-virtual-proyecto/
├── backend/
│   ├── config/
│   │   └── db.js                 (Configuración BD)
│   ├── controllers/
│   │   ├── authController.js     (Login/Registro)
│   │   └── productController.js  (CRUD Productos)
│   ├── middleware/
│   │   └── roles.js              (Verificación de permisos)
│   ├── models/
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   ├── scripts/
│   │   └── init-db.sql           (Script de BD)
│   ├── .env                      (Variables de configuración)
│   ├── package.json
│   └── server.js                 (Punto de entrada)
│
└── frontend/
    ├── css/
    │   └── styles.css            (Estilos completos)
    ├── js/
    │   ├── config.js             (Configuración y utilidades)
    │   ├── login.js              (Autenticación login)
    │   ├── register.js           (Registro usuarios)
    │   ├── productos.js          (CRUD + Búsqueda)
    │   └── buscador.js
    ├── pages/
    │   ├── login.html            (Página login)
    │   ├── register.html         (Página registro)
    │   └── dashboard.html        (CRUD productos)
    └── index.html                (Landing page)
```

---

## 🔐 Credenciales de Prueba (Después de registrarte)

**Usuario Admin:**
- Email: admin@ejemplo.com
- Contraseña: 123456
- Rol: Administrador

**Usuario Vendedor:**
- Email: vendedor@ejemplo.com
- Contraseña: 123456
- Rol: Vendedor

---

## 🌐 API Endpoints

### Autenticación
- `POST /api/register` - Registrar usuario
- `POST /api/login` - Iniciar sesión

### Productos
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos?buscar=nombre` - Buscar productos
- `POST /api/productos` - Crear producto (Admin)
- `PUT /api/productos/:id` - Actualizar producto (Admin)
- `DELETE /api/productos/:id` - Eliminar producto (Admin)

---

## 🛠️ Tecnologías Utilizadas

**Backend:**
- Node.js
- Express.js
- MySQL2
- Bcrypt (Seguridad)
- CORS

**Frontend:**
- HTML5
- CSS3 (Diseño responsivo)
- JavaScript vanilla

---

## 📝 Notas Importantes

1. **Seguridad en frontend:**
   - El rol se envía en headers (x-user-role)
   - Se valida en backend también

2. **Base de datos:**
   - Usa prepared statements para evitar SQL injection
   - Contraseñas hasheadas con bcrypt

3. **Interfaz:**
   - Responsive (funciona en móvil y desktop)
   - Mensajes de error/éxito claros
   - Validación en frontend y backend

4. **Para producción:**
   - Cambiar `API_URL` en `frontend/js/config.js`
   - Hostar backend en Render.com o Heroku
   - Usar BD en la nube (RDS, PlanetScale, etc.)
   - Agregar variables de entorno seguras

---

## 🎯 Requisitos Cumplidos al 100%

| Requisito | Puntos | Estado |
|-----------|--------|--------|
| Login y Registro | 4.0 | ✅ COMPLETADO |
| CRUD Productos | 4.5 | ✅ COMPLETADO |
| Buscador + Restricciones | 5.0 | ✅ COMPLETADO |
| **TOTAL** | **13.5** | ✅ **LISTO** |

---

## 📞 Soporte

Si tienes dudas o problemas:
1. Verifica que MySQL esté corriendo
2. Verifica que npm install se completó correctamente
3. Comprueba que el backend está en puerto 3000
4. Revisa la consola del navegador (F12) para errores

---

**¡Proyecto completado al 100%! 🚀**
