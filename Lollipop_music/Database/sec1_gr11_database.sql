-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: lollipop
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `login_information`
--

DROP TABLE IF EXISTS `login_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_information` (
  `Uid` varchar(3) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pword` varchar(45) NOT NULL,
  PRIMARY KEY (`Uid`),
  KEY `FK_email` (`email`),
  CONSTRAINT `FK_email` FOREIGN KEY (`email`) REFERENCES `user_information` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_information`
--

LOCK TABLES `login_information` WRITE;
/*!40000 ALTER TABLE `login_information` DISABLE KEYS */;
INSERT INTO `login_information` VALUES ('001','waarisss_Mmy@hotmail.com','M2345back'),('002','mhoomindd.mindmint@gmail.com','mindLovesmeow03'),('003','Senyai_bark@hotmail.com','loveDogs88'),('004','omewwhhyy@gmail.com','yyis983J'),('005','jackiemamba@gmail.com','56789fish'),('114','waris.dam@student.mahidol.ac.th','27102544'),('119','kittapat.don@student.mahdiol.ac.th','mukyy1234'),('120','chalumphu.atj@student.mahildol.ac.th','mhoomind'),('122','pattanan.kor@student.mahidol.ac.th','Taisenyai12');
/*!40000 ALTER TABLE `login_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `music`
--

DROP TABLE IF EXISTS `music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music` (
  `id` int NOT NULL,
  `song` varchar(45) NOT NULL,
  `artist` varchar(45) NOT NULL,
  `released` year NOT NULL,
  `album` varchar(45) NOT NULL,
  `pages` varchar(20) NOT NULL,
  `imgurl` varchar(250) NOT NULL,
  `sound` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music`
--

LOCK TABLES `music` WRITE;
/*!40000 ALTER TABLE `music` DISABLE KEYS */;
INSERT INTO `music` VALUES (1,'Bite me','Avril Lavigne',2022,'LOVE SUX','ROCK','http://localhost:8000/Rock/birt%20me.jpeg','http://localhost:8000/Rock/Avril-Lavigne-Bite-Me-acoustic.mp3'),(2,'Spring Day','BTS',2017,'YOU NEVER WALK ALONE','K-POP','http://localhost:8000/Spring%20Day.jpg','http://localhost:8000/Spring%20Day.mp3'),(3,'Runaway','EXO',2021,'DON\'T FIGHT THE FEELING','K-POP','http://localhost:8000/Runaway.jpg','http://localhost:8000/Runaway.mp3'),(4,'Deja vu','OLIVIA RODRIGO',2021,'SOUR','BROWSE','http://localhost:8000/Deja%20vu.jpg','http://localhost:8000/Deja%20vu.mp3'),(5,'Getting Over You','LAUV',2018,'I MET YOU WHEN I WAS 18','POP','http://localhost:8000/Getting%20Over%20You.jpg','http://localhost:8000/Getting%20Over%20You.mp3'),(6,'Level of Concern','TWENTY ONE PILOTS',2020,'Level of Concern','ROCK','http://localhost:8000/Level%20of%20Concern.jpg','http://localhost:8000/Level%20of%20Concern.mp3'),(7,'All I Wanna Do','JAY PARK',2016,'EVERYTHING YOU WANTED','K-POP','http://localhost:8000/All%20I%20Wanna%20Do.jpg','http://localhost:8000/All%20I%20Wanna%20Do.mp3'),(8,'Light Switch','CHARLIE PUTH',2022,'LIGHT SWITCH','POP','http://localhost:8000/Light%20Switch.jpg','http://localhost:8000/Light%20Switch.mp3'),(9,'Lucid dream','AESPA',2021,'SAVAGE','K-POP','http://localhost:8000/Lucid%20Dream.jpg','http://localhost:8000/Lucid%20Dream.mp3'),(10,'MS.winter','IMHAVINGABADDAY.',2020,'MS. WINTER','INDIE','http://localhost:8000/Ms.winter.jpg','http://localhost:8000/Ms.winter.mp3'),(11,'Fetal attraction','Reality Club',2017,'Never Get Better','BROWSE','http://localhost:8000/Fatal%20Attraction.jpg','http://localhost:8000/Fatal%20Attraction.mp3'),(12,'Wildfires','Sault',2020,'Untitled (Black Is)','INDIE','http://localhost:8000/Wildfires.jpg','http://localhost:8000/Wildfires.mp3'),(13,'Please Mr Postman','CARPENTERS',1975,'HORIZON','POP','http://localhost:8000/Please%20Mr%20Postman.jpg','http://localhost:8000/Please%20Mr%20Postman.mp3'),(14,'Here come the sun','The Beatles',1969,'Abbey Road','ROCK','http://localhost:8000/Here%20Comes%20The%20Sun.jpg','http://localhost:8000/Here%20Comes%20The%20Sun.mp3'),(15,'SUNRISE','MICHELLE',2021,'SUNRISE','INDIE','http://localhost:8000/SUNRISE.jpg','http://localhost:8000/SUNRISE.mp3'),(16,'Girls','The 1975',2013,'The 1975','INDIE','http://localhost:8000/Girls.jpg','http://localhost:8000/Girls.mp3'),(17,'Califonication','RED HOT CHILI PEPPERS',1999,'CALIFORNICATION','BROWSE','http://localhost:8000/Califonication.jpg','http://localhost:8000/Califonication.mp3'),(18,'Welcome to the Family','Avenged Sevenfold',2010,'Nightmare','ROCK','http://localhost:8000/Welcome%20to%20the%20Family.jpg','http://localhost:8000/Welcome%20to%20the%20Family.mp3'),(19,'Up to me','LANY',2021,'GG BB XX','BROWSE','http://localhost:8000/Up%20to%20me.jpg','http://localhost:8000/Up%20to%20me.mp3'),(20,'How to get the girl','Taylor Swift',2014,'1989','POP','http://localhost:8000/How%20you%20get%20the%20girl.jpg','http://localhost:8000/How%20you%20get%20the%20girl.mp3'),(21,'Home.(ดูดฝุ่น)','Morvasu x Violette Wautier',2021,'Morvasu x Violette Wautier','Listen now','http://localhost:8000/home.jpg','http://localhost:8000/home.mp3');
/*!40000 ALTER TABLE `music` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_information`
--

DROP TABLE IF EXISTS `user_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_information` (
  `email` varchar(45) NOT NULL,
  `Uid` varchar(3) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `pword` varchar(45) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `roles` varchar(10) NOT NULL,
  `flag` int NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_information`
--

LOCK TABLES `user_information` WRITE;
/*!40000 ALTER TABLE `user_information` DISABLE KEYS */;
INSERT INTO `user_information` VALUES ('chalumphu.atj@student.mahildol.ac.th','120','Chalumphu Atjarit','mhoomind','0156934782','Admin',1),('jackiemamba@gmail.com','004','Phasboo Jacky','56789fish','0853849405','User',0),('kittapat.don@student.mahdiol.ac.th','119','Kittipat Donsom','mukyy1234','0169359809','Admin',1),('mhoomindd.mindmint@gmail.com','002','Mhoomeow Mind','mindLovesmeow03','0874940437','User',0),('omewwhhyy@gmail.com','003','Dukdik Omey','yyis983J','0645462716','User',0),('pattanan.kor@student.mahidol.ac.th','122','Pattanan Korkiattrakool','Taisenyai12','0127857121','Admin',1),('Senyai_bark@hotmail.com','005','Tai Senyai','loveDogs88','0982757122','User',0),('Test@hotmail.com','999','User Test','Test','0123456789','User',0),('waarisss_Mmy@hotmail.com','001','Waris MandM','M2345back','0899234514','User',0),('waris.dam@student.mahidol.ac.th','114','Waris Damkham','27102544','0125768903','Admin',1);
/*!40000 ALTER TABLE `user_information` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-23  1:24:12
