@echo off
REM Script para Windows - Iniciar automáticamente el Backend
REM Guarda este archivo como "iniciar.bat" en la carpeta backend

color 0A
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   🏪 TIENDA VIRTUAL - Iniciando Backend               ║
echo ║   Press CTRL+C para detener                           ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo [*] Instalando dependencias...
    call npm install
)

echo.
echo [*] Iniciando servidor...
echo [*] Asegúrate de que MySQL está corriendo en XAMPP
echo.

npm start
