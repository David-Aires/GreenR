-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 26 mai 2019 à 16:50
-- Version du serveur :  8.0.16
-- Version de PHP :  7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_POSITION=@@CHARACTER_SET_POSITION */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_GreenR`
--
CREATE DATABASE IF NOT EXISTS `db_GreenR` DEFAULT CHARACTER SET utf8mb4;
USE `db_GreenR`;

-- --------------------------------------------------------

--
-- Structure de la table `POSITION`
--

CREATE TABLE `POSITION` (
  `ID_POS` char(5) NOT NULL,
  `LAT` decimal(9,2) NOT NULL,
  `LON` decimal(9,2) NOT NULL,
  `ALT` decimal(9,2) NOT NULL,
  PRIMARY KEY (`ID_POS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `CROSS_CENTER`
--

CREATE TABLE `CROSS_CENTER` (
  `SERIAL_NUM` int,
  `ID_POS` char(5) NOT NULL,
  `ID_AIR` char(5) NOT NULL,
  `DATE_TIME` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Structure de la table `AIR_STAT`
--

CREATE TABLE `AIR_STAT` (
  `ID_AIR` char(5) NOT NULL,
  `TEMPERATURE` decimal(2,2) NOT NULL,
  `HUMIDITY` decimal(2,2) NOT NULL,
  `CO2` decimal(9,2) NOT NULL,
  PRIMARY KEY (`ID_AIR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Structure de la table `AIR_BOX`
--

CREATE TABLE `AIR_BOX` (
  `SERIAL_NUM` int NOT NULL,
  `LOCALITE` varchar(20) DEFAULT NULL,
  `FIXED` boolean NOT NULL,
  `STATE` ENUM ('broken','active','standby') NOT NULL,
  `DATE_ACTIVE` date NOT NULL,
  PRIMARY KEY (`SERIAL_NUM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Index pour la table `CROSS_CENTER`
--
ALTER TABLE `CROSS_CENTER`
  ADD KEY `SERIAL_NUM` (`SERIAL_NUM`),
  ADD KEY `ID_POS` (`ID_POS`),
  ADD KEY `ID_AIR` (`ID_AIR`);


 


--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `CROSS_CENTER`
--
ALTER TABLE `CROSS_CENTER`
  ADD CONSTRAINT `CROSS_CENTER_ibfk_1` FOREIGN KEY (`ID_POS`) REFERENCES `POSITION` (`ID_POS`) ON DELETE CASCADE,
  ADD CONSTRAINT `CROSS_CENTER_ibfk_2` FOREIGN KEY (`ID_AIR`) REFERENCES `AIR_STAT` (`ID_AIR`) ON DELETE CASCADE,
  ADD CONSTRAINT `CROSS_CENTER_ibfk_3` FOREIGN KEY (`SERIAL_NUM`) REFERENCES `AIR_BOX` (`SERIAL_NUM`) ON DELETE SET NULL;
COMMIT;




/*!40101 SET CHARACTER_SET_POSITION=@OLD_CHARACTER_SET_POSITION */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
