-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 141.94.205.33
-- Generation Time: Jul 08, 2025 at 02:16 PM
-- Server version: 10.11.2-MariaDB-1
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seatdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Attendees`
--

CREATE TABLE `Attendees` (
  `AttendeeID` int(11) NOT NULL,
  `AttendeeUserID` int(11) NOT NULL,
  `AttendeeEventID` int(11) NOT NULL,
  `AttendeeStatusID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Events`
--

CREATE TABLE `Events` (
  `EventID` int(11) NOT NULL,
  `EventName` varchar(128) NOT NULL,
  `EventDescription` varchar(512) NOT NULL,
  `UserDateofbirth` date NOT NULL DEFAULT current_timestamp(),
  `EventDatetime` datetime NOT NULL,
  `EventLocationID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Events`
--

INSERT INTO `Events` (`EventID`, `EventName`, `EventDescription`, `UserDateofbirth`, `EventDatetime`, `EventLocationID`) VALUES
(1, 'Christmas Party 2024', 'This event is a collaboration between the Middle Temple Young Barristers\' Association and the London Young Lawyers Group, promising a fantastic night of networking and fun.\r\n\r\nWhat\'s in store? A delicious standing buffet with a variety of treats, live music to set the mood, and a chocolate fountain for a touch of sweetness. ', '2025-06-10', '2024-12-13 19:30:00', 1),
(2, 'Christmas Party 2025', 'This event is a collaboration between the Middle Temple Young Barristers\' Association and the London Young Lawyers Group, promising a fantastic night of networking and fun.\r\n\r\nWhat\'s in store? A delicious standing buffet with a variety of treats, live music to set the mood, and a chocolate fountain for a touch of sweetness. ', '2025-06-10', '2025-12-12 19:00:00', 1),
(5, 'Test Event', 'Test Desc', '2025-06-18', '2025-06-27 15:56:00', 1),
(7, 'christmas part 2026', 'christmas', '2025-06-20', '2025-06-20 12:17:00', 1),
(8, 'Xmas', 'Xmas test desc', '2025-06-22', '2025-07-03 17:42:00', 1),
(9, 'New Xmas test', 'Test Desc', '2025-06-22', '2025-06-29 18:44:00', 2),
(10, 'Christmas Party 2027', 'Party 2027', '2025-06-24', '2026-12-21 19:22:00', 1),
(11, 'christmas part 2026', 'christmas', '2025-07-03', '2025-07-03 12:42:00', 2),
(12, 'Christmas Party 3015', 'Party time xmas yipeeee', '2025-07-03', '3014-12-23 12:02:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Locations`
--

