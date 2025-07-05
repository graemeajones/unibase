-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2025 at 08:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wasdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Duties`
--

CREATE TABLE `Duties` (
  `DutyID` int(11) NOT NULL,
  `DutyName` varchar(64) NOT NULL,
  `DutyEffort` int(11) NOT NULL DEFAULT 0,
  `DutyInstances` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Duties`
--

INSERT INTO `Duties` (`DutyID`, `DutyName`, `DutyEffort`, `DutyInstances`) VALUES
(1, 'Course Leader (Undergraduate)', 320, 5),
(2, 'Course Leader (Postgraduate)', 160, 4);

-- --------------------------------------------------------

--
-- Table structure for table `Modules`
--

CREATE TABLE `Modules` (
  `ModuleID` int(11) NOT NULL,
  `ModuleCode` varchar(32) NOT NULL,
  `ModuleName` varchar(128) NOT NULL,
  `ModuleImageURL` varchar(128) NOT NULL,
  `ModuleLeaderID` int(11) DEFAULT NULL,
  `ModuleLevel` int(11) NOT NULL DEFAULT 0,
  `ModuleCredits` int(11) NOT NULL DEFAULT 0,
  `ModuleSize` int(11) NOT NULL DEFAULT 0,
  `ModuleEffort` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Modules`
--

INSERT INTO `Modules` (`ModuleID`, `ModuleCode`, `ModuleName`, `ModuleImageURL`, `ModuleLeaderID`, `ModuleLevel`, `ModuleCredits`, `ModuleSize`, `ModuleEffort`) VALUES
(1, 'CI4105', 'Programming 1', 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg', 34, 4, 30, 400, 620),
(2, 'CI4250', 'Computing Fundamentals', 'https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg', 20, 4, 30, 400, 620),
(3, 'CI4305', 'Requirements Analysis and Design', 'https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg', 28, 4, 30, 400, 620),
(4, 'CI4450', 'Professional Environments 1', 'https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg', 16, 4, 30, 400, 620),
(5, 'CI5105', 'Programming 2', 'https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg', 14, 5, 30, 300, 476),
(6, 'CI5250', 'Computing Systems', 'https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg', NULL, 5, 30, 300, 476),
(7, 'CI5320', 'Database-Driven Application Development', 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg', 4, 5, 30, 300, 476),
(8, 'CI5330', 'User Centred Design', 'https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg', 21, 5, 30, 100, 188),
(9, 'CI5210', 'Networking Concepts', 'https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg', 18, 5, 30, 100, 188),
(10, 'CI5450', 'Professional Environments 2', 'https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg', NULL, 5, 30, 300, 476),
(11, 'CI6100', 'Programming 3', 'https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg', 1, 6, 30, 200, 332),
(12, 'CI6600', 'Individual Project', 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg', 34, 6, 30, 250, 426),
(13, 'CI6110', 'React Programming', 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg', 45, 6, 30, 150, 282),
(14, 'CI6130', 'React Native', 'https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg', 8, 6, 30, 100, 188);

-- --------------------------------------------------------

--
-- Table structure for table `Positions`
--

CREATE TABLE `Positions` (
  `PositionID` int(11) NOT NULL,
  `PositionName` varchar(32) NOT NULL,
  `PositionOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Positions`
--

INSERT INTO `Positions` (`PositionID`, `PositionName`, `PositionOrder`) VALUES
(1, 'Professor', 1),
(2, 'Associate Professor', 2),
(3, 'Senior Lecturer', 3),
(4, 'Lecturer', 4);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `UserTitle` varchar(32) NOT NULL,
  `UserFirstname` varchar(128) NOT NULL,
  `UserLastname` varchar(128) NOT NULL,
  `UserEmail` varchar(128) NOT NULL,
  `UserImageURL` varchar(512) DEFAULT '',
  `UserUsertypeID` int(11) NOT NULL,
  `UserPositionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `UserTitle`, `UserFirstname`, `UserLastname`, `UserEmail`, `UserImageURL`, `UserUsertypeID`, `UserPositionID`) VALUES
