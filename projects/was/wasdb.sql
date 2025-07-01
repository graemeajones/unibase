-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2025 at 01:46 PM
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
(1, 'CI4105', 'Programming 1', 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg', NULL, 4, 0, 0, 0),
(2, 'CI4250', 'Computing Fundamentals', 'https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg', NULL, 4, 0, 0, 0),
(3, 'CI4305', 'Requirements Analysis and Design', 'https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg', NULL, 4, 0, 0, 0),
(4, 'CI4450', 'Professional Environments 1', 'https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg', NULL, 4, 0, 0, 0),
(5, 'CI5105', 'Programming 2', 'https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg', NULL, 5, 0, 0, 0),
(6, 'CI5250', 'Computing Systems', 'https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg', NULL, 5, 0, 0, 0),
(7, 'CI5320', 'Database-Driven Application Development', 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg', NULL, 5, 0, 0, 0),
(8, 'CI5330', 'User Centred Design', 'https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg', NULL, 5, 0, 0, 0),
(9, 'CI5210', 'Networking Concepts', 'https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg', NULL, 5, 0, 0, 0),
(10, 'CI5450', 'Professional Environments 2', 'https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg', NULL, 5, 0, 0, 0),
(11, 'CI6100', 'Programming 3', 'https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg', NULL, 6, 0, 0, 0),
(12, 'CI6600', 'Individual Project', 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg', NULL, 6, 0, 0, 0),
(13, 'CI6110', 'React Programming', 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg', NULL, 6, 0, 0, 0),
(14, 'CI6130', 'React Native', 'https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg', NULL, 6, 0, 0, 0);

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
-- Indexes for table `Modules`
--
ALTER TABLE `Modules`
  ADD PRIMARY KEY (`ModuleID`),
  ADD KEY `ModuleLeader FK` (`ModuleLeaderID`);

--
-- Indexes for table `Usertypes`
--
ALTER TABLE `Usertypes`
  ADD PRIMARY KEY (`UsertypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Modules`
--
ALTER TABLE `Modules`
  MODIFY `ModuleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
