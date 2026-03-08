@echo off
REM Script para Windows - Abrir Frontend automáticamente

cd /d "%~dp0"

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   🏪 TIENDA VIRTUAL - Abriendo Frontend               ║
echo ║   Se abrirá en tu navegador predeterminado            ║
echo ╚════════════════════════════════════════════════════════╝
echo.

for %%I in (.) do set CUR_DIR=%%~fI

set "FILE=%CUR_DIR%\index.html"

if exist "%FILE%" (
    echo [✓] Abriendo: %FILE%
    start "" "%FILE%"
    echo.
    echo [✓] La aplicación debería abrir en tu navegador
    echo.
    echo Recuerda:
    echo - Backend debe estar corriendo en otra terminal
    echo - Usa: npm start en la carpeta backend
    echo.
) else (
    echo [✗] No se encontró index.html
    echo [✗] Asegúrate de ejecutar este archivo desde frontend\
    pause
)
