-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS tienda_db;
USE tienda_db;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol ENUM('admin','vendedor') NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  descripcion TEXT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de prueba (opcional)
-- Contraseñas: 123456 hasheadas con bcrypt
INSERT INTO usuarios (nombre, email, password, rol) VALUES
('Admin Principal', 'admin@ejemplo.com', '$2b$10$YourHashedPasswordHere', 'admin'),
('Vendedor Prueba', 'vendedor@ejemplo.com', '$2b$10$YourHashedPasswordHere', 'vendedor');

INSERT INTO productos (nombre, precio, stock, descripcion) VALUES
('Laptop HP', 899.99, 5, 'Laptop HP 15.6 pulgadas, procesador Intel i7, 8GB RAM'),
('Mouse Inalámbrico', 29.99, 20, 'Mouse inalámbrico con receptor USB, batería AA'),
('Teclado Mecánico', 79.99, 10, 'Teclado mecánico RGB, switches Cherry MX Blue'),
('Monitor LG 24"', 249.99, 3, 'Monitor LG 24 pulgadas Full HD, IPS'),
('Auriculares Sony', 199.99, 8, 'Auriculares inalámbricos Sony WH-1000XM4 con cancelación de ruido');

