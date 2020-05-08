-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2020 at 07:30 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webservice`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_usuarios`
--

CREATE TABLE `t_usuarios` (
  `id` int(11) NOT NULL,
  `nombre` tinytext NOT NULL COMMENT 'Short Name',
  `edad` tinyint(4) NOT NULL COMMENT 'Min 18 & Max 99',
  `genero` tinytext DEFAULT NULL COMMENT 'Masculino/Femenino'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_usuarios`
--

INSERT INTO `t_usuarios` (`id`, `nombre`, `edad`, `genero`) VALUES
(346, 'Emmanuel', 28, 'Masculino'),
(347, 'Alejandro', 31, 'Masculino'),
(348, 'Jesus', 22, 'Masculino'),
(349, 'Karen', 24, 'Femenino');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_usuarios`
--
ALTER TABLE `t_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_usuarios`
--
ALTER TABLE `t_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=350;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
