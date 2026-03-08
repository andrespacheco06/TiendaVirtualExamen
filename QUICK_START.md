# ⚡ QUICK START - Inicia en 3 pasos

## 🚀 Opción FÁCIL (Windows)

### Paso 1: Inicia el Backend
1. Abre la carpeta `backend`
2. **Doble click en `iniciar.bat`**
3. Espera a que diga "Servidor corriendo en puerto 3000"
4. **NO cierres esta ventana**

### Paso 2: Inicia MySQL
1. Abre XAMPP (si no está corriendo)
2. Click en START para Apache y MySQL
3. Abre http://localhost/phpmyadmin
4. Importa `backend/scripts/init-db.sql`

### Paso 3: Abre la App
1. Ve a carpeta `frontend`
2. **Doble click en `abrir.bat`**
3. ¡Se abre tu navegador automáticamente!

---

## 🔧 Opción MANUAL (Más control)

### Terminal Backend:
```bash
cd backend
npm install
npm start
```

### Navegador Frontend:
Abre: `frontend/index.html`

---

## ✅ Verificar que funciona

1. Ves página LOGIN → ✅ Todo bien
2. Registra usuario → Debe decir "Usuario registrado"
3. Login → Debe ir al Dashboard
4. Ves tabla productos → ✅ Backend conectado

---

## 🧪 Probar Todo

**Como ADMIN:**
- Crear producto ✅
- Editar producto ✅
- Eliminar producto ✅

**Como VENDEDOR:**
- Crear producto ❌ (no ver botón)
- Ver productos ✅

---

## ⚠️ Si no funciona

1. ¿MySQL está corriendo? ✅ Inicia XAMPP
2. ¿npm install completó? ✅ Esperaste a que terminara
3. ¿npm start no tiene errores? ✅ Mira consola del terminal
4. ¿Consola del navegador (F12) sin errores? ✅ Actualiza página

---

## 📖 Más info

- INSTRUCCIONES.md → Guía completa
- PRUEBAS.md → Checklist para verificar
- RESUMEN.md → Documentación técnica
- README.md → Detalles del proyecto

---

**¡Listo! La app debería funcionar perfectamente.** 🎉
