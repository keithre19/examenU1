CREATE DATABASE  IF NOT EXISTS `abarroteria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `abarroteria`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: abarroteria
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `nit` varchar(15) NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `detalleventa`
--

DROP TABLE IF EXISTS `detalleventa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalleventa` (
  `idDetalleVenta` int NOT NULL AUTO_INCREMENT,
  `cantidadProducto` int NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `idVenta` int NOT NULL,
  `idProductos` int NOT NULL,
  PRIMARY KEY (`idDetalleVenta`),
  KEY `detalleventa_ibfk_2` (`idProductos`),
  KEY `detalleventa_ibfk_1` (`idVenta`),
  CONSTRAINT `detalleventa_ibfk_1` FOREIGN KEY (`idVenta`) REFERENCES `venta` (`idVenta`),
  CONSTRAINT `detalleventa_ibfk_2` FOREIGN KEY (`idProductos`) REFERENCES `producto` (`idProductos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horario` (
  `idHorario` int NOT NULL AUTO_INCREMENT,
  `dia` varchar(15) NOT NULL,
  `horaEntrada` time NOT NULL,
  `horaSalida` time NOT NULL,
  `idRrhh` int NOT NULL,
  PRIMARY KEY (`idHorario`),
  KEY `horario_ibfk_1` (`idRrhh`),
  CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`idRrhh`) REFERENCES `rrhh` (`idRrhh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `idLog` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `horaEntrada` time NOT NULL,
  `horaSalida` time NOT NULL,
  `estadoActivo` int NOT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idLog`),
  KEY `log_ibfk_1` (`idUsuario`),
  CONSTRAINT `log_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lote`
--

DROP TABLE IF EXISTS `lote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lote` (
  `idLote` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) NOT NULL,
  `cantidad` int NOT NULL,
  `existencia` int NOT NULL,
  `fechaCaducidad` date DEFAULT NULL,
  `idPedido` int NOT NULL,
  PRIMARY KEY (`idLote`),
  KEY `lote_ibfk_1` (`idPedido`),
  CONSTRAINT `lote_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `estadoRecibido` int NOT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `idProductos` int NOT NULL AUTO_INCREMENT,
  `esPerecedero` int NOT NULL,
  `estadoActivo` int NOT NULL,
  `idLote` int NOT NULL,
  PRIMARY KEY (`idProductos`),
  KEY `producto_ibfk_1` (`idLote`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`idLote`) REFERENCES `lote` (`idLote`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `idRol` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rrhh`
--

DROP TABLE IF EXISTS `rrhh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rrhh` (
  `idRrhh` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `edad` varchar(3) NOT NULL,
  `dpi` varchar(13) NOT NULL,
  PRIMARY KEY (`idRrhh`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `idRol` int NOT NULL,
  `idRrhh` int NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `usuario_ibfk_1` (`idRol`),
  KEY `usuario_ibfk_2` (`idRrhh`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `rol` (`idRol`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`idRrhh`) REFERENCES `rrhh` (`idRrhh`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `idVenta` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `idCliente` int NOT NULL,
  `idRrhh` int NOT NULL,
  PRIMARY KEY (`idVenta`),
  KEY `venta_ibfk_1` (`idCliente`),
  KEY `venta_ibfk_2` (`idRrhh`),
  CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCliente`),
  CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`idRrhh`) REFERENCES `rrhh` (`idRrhh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-04 12:06:04
