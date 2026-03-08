@echo off
REM Script para subir el proyecto a GitHub automáticamente
REM Solo ejecuta este archivo una vez

color 0A
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   🚀 SUBIENDO PROYECTO A GITHUB                       ║
echo ║   Espera a que termine...                             ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Configurar Git (primera vez)
echo [1/6] Configurando Git...
git config --global user.email "andrespacheco06@gmail.com"
git config --global user.name "andrespacheco06"

REM Inicializar repositorio
echo [2/6] Inicializando repositorio...
git init

REM Agregar todos los archivos
echo [3/6] Agregando archivos...
git add .

REM Crear commit
echo [4/6] Creando commit...
git commit -m "Proyecto Tienda Virtual - Login, Registro, CRUD Productos - Requisitos 100%% completados"

REM Cambiar nombre de rama a main
echo [5/6] Configurando rama principal...
git branch -M main

REM Agregar repositorio remoto
echo [6/6] Conectando a GitHub...
git remote add origin https://github.com/andrespacheco06/TiendaVirtualExamen.git

REM Subir a GitHub
echo.
echo [PUSH] Subiendo archivos a GitHub...
git push -u origin main

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   ✅ ¡PROYECTO SUBIDO A GITHUB EXITOSAMENTE!         ║
echo ║   Verifica en: github.com/andrespacheco06/            ║
echo ║   TiendaVirtualExamen                                 ║
echo ╚════════════════════════════════════════════════════════╝
echo.
pause
