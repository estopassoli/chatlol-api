/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : chatlol-api

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2022-02-01 05:47:06
*/

/* 
mysql -uroot -h127.0.0.1 -p12345 < chatlol-api.sql
mysql -uadmin -h127.0.0.1 -p123 summoners
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--     Database creation     --
-- ----------------------------

DROP DATABASE IF EXISTS `summoners`;
CREATE DATABASE `summoners`;
USE `summoners`;

-- -------------------------------- --
-- Table structure for `summoners`  --
-- -------------------------------- --

DROP TABLE IF EXISTS `summoner`;
CREATE TABLE `summoner` (
  `id` int(30) AUTO_INCREMENT,
  `summonerid` varchar(100) UNIQUE,
  `chatid` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `realname` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nickname` varchar(16) DEFAULT NULL,
  `level` int(16) DEFAULT NULL,
  `stage` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

create user IF NOT EXISTS 'admin' IDENTIFIED BY '123';
grant all privileges on summoners.* to admin;

-- ----------------------------------- --
-- Table structure for `summonerDataSoloQ`  --
-- ----------------------------------- --

DROP TABLE IF EXISTS `summonerDataRANKED_SOLO_5x5`;
CREATE TABLE `summonerDataRANKED_SOLO_5x5` (
  `id` int(30) AUTO_INCREMENT,
  `summonerId` varchar(100) UNIQUE,
  `queueType` varchar(30),
  `tier` varchar(21),
  `rank` varchar(5),
  `leaguePoints` int(4),
  `wins` int(11),
  `losses` int(11),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------- --
-- Table structure for `summonerDataFlex`  --
-- ----------------------------------- --

DROP TABLE IF EXISTS `summonerDataRANKED_FLEX_5x5`;
CREATE TABLE `summonerDataRANKED_FLEX_5x5` (
  `id` int(30) AUTO_INCREMENT,
  `summonerId` varchar(100) UNIQUE,
  `queueType` varchar(30),
  `tier` varchar(21),
  `rank` varchar(5),
  `leaguePoints` int(4),
  `wins` int(11),
  `losses` int(11),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------------- --
-- Table structure for `summonerDataRANKED_TFT_PAIRS`  --
-- ----------------------------------- --

DROP TABLE IF EXISTS `summonerDataRANKED_TFT_PAIRS`;
CREATE TABLE `summonerDataRANKED_TFT_PAIRS` (
  `id` int(30) AUTO_INCREMENT,
  `summonerId` varchar(100) UNIQUE,
  `queueType` varchar(30),
  `tier` varchar(21),
  `rank` varchar(5),
  `leaguePoints` int(4),
  `wins` int(11),
  `losses` int(11),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;