(1, 'Dr', 'Ahmed', 'Shihab', 'a.shihab@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-3e2ab5c0aa6-draishihab.jpg?h=0eda5579&itok=D1_psqrI', 1, 3),
(2, 'Dr', 'Deepak', 'GC', 'd.gc@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-a14aaf5f803-drdeepakgc.jpg?h=a0653b6f&itok=kYqcVLuS', 1, 3),
(3, 'Dr', 'Darrel', 'Greenhill', 'd.greenhill@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/bynder/webimage-Staff-Profile_Dr-Darrel-Greenhill.png?h=bc6f9788&itok=KzSfb3_j', 1, 2),
(4, 'Dr', 'Beryl', 'Jones', 'beryl.jones@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-a5420096a9c-drberyljones.jpg?h=75f723da&itok=eAeaN_4K', 1, 2),
(5, 'Dr', 'Andreas', 'Hoppe', 'a.hoppe@kingston.ac.uk', '', 1, 3),
(6, 'Dr', 'Ahmed', 'Shihab', 'a.shihab@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-3e2ab5c0aa6-draishihab.jpg?h=0eda5579&itok=D1_psqrI', 1, 3),
(7, 'Dr', 'Hu', 'Yuan', 'h.yuan@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-d6ff54ef999-drhuyuan.jpg?h=dbd213d8&itok=I6QWfveh', 1, 3),
(8, 'Dr', 'Gordon', 'Johnson', 'g.johnson@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/bynder/webimage-Staff-Profile_Dr-Gordon-Johnson.png?h=19d380fc&itok=0v_ZxWT7', 1, 4),
(9, 'Dr', 'Gordon', 'Hunter', 'g.hunter@kingston.ac.uk', '', 1, 2),
(10, 'Dr', 'Farzana', 'Rahman', 'farzana@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-c548ae4e97f-drfarzanarahman.jpg?h=74b59c52&itok=JL6F8GmT', 1, 3),
(11, 'Dr', 'Eckhard', 'Pfluegel', 'e.pfluegel@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-60e9e014839-dreckhardpfluegel.jpg?h=71976bb4&itok=K8EtHFdW', 1, 2),
(12, 'Dr', 'Kamaran', 'Fathulla', 'k.fathulla@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/bynder/webimage-Staff-Profile_Dr-Kamaran-Fathulla.jpg?h=f2907ab6&itok=VrSZLpF0', 1, 2),
(13, 'Dr', 'Jarek', 'Francik', 'jarek@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-6f139a6df13-drjarekfrancik.jpg?h=c673cd1c&itok=-pTXAbZ2', 1, 3),
(14, 'Dr', 'James', 'Denholm-Price', 'j.denholm-price@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-de7a753-drjamesdenholm-price.png?h=5f0c8d78&itok=cHklReV8', 1, 2),
(15, 'Dr', 'Jad', 'Abbass', 'j.abbass@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-c6102565f14-drjadabbass.jpg?h=d1cb525d&itok=JpRxNS_F', 1, 3),
(16, 'Dr', 'Islam', 'Choudhury', 'i.choudhury@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/bynder/webimage-Staff-Profile_Dr-Islam-Choudhury.png?h=31b57b9f&itok=nBEudAMm', 1, 2),
(17, 'Dr', 'Christopher', 'Wyman', 'm.wyman@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-814a348cf4d-drmatthewchristopherwyman.jpg?h=e189b240&itok=m2xBd6Ot', 1, 3),
(18, 'Dr', 'Martin', 'Tunnicliffe', 'm.j.tunnicliffe@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-0080c9b-drmartintunnicliffe.jpg?h=f40fd387&itok=qmY0RwFh', 1, 3),
(19, 'Dr', 'Mark', 'Jones', 'mark.jones@kingston.ac.uk', '', 1, 3),
(20, 'Dr', 'Arslan', 'Usman', 'm.usman@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-219d1888a6e-drmuhammadarslanusman.jpeg?h=ada05aa9&itok=krZ7xyXk', 1, 3),
(21, 'Dr', 'Jay', 'Kiruthika', 'j.kiruthika@kingston.ac.uk', '', 1, 3),
(22, 'Dr', 'Obinna', 'Omego', 'a.omego@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-6c8401178be-drobinnaomego.jpg?h=a7d2deb9&itok=TpPQ77jg', 1, 4),
(23, 'Dr', 'Neda', 'Ahmadi', 'n.ahmadi@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-9a2cd3450ea-drnedaahmadi.jpeg?h=3ee33623&itok=Ar5Qn2oI', 1, 4),
(24, 'Dr', 'Nasrollah', 'Saebi', 'n.saebi@kingston.ac.uk', '', 1, 3),
(25, 'Dr', 'Rehan', 'Usman', 'r.usman@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-71671b505b2-drmuhammadrehanusman.jpg?h=f6b682b9&itok=A_-hqXoy', 1, 3),
(26, 'Dr', 'Michal', 'Bosy', 'm.bosy@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-dee15646b5f-drmichalbosy.jpg?h=efd69401&itok=s3qBJVPN', 1, 4),
(27, 'Dr', 'Xing', 'Liang', 'x.liang@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-b7b4f1127fa-drxingliang.jpg?h=ad279040&itok=S6rogGEC', 1, 3),
(28, 'Dr', 'Tariq', 'Rahim', 't.rahim@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-06214033e6c-drtariqrahim.jpg?h=1e66e246&itok=K2pQfS7d', 1, 4),
(29, 'Dr', 'Rosie', 'McNiece', 'r.mcniece@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-7eaee49be56-drrosiemcniece.jpg?h=cf735877&itok=u8Z6rgA4', 1, 3),
(30, 'Dr', 'Razi', 'Arshad', 'r.arshad@kingston.ac.uk', '', 1, 4),
(31, 'Dr', 'Pushpa', 'Kumarapeli', 'p.kumarapeli@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-35ceb7e833a-drpushpakumarapeli.jpg?h=fd920bc7&itok=_JbaIDhD', 1, 3),
(32, 'Mr', 'Sunil', 'Chhatralia', 's.chhatralia@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-e9283686be3-mrsunilchhatralia.jpg?h=8abcec71&itok=OmRIrdyD', 1, 3),
(33, 'Mr', 'Richard', 'Cunningham', 'r.cunningham@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-755df07a1c7-mrrichardcunningham.jpg?h=c673cd1c&itok=T7MlWAsv', 1, 4),
(34, 'Mr', 'Paul', 'Neve', 'paul@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/bynder/webimage-Staff-Profile_Paul-Neve.png?h=56bf1666&itok=wf4WDakq', 1, 3),
(35, 'Mr', 'Alex', 'Clarke', 'ku72737@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-3c55743610f-mralexclarke.JPG?h=08b866d1&itok=5H072Mu5', 1, 4),
(36, 'Dr', 'Yannis', 'Spyridis', 'y.spyridis@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/bynder/webimage-Staff-Profile_Dr-Yannis-Spyridis.png?h=6e5570eb&itok=a7_-yms3', 1, 4),
(37, 'Professor', 'Dimitrios', 'Makris', 'd.makris@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-4b5d971fea5-drdimitriosmakris.jpg?h=520a578a&itok=lUpLaWmp', 1, 1),
(38, 'Professor', 'David', 'Wertheim', 'd.wertheim@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-35d6a6b9de8-professordavidwertheim.jpg?h=1017c59c&itok=SFWFxvN4', 1, 1),
(39, 'Professor', 'Christos', 'Politis', 'c.politis@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-7671678f03e-professorchristospolitis.jpg?h=b3a72be8&itok=AoRImRhP', 1, 1),
(40, 'Ms', 'Raida', 'Shakiry', 'r.shakiry@kingston.ac.uk', '', 1, 4),
(41, 'Ms', 'Hope', 'Caton', 'h.caton@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/2025-03/Hope%20profile%20for%20staff.jpeg?h=971848df&itok=XOu0xz3M', 1, 4),
(42, 'Professor', 'Nada', 'Philip', 'n.philip@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/2025-04/Nada%20Philip%20-%20photo-4.JPG?h=0973a5db&itok=j8cwVJ6x', 1, 1),
(43, 'Professor', 'Maria', 'Martini', 'm.martini@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-ff21b9a3c15-professormariamartini.jpg?h=520a578a&itok=N31K4560', 1, 1),
(44, 'Professor', 'Jamshid', 'Dehmeshki', 'j.dehmeshki@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-12744a30a49-professorjamshiddehmeshki.jpg?h=c6330919&itok=iRFw9KdE', 1, 1),
(45, 'Professor', 'Graeme', 'Jones', 'g.jones@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-ef7ff325f81-professorgraemejones.jpg?h=b660fe0a&itok=rhtyjotQ', 1, 1),
(46, 'Professor', 'Vasilis', 'Argyriou', 'vasileios.argyriou@kingston.ac.uk', '', 1, 1),
(47, 'Professor', 'Souheil', 'Khaddaj', 's.khaddaj@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/2025-03/profile.jpg?h=46bfd753&itok=Gw_Bwgi0', 1, 1),
(48, 'Professor', 'Sarah', 'Barman', 's.barman@kingston.ac.uk', 'https://www.kingston.ac.uk/sites/default/files/styles/1_1_media_sm/public/migrated-images/kingston-university-3567543827a-professorsarahbarman.jpg?h=a00dfe8c&itok=YKFPbpIr', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Usertypes`
--

CREATE TABLE `Usertypes` (
  `UsertypeID` int(11) NOT NULL,
  `UsertypeName` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Usertypes`
--

INSERT INTO `Usertypes` (`UsertypeID`, `UsertypeName`) VALUES
(1, 'Academic'),
(2, 'Manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Duties`
--
ALTER TABLE `Duties`
  ADD PRIMARY KEY (`DutyID`);

--
-- Indexes for table `Modules`
--
ALTER TABLE `Modules`
  ADD PRIMARY KEY (`ModuleID`),
  ADD KEY `ModuleLeader FK` (`ModuleLeaderID`);

--
-- Indexes for table `Positions`
--
ALTER TABLE `Positions`
  ADD PRIMARY KEY (`PositionID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `Users_Positions_FK` (`UserPositionID`);

--
-- Indexes for table `Usertypes`
--
ALTER TABLE `Usertypes`
  ADD PRIMARY KEY (`UsertypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Duties`
--
ALTER TABLE `Duties`
  MODIFY `DutyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Modules`
--
ALTER TABLE `Modules`
  MODIFY `ModuleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `Positions`
--
ALTER TABLE `Positions`
  MODIFY `PositionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `Usertypes`
--
ALTER TABLE `Usertypes`
  MODIFY `UsertypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Modules`
--
ALTER TABLE `Modules`
  ADD CONSTRAINT `Modules_Users_FK` FOREIGN KEY (`ModuleLeaderID`) REFERENCES `Users` (`UserID`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_Positions_FK` FOREIGN KEY (`UserPositionID`) REFERENCES `Positions` (`PositionID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
