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

-- ----------------------------
-- Table structure for `summoners`
-- ----------------------------
DROP TABLE IF EXISTS `summoner`;
CREATE TABLE `summoner` (
  `summonerid` int(8) NOT NULL AUTO_INCREMENT,
  `chatid` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `realname` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nickname` varchar(16) DEFAULT NULL,
  `rank` varchar(16) DEFAULT NULL,
  `winrate` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `level` int(16) DEFAULT NULL,
  `stage` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`summonerid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

create user IF NOT EXISTS 'admin' IDENTIFIED BY '123';
grant all privileges on summoners.* to admin;

-- ----------------------------
-- Records of summoners
-- ----------------------------
/*
INSERT INTO `summoner` VALUES ('10', '5513996597134@c.us', 'Riquie', null, null, null, null, null, '2-cadastrar');
*/