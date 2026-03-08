# ✅ CHECKLIST DE VERIFICACIÓN - Tienda Virtual

## 📋 Checklist Antes de Entregar

Marca cada item conforme compruebes que funciona:

### 🗄️ Base de Datos
- [ ] MySQL está instalado y corriendo
- [ ] phpMyAdmin accesible en http://localhost/phpmyadmin
- [ ] Tabla `usuarios` creada
- [ ] Tabla `productos` creada

### 🖥️ Backend
- [ ] Node.js instalado (`node --version` muestra versión)
- [ ] `npm install` completado sin errores
- [ ] `npm start` inicia el servidor sin errores
- [ ] Consola muestra "✅ Conectado a MySQL"
- [ ] Consola muestra "Servidor corriendo en puerto 3000"

### 🎨 Frontend
- [ ] `frontend/index.html` abre en navegador
- [ ] La página de login se ve correctamente
- [ ] El enlace "Regístrate aquí" funciona
- [ ] El CSS está correctamente aplicado (colores azul/oscuro)

### 👤 Funcionalidad: REGISTRO
- [ ] Puedo registrarme como ADMINISTRADOR
- [ ] Puedo registrarme como VENDEDOR
- [ ] No puedo registrar con email duplicado
- [ ] Se muestra mensaje de éxito
- [ ] El formulario se limpia después del registro

### 🔐 Funcionalidad: LOGIN
- [ ] Puedo iniciar sesión con credenciales correctas
- [ ] Se muestra error con credenciales incorrectas
- [ ] Soy redirigido al dashboard después de login
- [ ] Mi nombre y rol aparecen en el dashboard

### 📦 Funcionalidad: VER PRODUCTOS (Ambos roles)
- [ ] Los productos se cargan en la tabla
- [ ] Veo los campos: ID, Nombre, Precio, Stock, Descripción
- [ ] Los datos se muestran correctamente
- [ ] La tabla se ve ordenada

### 🔍 Funcionalidad: BÚSQUEDA
- [ ] Escribo en el campo de búsqueda
- [ ] Presiono Enter o click en Buscar
- [ ] Los productos se filtran correctamente
- [ ] Click en "Limpiar Búsqueda" vuelve a mostrar todos

### ➕ Funcionalidad: CREAR PRODUCTO (Solo Admin)
- [ ] Veo el botón "➕ Nuevo Producto" (si soy Admin)
- [ ] NO veo el botón (si soy Vendedor) ✅
- [ ] Se abre modal con formulario
- [ ] Lleno los campos y guardo
- [ ] El producto aparece en la tabla
- [ ] Se muestra mensaje de éxito

### ✏️ Funcionalidad: EDITAR PRODUCTO (Solo Admin)
- [ ] Los datos precargados están correctos
- [ ] Puedo modificar cualquier campo
- [ ] Presiono Guardar
- [ ] El producto se actualiza en la tabla
- [ ] Se muestra mensaje de éxito

### 🗑️ Funcionalidad: ELIMINAR PRODUCTO (Solo Admin)
- [ ] Veo el botón "🗑️ Eliminar"
- [ ] Se pide confirmación antes de eliminar
- [ ] El producto se elimina de la tabla
- [ ] Se muestra mensaje de éxito

### ⛔ Restricciones: VENDEDOR
- [ ] NO veo "➕ Nuevo Producto"
- [ ] NO veo "✏️ Editar"
- [ ] NO veo "🗑️ Eliminar"
- [ ] Veo solo lectura de productos
- [ ] Se muestra "Solo lectura" en acciones

### 🚪 Funcionalidad: LOGOUT
- [ ] Puedo clickear "Cerrar Sesión"
- [ ] Se asks confirmación
- [ ] Soy redirigido a la página de login
- [ ] Puedo volver a logearme

### 🌐 Integración Frontend-Backend
- [ ] Abro consola del navegador (F12)
- [ ] No hay errores en la consola
- [ ] Tab Network muestra solicitudes a `localhost:3000/api`
- [ ] Las respuestas son JSON válido

---

## 🎯 Requisitos del Proyecto Cumplidos

### Proceso 1: Login y Registro (4.0 pts)
- [ ] ✅ Registro de usuarios
- [ ] ✅ Roles: Admin y Vendedor
- [ ] ✅ Login funcional
- [ ] ✅ Validaciones

### Proceso 2: CRUD Productos (4.5 pts)
- [ ] ✅ Create: Crear productos
- [ ] ✅ Read: Ver productos
- [ ] ✅ Update: Editar productos
- [ ] ✅ Delete: Eliminar productos

### Proceso 3: Buscador + Restricciones (5.0 pts)
- [ ] ✅ Buscador funcional
- [ ] ✅ Vendedor NO puede eliminar
- [ ] ✅ Vendedor NO puede crear
- [ ] ✅ Solo Admin puede CRUD

---

## 🐛 Pruebas de Error

Intenta esto y verifica que se maneje correctamente:

### Login
- [ ] Email vacío → Mensaje de error
- [ ] Contraseña vacía → Mensaje de error
- [ ] Email incorrecto → "Usuario no existe"
- [ ] Contraseña incorrecta → "Contraseña incorrecta"

### Registro
- [ ] Email vacío → Mensaje de error
- [ ] Email inválido (sin @) → Mensaje de error
- [ ] Contraseña < 6 caracteres → Mensaje de error
- [ ] Email duplicado → Error apropiado

### Productos
- [ ] Precio negativo → Error
- [ ] Precio = 0 → Error
- [ ] Stock negativo → Error
- [ ] Campo vacío → Error

---

## 📊 Tabla de Pruebas Rápidas

| Funcionalidad | Admin | Vendedor | Resultado |
|---------------|-------|----------|-----------|
| Ver productos | ✅ | ✅ | Si funciona |
| Buscar | ✅ | ✅ | Si funciona |
| Crear | ✅ | ❌ | Si restricción funciona |
| Editar | ✅ | ❌ | Si restricción funciona |
| Eliminar | ✅ | ❌ | Si restricción funciona |
| Logout | ✅ | ✅ | Si funciona |

---

## 🚀 Pasos Finales de Entrega

1. [ ] Leo este documento completamente
2. [ ] Verifico todos los checklist items
3. [ ] Pruebo como Admin y Vendedor
4. [ ] Pruebo los casos de error
5. [ ] Compruebo que todo está funcional
6. [ ] Cierro servidor (`Ctrl+C` en terminal)
7. [ ] Empaqueto el proyecto para entregar

---

## 💡 Tips Útiles

- **F12 en navegador**: Abre consola para ver errores
- **Network tab**: Ver solicitudes HTTP al backend
- **Local Storage**: Ver datos guardados del usuario
- **Backend logs**: Ver qué pasa en el servidor (terminal donde corre npm start)

---

## ✨ ¡Listo Para Entregar!

Si todo está marcado ✅, ¡Tu proyecto está completo al 100%!

**Requisitos cumplidos:**
- 4.0 pts: Login y Registro ✅
- 4.5 pts: CRUD Completo ✅
- 5.0 pts: Buscador y Restricciones ✅
- **Total: 13.5 pts** ✅

¡Excelente trabajo! 🎉
