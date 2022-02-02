/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80017
Source Host           : localhost:3306
Source Database       : chatlol-api

Target Server Type    : MYSQL
Target Server Version : 80017
File Encoding         : 65001

Date: 2022-02-02 09:35:33
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `smurfs`
-- ----------------------------
DROP TABLE IF EXISTS `smurfs`;
CREATE TABLE `smurfs` (
  `summonerid` int(32) NOT NULL,
  `chatid` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nickname` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `level` int(32) DEFAULT NULL,
  `elosoloq` varchar(0) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `winrate` varchar(0) DEFAULT NULL,
  PRIMARY KEY (`summonerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of smurfs
-- ----------------------------

-- ----------------------------
-- Table structure for `summoner`
-- ----------------------------
DROP TABLE IF EXISTS `summoner`;
CREATE TABLE `summoner` (
  `summonerid` int(8) NOT NULL AUTO_INCREMENT,
  `chatid` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `realname` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nickname` varchar(16) DEFAULT NULL,
  `elosoloq` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `winrate` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `level` int(16) DEFAULT NULL,
  `stage` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`summonerid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of summoner
-- ----------------------------
INSERT INTO `summoner` VALUES ('14', '5513996597134@c.us', 'Riquie', 'Riquie', 'GOLDII', '38.10%', null, '250', 'comandos');
