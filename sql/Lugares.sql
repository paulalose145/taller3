-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 23-11-2014 a las 07:23:46
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `Lugares`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Lugares`
--

CREATE TABLE IF NOT EXISTS `Lugares` (
  `Tipo` text NOT NULL,
  `Nombre` text NOT NULL,
  `Latitud` double NOT NULL,
  `Longitud` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Lugares`
--

INSERT INTO `Lugares` (`Tipo`, `Nombre`, `Latitud`, `Longitud`) VALUES
('Centro Comercial', 'Unicentro', 3.374644, -76.539728),
('Restaurante', 'Alitas Factory', 3.369339, -76.537916),
('Restaurante', 'Ventolini', 3.368825, -76.534289),
('Centro Comercial', 'Jardin Plaza', 3.370003, -76.529161),
('Parques', 'El ingenio', 3.372059, -76.542915),
('Parques', 'Campestre', 3.367518, -76.535555);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