CREATE TABLE `Locations` (
  `LocationID` int(11) NOT NULL,
  `LocationName` varchar(64) NOT NULL,
  `LocationPostcode` varchar(32) NOT NULL,
  `LocationAddressline1` varchar(128) NOT NULL,
  `LocationAddressline2` varchar(128) NOT NULL,
  `LocationAddressline3` varchar(128) NOT NULL,
  `LocationAddressline4` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Locations`
--

INSERT INTO `Locations` (`LocationID`, `LocationName`, `LocationPostcode`, `LocationAddressline1`, `LocationAddressline2`, `LocationAddressline3`, `LocationAddressline4`) VALUES
(1, 'Middle Temple Hall', 'EC4Y 9AT', 'Middle Temple Lane', 'London', '', ''),
(2, 'Sky Garden', 'EC3M 3AF', '20 Fenchurch Street', 'London', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`RoleID`, `RoleName`) VALUES
(1, 'None'),
(2, 'Partner'),
(3, 'Clerical'),
(4, 'Pupil');

-- --------------------------------------------------------

--
-- Table structure for table `Status`
--

CREATE TABLE `Status` (
  `StatusID` int(11) NOT NULL,
  `StatusName` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Status`
--

INSERT INTO `Status` (`StatusID`, `StatusName`) VALUES
(1, 'Invited'),
(2, 'Confirmed'),
(3, 'Declined'),
(4, 'Cancelled'),
(5, 'No show'),
(6, 'Attended');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `UserFirstname` varchar(64) NOT NULL,
  `UserLastname` varchar(64) NOT NULL,
  `UserDateofbirth` date NOT NULL,
  `UserEmail` varchar(128) NOT NULL,
  `UserImageURL` varchar(256) NOT NULL,
  `UserUsertypeID` int(11) DEFAULT NULL,
  `UserRoleID` int(11) DEFAULT NULL,
  `UserGuestofID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `UserFirstname`, `UserLastname`, `UserDateofbirth`, `UserEmail`, `UserImageURL`, `UserUsertypeID`, `UserRoleID`, `UserGuestofID`) VALUES
(1, 'Sue', 'Melater', '1970-06-10', 'sue.melater@firm.com', 'http://newsimg.bbc.co.uk/media/images/42191000/jpg/_42191148_briscoe203.jpg', 1, 2, NULL),
(2, 'Graeme', 'Jones', '1965-01-30', 'G.Jones@kingston.ac.uk', 'https://avatars.githubusercontent.com/u/48164351?s=400&u=70e6fedaa5b9cd794807b73c5748f72af4efc328&v=4', 2, 1, 1),
(3, 'Boaty', 'MacBoatface', '1970-06-10', 'b.macb@boat.com', 'http://newsimg.bbc.co.uk/media/images/42191000/jpg/_42191148_briscoe203.jpg', 1, 3, NULL),
(4, 'Steve', 'Steverson', '1985-01-01', 'test@email.com', 'https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuFl43F6BWIwhkkY86z2Ms/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU4MTE5LmpwZw.jpg', 2, 1, 3),
(7, 'Ammar', 'Khan', '2025-06-20', 'ik@gmail.com', 'https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuFl43F6BWIwhkkY86z2Ms/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU4MTE5LmpwZw.jpg', 1, 4, NULL),
(8, 'Gerald', 'Geraldson', '1998-06-18', 'Email@emailtest.com', 'https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuFl43F6BWIwhkkY86z2Ms/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU4MTE5LmpwZw.jpg', 2, 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `Usertypes`
--

CREATE TABLE `Usertypes` (
  `UsertypeID` int(11) NOT NULL,
  `UsertypeName` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Usertypes`
--

INSERT INTO `Usertypes` (`UsertypeID`, `UsertypeName`) VALUES
(1, 'Employee'),
(2, 'Guest');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Attendees`
--
ALTER TABLE `Attendees`
  ADD PRIMARY KEY (`AttendeeID`),
  ADD KEY `Attendees_Users_FK` (`AttendeeUserID`),
  ADD KEY `Attendees_Events_FK` (`AttendeeEventID`),
  ADD KEY `Attendees_Status_FK` (`AttendeeStatusID`);

--
-- Indexes for table `Events`
--
ALTER TABLE `Events`
  ADD PRIMARY KEY (`EventID`),
  ADD KEY `Events_Locations_FK` (`EventLocationID`);

--
-- Indexes for table `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`LocationID`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`RoleID`);

--
-- Indexes for table `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`StatusID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `Users_Roles_FK` (`UserRoleID`),
  ADD KEY `Users_Usertypes_FK` (`UserUsertypeID`),
  ADD KEY `Users_Users_FK` (`UserGuestofID`);

--
-- Indexes for table `Usertypes`
--
ALTER TABLE `Usertypes`
  ADD PRIMARY KEY (`UsertypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Attendees`
--
ALTER TABLE `Attendees`
  MODIFY `AttendeeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Events`
--
ALTER TABLE `Events`
  MODIFY `EventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `LocationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Status`
--
ALTER TABLE `Status`
  MODIFY `StatusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Usertypes`
--
ALTER TABLE `Usertypes`
  MODIFY `UsertypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Attendees`
--
ALTER TABLE `Attendees`
  ADD CONSTRAINT `Attendees_Events_FK` FOREIGN KEY (`AttendeeEventID`) REFERENCES `Events` (`EventID`),
  ADD CONSTRAINT `Attendees_Status_FK` FOREIGN KEY (`AttendeeStatusID`) REFERENCES `Status` (`StatusID`),
  ADD CONSTRAINT `Attendees_Users_FK` FOREIGN KEY (`AttendeeUserID`) REFERENCES `Users` (`UserID`);

--
-- Constraints for table `Events`
--
ALTER TABLE `Events`
  ADD CONSTRAINT `Events_Locations_FK` FOREIGN KEY (`EventLocationID`) REFERENCES `Locations` (`LocationID`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_Roles_FK` FOREIGN KEY (`UserRoleID`) REFERENCES `Roles` (`RoleID`),
  ADD CONSTRAINT `Users_Users_FK` FOREIGN KEY (`UserGuestofID`) REFERENCES `Users` (`UserID`),
  ADD CONSTRAINT `Users_Usertypes_FK` FOREIGN KEY (`UserUsertypeID`) REFERENCES `Usertypes` (`UsertypeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
