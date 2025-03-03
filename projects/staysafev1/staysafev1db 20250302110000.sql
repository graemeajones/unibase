-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2025 at 11:48 AM
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
-- Database: `staysafev1db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Activities`
--

CREATE TABLE `Activities` (
  `ActivityID` int(11) NOT NULL,
  `ActivityName` varchar(64) NOT NULL,
  `ActivityUserID` int(11) NOT NULL,
  `ActivityDescription` varchar(255) NOT NULL,
  `ActivityFromID` int(11) NOT NULL,
  `ActivityLeave` datetime NOT NULL,
  `ActivityToID` int(11) NOT NULL,
  `ActivityArrive` datetime NOT NULL,
  `ActivityStatusID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Activities`
--

INSERT INTO `Activities` (`ActivityID`, `ActivityName`, `ActivityUserID`, `ActivityDescription`, `ActivityFromID`, `ActivityLeave`, `ActivityToID`, `ActivityArrive`, `ActivityStatusID`) VALUES
(1, 'Walk home', 1, 'Walk from university to Surbiton train station', 10, '2025-03-28 18:30:00', 8, '2025-03-28 18:50:00', 1),
(2, 'Walk home', 1, 'Walk from university to Surbiton train station', 10, '2025-02-14 18:00:00', 8, '2025-02-14 18:20:00', 5),
(3, 'Visiting Amina', 1, 'Dinner at Amina\'s at 7pm', 1, '2025-01-20 18:30:00', 11, '2025-01-20 18:50:00', 5);

-- --------------------------------------------------------

--
-- Table structure for table `Contacts`
--

CREATE TABLE `Contacts` (
  `ContactID` int(11) NOT NULL,
  `ContactUserID` int(11) NOT NULL,
  `ContactContactID` int(11) NOT NULL,
  `ContactLabel` varchar(32) NOT NULL,
  `ContactDatecreated` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Contacts`
--

INSERT INTO `Contacts` (`ContactID`, `ContactUserID`, `ContactContactID`, `ContactLabel`, `ContactDatecreated`) VALUES
(1, 7, 5, 'Colleague', '2024-09-28'),
(2, 2, 15, 'Friend', '2024-05-18'),
(3, 6, 1, 'Partner', '2024-07-27'),
(4, 4, 10, 'Partner', '2024-06-06'),
(5, 10, 4, 'Partner', '2024-09-09'),
(6, 23, 9, 'Friend', '2025-01-20'),
(7, 10, 21, 'Bro!', '2024-09-22'),
(8, 11, 3, 'Friend', '2024-08-27'),
(9, 18, 17, 'Partner', '2024-10-11'),
(10, 4, 21, 'Friend', '2024-06-19'),
(11, 5, 7, 'Family', '2024-06-25'),
(12, 16, 10, 'Friend', '2024-12-07'),
(13, 20, 1, 'Best mate', '2025-01-01'),
(14, 20, 6, 'Work colleague', '2025-01-08'),
(15, 6, 12, 'School mate', '2024-08-02'),
(16, 21, 4, 'Friend', '2025-01-27'),
(17, 12, 6, 'Friend', '2024-10-24'),
(18, 22, 3, 'Colleague', '2024-11-24'),
(19, 10, 16, 'Bestie!', '2024-09-15'),
(20, 13, 8, 'Friend', '2024-10-04'),
(21, 15, 9, 'Soul mate!', '2024-11-12'),
(22, 21, 10, 'Friend', '2025-02-02'),
(23, 14, 12, 'Mate', '2024-07-08'),
(24, 19, 17, 'Friend', '2024-12-20'),
(25, 9, 2, 'Partner', '2024-08-15'),
(26, 19, 18, 'Mate', '2024-12-26'),
(27, 12, 14, 'Band', '2024-11-05'),
(28, 1, 6, 'Friend', '2024-04-22'),
(29, 17, 18, 'Partner', '2024-07-14'),
(30, 17, 19, 'Friend', '2024-07-20'),
(31, 22, 11, 'Friend', '2024-12-01'),
(32, 9, 15, 'Partner in crime!', '2024-08-21'),
(33, 2, 9, 'Partner', '2024-05-11'),
(34, 11, 22, 'Friend', '2024-09-03'),
(35, 15, 23, 'Friend', '2024-11-18'),
(36, 1, 12, 'Partner', '2024-04-29'),
(37, 18, 19, 'Friend', '2024-10-17'),
(38, 3, 11, 'Friend', '2024-05-24'),
(39, 1, 20, 'Bestie!', '2024-05-05'),
(40, 12, 20, 'Friend', '2024-10-30'),
(41, 8, 13, 'Friend', '2024-07-01'),
(42, 23, 2, 'Colleague', '2025-01-14'),
(43, 16, 21, 'Friend', '2024-12-13'),
(44, 6, 20, 'Colleague', '2024-08-08'),
(45, 3, 22, 'Friend', '2024-05-30'),
(46, 4, 16, 'Colleague', '2024-06-12');

-- --------------------------------------------------------

--
-- Table structure for table `Locations`
--

CREATE TABLE `Locations` (
  `LocationID` int(11) NOT NULL,
  `LocationName` varchar(128) NOT NULL,
  `LocationDescription` varchar(255) NOT NULL,
  `LocationAddress` varchar(512) NOT NULL,
  `LocationPostcode` varchar(16) DEFAULT NULL,
  `LocationLatitude` float NOT NULL,
  `LocationLongitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Locations`
--

INSERT INTO `Locations` (`LocationID`, `LocationName`, `LocationDescription`, `LocationAddress`, `LocationPostcode`, `LocationLatitude`, `LocationLongitude`) VALUES
(1, 'Berrylands Station', 'Berrylands, South Western Railway', 'Chiltern Drive, Surbiton', 'KT5 8LS', 51.3988, -0.2803),
(2, 'Chessington North Station', 'Chessington North, South Western Railway', 'Bridge Street, Chessington', 'KT9 2RT', 51.3642, -0.3005),
(3, 'Chessington South Station', 'Chessington South, South Western Railway', 'Garrison Lane, Chessington', 'KT9 2JR', 51.3569, -0.30816),
(4, 'Kingston Station', 'Kingston, South Western Railway', 'Wood Street, Kingston', 'KT1 1UJ', 51.4129, -0.3019),
(5, 'Malden Manor Station', 'Malden Manor, South Western Railway', 'Manor Drive North, Malden Manor', 'KT3 5PN', 51.3847, -0.2618),
(6, 'New Malden Station', 'New Malden, South Western Railway', 'Coombe Road, New Malden, Greater London', 'KT3 4PX', 51.4039, -0.25594),
(7, 'Norbiton Station', 'Norbiton, South Western Railway', 'Coombe Road West Norbiton Greater London', 'KT2 7AZ', 51.4124, -0.2838),
(8, 'Surbiton Station', 'Surbiton, South Western Railway', 'Victoria Road, Surbiton', 'KT6 4PE', 51.3926, -0.3044),
(9, 'Tolworth Station', 'Tolworth, South Western Railway', 'Kingston Road, Tolworth, Greater London', 'KT5 9NX', 51.3771, -0.2793),
(10, 'Work', 'Kingston University, Department of Computer Science and Mathematics', '55-59, Penrhyn Road, Kingston upon Thames', 'KT1 2EE', 51.4034, -0.303481),
(11, 'Amina\'s', 'Amina\'s house', '47 Green Lane\r\nNew Malden', 'KT3 5BX', 51.3979, -0.270778);

-- --------------------------------------------------------

--
-- Table structure for table `Positions`
--

CREATE TABLE `Positions` (
  `PositionID` int(11) NOT NULL,
  `PositionActivityID` int(11) NOT NULL,
  `PositionLatitude` float NOT NULL,
  `PositionLongitude` float NOT NULL,
  `PositionTimestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Positions`
--

INSERT INTO `Positions` (`PositionID`, `PositionActivityID`, `PositionLatitude`, `PositionLongitude`, `PositionTimestamp`) VALUES
(1, 2, 51.4028, -0.30438, 1739556000),
(2, 2, 51.4025, -0.3044, 1739556038),
(3, 2, 51.4022, -0.30438, 1739556076),
(4, 2, 51.4019, -0.30444, 1739556114),
(5, 2, 51.4016, -0.30424, 1739556152),
(6, 2, 51.4014, -0.30404, 1739556190),
(7, 2, 51.4012, -0.30394, 1739556228),
(8, 2, 51.4009, -0.30375, 1739556266),
(9, 2, 51.4007, -0.30432, 1739556304),
(10, 2, 51.4003, -0.30461, 1739556342),
(11, 2, 51.3998, -0.30483, 1739556380),
(12, 2, 51.3993, -0.30478, 1739556418),
(13, 2, 51.3988, -0.30459, 1739556456),
(14, 2, 51.3985, -0.30427, 1739556494),
(15, 2, 51.3983, -0.30401, 1739556532),
(16, 2, 51.3983, -0.30392, 1739556570),
(17, 2, 51.3981, -0.30375, 1739556608),
(18, 2, 51.3977, -0.3038, 1739556646),
(19, 2, 51.3973, -0.30383, 1739556684),
(20, 2, 51.3968, -0.30389, 1739556722),
(21, 2, 51.3965, -0.30393, 1739556760),
(22, 2, 51.396, -0.30401, 1739556798),
(23, 2, 51.3956, -0.30404, 1739556836),
(24, 2, 51.3951, -0.30412, 1739556874),
(25, 2, 51.3946, -0.30417, 1739556912),
(26, 2, 51.3943, -0.30421, 1739556950),
(27, 2, 51.3939, -0.30425, 1739556988),
(28, 2, 51.3936, -0.3043, 1739557026),
(29, 2, 51.3933, -0.30427, 1739557064),
(30, 2, 51.3932, -0.30415, 1739557102),
(31, 2, 51.393, -0.30434, 1739557140),
(32, 2, 51.3927, -0.30423, 1739557178),
(33, 3, 51.3989, -0.28072, 1737397800),
(34, 3, 51.399, -0.28012, 1737397838),
(35, 3, 51.3987, -0.28003, 1737397876),
(36, 3, 51.3983, -0.28018, 1737397914),
(37, 3, 51.3978, -0.28033, 1737397952),
(38, 3, 51.3976, -0.2793, 1737397990),
(39, 3, 51.3975, -0.2784, 1737398028),
(40, 3, 51.3971, -0.27748, 1737398066),
(41, 3, 51.3971, -0.27658, 1737398104),
(42, 3, 51.3974, -0.27558, 1737398142),
(43, 3, 51.3978, -0.27519, 1737398180),
(44, 3, 51.3984, -0.27457, 1737398218),
(45, 3, 51.3988, -0.27412, 1737398256),
(46, 3, 51.3991, -0.27337, 1737398294),
(47, 3, 51.3986, -0.27309, 1737398332),
(48, 3, 51.3981, -0.27283, 1737398370),
(49, 3, 51.3977, -0.27266, 1737398408),
(50, 3, 51.3977, -0.27202, 1737398446);

-- --------------------------------------------------------

--
-- Table structure for table `Status`
--

CREATE TABLE `Status` (
  `StatusID` int(11) NOT NULL,
  `StatusName` varchar(32) NOT NULL,
  `StatusOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Status`
--

INSERT INTO `Status` (`StatusID`, `StatusName`, `StatusOrder`) VALUES
(1, 'Planned', 1),
(2, 'Started', 2),
(3, 'Paused', 3),
(4, 'Cancelled', 4),
(5, 'Completed', 5);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `UserFirstname` varchar(32) NOT NULL,
  `UserLastname` varchar(32) NOT NULL,
  `UserPhone` varchar(18) NOT NULL,
  `UserUsername` varchar(32) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  `UserLatitude` float NOT NULL,
  `UserLongitude` float NOT NULL,
  `UserTimestamp` bigint(20) NOT NULL,
  `UserImageURL` varchar(255) NOT NULL DEFAULT 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `UserFirstname`, `UserLastname`, `UserPhone`, `UserUsername`, `UserPassword`, `UserLatitude`, `UserLongitude`, `UserTimestamp`, `UserImageURL`) VALUES
(1, 'Aisha', 'Ahmed', '+44 7911 567890', 'aishaahmed', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(2, 'John', 'Williams', '+44 7911 123456', 'williams99', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(3, 'Zara', 'Patel', '+44 7911 876543', 'zarap1981', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(4, 'Mia', 'Brown', '+44 7911 234567', 'afternoonbrownies', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(5, 'Sarah', 'Lee', '+44 7911 345678', 'sara5678', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(6, 'David', 'Harris', '+44 7911 567987', 'davidHarris', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(7, 'Olivia', 'Martinez', '+44 7911 678012', 'MartinezOlivia2', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(8, 'Sofia', 'Garcia', '+44 7911 432109', 'sofia.garcia', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(9, 'Kai', 'Tanaka', '+44 7911 654321', 'tanakaK2020', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(10, 'Daniel', 'Thompson', '+44 7911 765432', 'dantheman123', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(11, 'Isabella', 'Robinson', '+44 7911 876210', 'isabella.a.robinson', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(12, 'Jamal', 'Ali', '+44 7911 987654', 'AliBama888', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(13, 'Mia', 'Lewis', '+44 7911 246810', 'isleoflewis', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(14, 'Ethan', 'Hall', '+44 7911 135790', 'ethanjeremyhall', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(15, 'Ava', 'Young', '+44 7911 369852', 'youngAtHeart', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(16, 'Liam', 'Evans', '+44 7911 888444', 'liam9999', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(17, 'Priya', 'Sharma', '+44 7911 777333', 'PriyaSharma', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(18, 'Noah', 'Hughes', '+44 7911 222555', 'NoahAndTheArk', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(19, 'Fatima', 'Khan', '+44 7911 666999', 'FatimaKhan1980', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(20, 'Oliver', 'Wright', '+44 7911 333222', 'TheWrightBrother', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(21, 'Pamela', 'Wilson', '+44 7911 123456', 'pamwilson', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(22, 'James', 'Yuen', '+44 7911 987654', 'LostInSpace', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg'),
(23, 'Graeme', 'Jones', '0208 417 2669', 'GraemeAJones', '', 0, 0, 0, 'https://static.generated.photos/vue-static/face-generator/landing/wall/13.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Activities`
--
ALTER TABLE `Activities`
  ADD PRIMARY KEY (`ActivityID`);

--
-- Indexes for table `Contacts`
--
ALTER TABLE `Contacts`
  ADD PRIMARY KEY (`ContactID`);

--
-- Indexes for table `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`LocationID`);

--
-- Indexes for table `Positions`
--
ALTER TABLE `Positions`
  ADD PRIMARY KEY (`PositionID`);

--
-- Indexes for table `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`StatusID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Activities`
--
ALTER TABLE `Activities`
  MODIFY `ActivityID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Contacts`
--
ALTER TABLE `Contacts`
  MODIFY `ContactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `LocationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Positions`
--
ALTER TABLE `Positions`
  MODIFY `PositionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `Status`
--
ALTER TABLE `Status`
  MODIFY `StatusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
