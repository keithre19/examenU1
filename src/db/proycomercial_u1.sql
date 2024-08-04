CREATE TABLE producto
(
  idProducto INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  precioVenta DECIMAL(10,2) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  esPerecedero INT NOT NULL,
  estadoActivo INT NOT NULL,
  PRIMARY KEY (idProducto)
);

CREATE TABLE rol
(
  idRol INT NOT NULL AUTO_INCREMENT,
  rol VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (idRol)
);

CREATE TABLE rrhh
(
  idRrhh INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  edad INT NOT NULL,
  dpi VARCHAR(20) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  salario DECIMAL(10,2) NOT NULL,
  estadoActivo INT NOT NULL,
  PRIMARY KEY (idRrhh)
);

CREATE TABLE horario
(
  idHorario INT NOT NULL AUTO_INCREMENT,
  dia VARCHAR(255) NOT NULL,
  horaEntrada TIME NOT NULL,
  horaSalida TIME NOT NULL,
  idRrhh INT NOT NULL,
  PRIMARY KEY (idHorario),
  FOREIGN KEY (idRrhh) REFERENCES rrhh(idRrhh)
);

CREATE TABLE cliente
(
  idCliente INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  nit VARCHAR(20) NOT NULL,
  PRIMARY KEY (idCliente)
);

CREATE TABLE proveedor
(
  idProveedor INT NOT NULL AUTO_INCREMENT,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  estadoActivo INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (idProveedor)
);

CREATE TABLE pedido
(
  idPedido INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(255) NOT NULL,
  precioCompra DECIMAL(10,2) NOT NULL,
  estadoRecibido INT NOT NULL,
  fechaPedido DATE NOT NULL,
  idProducto INT NOT NULL,
  idProveedor INT NOT NULL,
  PRIMARY KEY (idPedido),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto),
  FOREIGN KEY (idProveedor) REFERENCES proveedor(idProveedor)
);

CREATE TABLE usuario
(
  idUsuario INT NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(255) NOT NULL,
  contrasenia VARCHAR(255) NOT NULL,
  estadoActivo INT NOT NULL,
  idRol INT NOT NULL,
  idRrhh INT NOT NULL,
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (idRol) REFERENCES rol(idRol),
  FOREIGN KEY (idRrhh) REFERENCES rrhh(idRrhh)
);

CREATE TABLE venta
(
  idVenta INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  montoTotal DECIMAL(10,2) NOT NULL,
  idCliente INT NOT NULL,
  idRrhh INT NOT NULL,
  PRIMARY KEY (idVenta),
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
  FOREIGN KEY (idRrhh) REFERENCES rrhh(idRrhh)
);

CREATE TABLE detalleVenta
(
  idDetalleVenta INT NOT NULL AUTO_INCREMENT,
  cantidadProducto INT NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  idVenta INT NOT NULL,
  idProducto INT NOT NULL,
  PRIMARY KEY (idDetalleVenta),
  FOREIGN KEY (idVenta) REFERENCES venta(idVenta),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto)
);

CREATE TABLE log
(
  idLog INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  horaEntrada TIME NOT NULL,
  horaSalida TIME NOT NULL,
  estadoActivo INT NOT NULL,
  idUsuario INT NOT NULL,
  PRIMARY KEY (idLog),
  FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE lote
(
  idLote INT NOT NULL AUTO_INCREMENT,
  categoria VARCHAR(255) NOT NULL,
  cantidadInicial INT NOT NULL,
  cantidadDisponible INT NOT NULL,
  fechaCaducidad DATE,
  fechaIngreso DATE NOT NULL,
  estadoActivo INT NOT NULL,
  idPedido INT NOT NULL,
  idProducto INT NOT NULL,
  PRIMARY KEY (idLote),
  FOREIGN KEY (idPedido) REFERENCES pedido(idPedido),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto)
);
