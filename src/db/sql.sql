CREATE TABLE pedido
(
  idPedido INT NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  estadoRecibido INT NOT NULL,
  PRIMARY KEY (idPedido)
);

CREATE TABLE rol
(
  idRol INT NOT NULL,
  rol VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  PRIMARY KEY (idRol)
);

CREATE TABLE rrhh
(
  idRrhh INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  edad VARCHAR(3) NOT NULL,
  dpi VARCHAR(13) NOT NULL,
  PRIMARY KEY (idRrhh)
);

CREATE TABLE horario
(
  idHorario INT NOT NULL,
  dia VARCHAR(15) NOT NULL,
  horaEntrada TIME NOT NULL,
  horaSalida TIME NOT NULL,
  idRrhh INT NOT NULL,
  PRIMARY KEY (idHorario),
  FOREIGN KEY (idRrhh) REFERENCES rrhh(idRrhh)
);

CREATE TABLE cliente
(
  idCliente INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  telefono VARCHAR(15) NOT NULL,
  nit VARCHAR(15) NOT NULL,
  PRIMARY KEY (idCliente)
);

CREATE TABLE lote
(
  idLote INT NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  cantidad INT NOT NULL,
  existencia INT NOT NULL,
  fechaCaducidad DATE,
  idPedido INT NOT NULL,
  PRIMARY KEY (idLote),
  FOREIGN KEY (idPedido) REFERENCES pedido(idPedido)
);

CREATE TABLE usuario
(
  idUsuario INT NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  contrasenia VARCHAR(255) NOT NULL,
  idRol INT NOT NULL,
  idRrhh INT NOT NULL,
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (idRol) REFERENCES rol(idRol),
  FOREIGN KEY (idRrhh) REFERENCES rrhh(idRrhh)
);

CREATE TABLE venta
(
  idVenta INT NOT NULL,
  fecha DATE NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  idCliente INT NOT NULL,
  idRrhh INT NOT NULL,
  PRIMARY KEY (idVenta),
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
  FOREIGN KEY (idRrhh) REFERENCES rrhh(idRrhh)
);

CREATE TABLE log
(
  idLog INT NOT NULL,
  fecha DATE NOT NULL,
  horaEntrada TIME NOT NULL,
  horaSalida TIME NOT NULL,
  estadoActivo INT NOT NULL,
  idUsuario INT NOT NULL,
  PRIMARY KEY (idLog),
  FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE producto
(
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  idProductos INT NOT NULL,
  esPerecedero INT NOT NULL,
  estadoActivo INT NOT NULL,
  idLote INT NOT NULL,
  PRIMARY KEY (idProductos),
  FOREIGN KEY (idLote) REFERENCES lote(idLote)
);

CREATE TABLE detalleVenta
(
  idDetalleVenta INT NOT NULL,
  cantidadProducto INT NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  idVenta INT NOT NULL,
  idProductos INT NOT NULL,
  PRIMARY KEY (idDetalleVenta),
  FOREIGN KEY (idVenta) REFERENCES venta(idVenta),
  FOREIGN KEY (idProductos) REFERENCES producto(idProductos)
);
