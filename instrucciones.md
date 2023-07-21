# API Productos

## Recuperar todos los productos

GET https://581a-79-147-186-49.ngrok-free.app/api/products
Headers:
    - Authorization -> TOKEN

## Recuperar un único producto
GET https://581a-79-147-186-49.ngrok-free.app/api/products/IDPRODUCTO

## Creación de un producto
- POST https://581a-79-147-186-49.ngrok-free.app/api/products
- Body: nombre,descripcion, precio, categoria, stock, disponible

## Edición de un producto
- PUT https://581a-79-147-186-49.ngrok-free.app/api/products/IDPRODUCTO
- Body: Todos aquellos elementos que necesitemos actualizar

## Borrar un producto
DELETE https://581a-79-147-186-49.ngrok-free.app/api/products/IDPRODUCTO

## Meter un producto en carrito de usuario logado
PUT https://581a-79-147-186-49.ngrok-free.app/api/users/product/IDPRODUCTO
  - Authorization -> TOKEN

# API Usuarios

## Registro de usuarios
- POST https://581a-79-147-186-49.ngrok-free.app/api/users/register
- Body: username, email, password

## Login de usuarios
- POST https://581a-79-147-186-49.ngrok-free.app/api/users/login
- Body: email, password

# Aplicación de React

- Instalación de librerías: 
    - react-router-dom, styled-components, axios
- Rutas dentro del front:
    - /productos -> Productos.jsx
    - /productos/nuevo -> FormProductos.jsx
    - /productos/IDPRODUCTO -> DetalleProducto.jsx
    - /productos/edit/IDPRODUCTO -> ActualizaEmpleado.jsx
- Creación del servicio Productos