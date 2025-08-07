-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2025 at 07:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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

--
-- Dumping data for table `Attendees`
--

INSERT INTO `Attendees` (`AttendeeID`, `AttendeeUserID`, `AttendeeEventID`, `AttendeeStatusID`) VALUES
(1, 2, 41, 5),
(2, 4, 41, 5),
(3, 5, 41, 5),
(4, 6, 41, 2),
(5, 7, 41, 3),
(6, 13, 41, 4),
(7, 15, 41, 3),
(8, 16, 41, 2),
(9, 18, 41, 5),
(10, 20, 41, 5),
(11, 21, 41, 2),
(12, 22, 41, 3),
(13, 23, 41, 5),
(14, 25, 41, 3),
(15, 26, 41, 2),
(16, 27, 41, 1),
(17, 28, 41, 2),
(18, 29, 41, 5),
(19, 30, 41, 5),
(20, 31, 41, 5),
(21, 33, 41, 5),
(22, 34, 41, 5),
(23, 37, 41, 5),
(24, 38, 41, 5),
(25, 40, 41, 2),
(26, 41, 41, 5),
(27, 42, 41, 1),
(28, 44, 41, 4),
(29, 45, 41, 4),
(30, 47, 41, 4),
(31, 48, 41, 1),
(32, 49, 41, 5),
(33, 52, 41, 5),
(34, 53, 41, 5),
(35, 54, 41, 5),
(36, 56, 41, 5),
(37, 58, 41, 5),
(38, 63, 41, 5),
(39, 64, 41, 5),
(40, 65, 41, 5),
(41, 76, 41, 2),
(42, 78, 41, 5),
(43, 83, 41, 1),
(44, 86, 41, 5),
(45, 89, 41, 5),
(46, 91, 41, 5),
(47, 94, 41, 5),
(48, 96, 41, 5),
(49, 99, 41, 5),
(50, 100, 41, 2),
(51, 1, 41, 5),
(52, 3, 41, 5),
(53, 8, 41, 5),
(54, 9, 41, 5),
(55, 10, 41, 5),
(56, 11, 41, 5),
(57, 12, 41, 5),
(58, 14, 41, 2),
(59, 17, 41, 5),
(60, 19, 41, 1),
(61, 24, 41, 5),
(62, 32, 41, 5),
(63, 35, 41, 5),
(64, 36, 41, 5),
(65, 39, 41, 5),
(66, 43, 41, 5),
(67, 46, 41, 5),
(68, 50, 41, 5),
(69, 51, 41, 5),
(70, 55, 41, 4),
(71, 57, 41, 5),
(72, 59, 41, 3),
(73, 60, 41, 2),
(74, 61, 41, 3),
(75, 62, 41, 3),
(76, 66, 41, 3),
(77, 67, 41, 2),
(78, 68, 41, 2),
(79, 69, 41, 1),
(80, 70, 41, 5),
(81, 71, 41, 5),
(82, 72, 41, 2),
(83, 73, 41, 2),
(84, 74, 41, 5),
(85, 75, 41, 5),
(86, 77, 41, 5),
(87, 79, 41, 5),
(88, 80, 41, 5),
(89, 81, 41, 5),
(90, 82, 41, 5),
(91, 84, 41, 5),
(92, 85, 41, 2),
(93, 87, 41, 4),
(94, 88, 41, 5),
(95, 90, 41, 1),
(96, 92, 41, 4),
(97, 93, 41, 1),
(98, 95, 41, 5),
(99, 97, 41, 4),
(100, 98, 41, 5),
(101, 2, 51, NULL),
(102, 4, 51, NULL),
(103, 5, 51, NULL),
(104, 6, 51, NULL),
(105, 7, 51, NULL),
(106, 13, 51, NULL),
(107, 15, 51, NULL),
(108, 16, 51, NULL),
(109, 18, 51, NULL),
(110, 20, 51, NULL),
(111, 21, 51, NULL),
(112, 22, 51, NULL),
(113, 23, 51, NULL),
(114, 25, 51, NULL),
(115, 26, 51, NULL),
(116, 27, 51, NULL),
(117, 28, 51, NULL),
(118, 29, 51, NULL),
(119, 30, 51, NULL),
(120, 31, 51, NULL),
(121, 33, 51, NULL),
(122, 34, 51, NULL),
(123, 37, 51, NULL),
(124, 38, 51, NULL),
(125, 40, 51, NULL),
(126, 41, 51, NULL),
(127, 42, 51, NULL),
(128, 44, 51, NULL),
(129, 45, 51, NULL),
(130, 47, 51, NULL),
(131, 48, 51, NULL),
(132, 49, 51, NULL),
(133, 52, 51, NULL),
(134, 53, 51, NULL),
(135, 54, 51, NULL),
(136, 56, 51, NULL),
(137, 58, 51, NULL),
(138, 63, 51, NULL),
(139, 64, 51, NULL),
(140, 65, 51, NULL),
(141, 76, 51, NULL),
(142, 78, 51, NULL),
(143, 83, 51, NULL),
(144, 86, 51, NULL),
(145, 89, 51, NULL),
(146, 91, 51, NULL),
(147, 94, 51, NULL),
(148, 96, 51, NULL),
(149, 99, 51, NULL),
(150, 100, 51, NULL),
(151, 1, 51, NULL),
(152, 3, 51, NULL),
(153, 8, 51, NULL),
(154, 9, 51, NULL),
(155, 10, 51, NULL),
(156, 11, 51, NULL),
(157, 12, 51, NULL),
(158, 14, 51, NULL),
(159, 17, 51, NULL),
(160, 19, 51, NULL),
(161, 24, 51, NULL),
(162, 32, 51, NULL),
(163, 35, 51, NULL),
(164, 36, 51, NULL),
(165, 39, 51, NULL),
(166, 43, 51, NULL),
(167, 46, 51, NULL),
(168, 50, 51, NULL),
(169, 51, 51, NULL),
(170, 55, 51, NULL),
(171, 57, 51, NULL),
(172, 59, 51, NULL),
(173, 60, 51, NULL),
(174, 61, 51, NULL),
(175, 62, 51, NULL),
(176, 66, 51, NULL),
(177, 67, 51, NULL),
(178, 68, 51, NULL),
(179, 69, 51, NULL),
(180, 70, 51, NULL),
(181, 71, 51, NULL),
(182, 72, 51, NULL),
(183, 73, 51, NULL),
(184, 74, 51, NULL),
(185, 75, 51, NULL),
(186, 77, 51, NULL),
(187, 79, 51, NULL),
(188, 80, 51, NULL),
(189, 81, 51, NULL),
(190, 82, 51, NULL),
(191, 84, 51, NULL),
(192, 85, 51, NULL),
(193, 87, 51, NULL),
(194, 88, 51, NULL),
(195, 90, 51, NULL),
(196, 92, 51, NULL),
(197, 93, 51, NULL),
(198, 95, 51, NULL),
(199, 97, 51, NULL),
(200, 98, 51, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Events`
--

CREATE TABLE `Events` (
  `EventID` int(11) NOT NULL,
  `EventName` varchar(128) NOT NULL,
  `EventDescription` varchar(512) NOT NULL,
  `EventDatetime` datetime NOT NULL,
  `EventLocationID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Events`
--

INSERT INTO `Events` (`EventID`, `EventName`, `EventDescription`, `EventDatetime`, `EventLocationID`) VALUES
(1, 'Annual Christmas Party', 'A festive celebration with colleagues and families.', '2021-12-20 18:00:00', 7),
(2, 'Legal Seminar', 'An informative seminar on recent legal developments.', '2021-09-14 10:00:00', 3),
(3, 'Compliance Workshop', 'Hands-on training on compliance protocols.', '2022-10-11 14:00:00', 1),
(4, 'Partner\'s Gala', 'An elegant evening honoring senior partners.', '2023-12-01 19:30:00', 10),
(5, 'Holiday Networking Event', 'A networking opportunity with drinks and hors d\'oeuvres.', '2022-12-15 17:00:00', 9),
(6, 'Client Appreciation Dinner', 'A dinner event to thank our valued clients.', '2020-11-21 18:00:00', 6),
(7, 'Continuing Legal Education', 'Mandatory CLE credits session for attorneys.', '2023-08-06 09:00:00', 8),
(8, 'End-of-Year Review', 'Year-end performance and goal review.', '2020-12-10 11:00:00', 2),
(9, 'Summer Law Intern Mixer', 'Welcome mixer for summer law interns.', '2021-07-20 16:00:00', 5),
(10, 'Firm Strategy Meeting', 'Strategic planning for the upcoming fiscal year.', '2023-09-29 13:30:00', 4),
(11, 'Annual Christmas Party', 'A festive celebration with colleagues and families.', '2022-12-20 18:00:00', 7),
(12, 'Legal Seminar', 'An informative seminar on recent legal developments.', '2022-09-14 10:00:00', 1),
(13, 'Compliance Workshop', 'Hands-on training on compliance protocols.', '2023-10-11 14:00:00', 4),
(14, 'Partner\'s Gala', 'An elegant evening honoring senior partners.', '2021-12-01 19:30:00', 9),
(15, 'Holiday Networking Event', 'A networking opportunity with drinks and hors d\'oeuvres.', '2023-12-15 17:00:00', 2),
(16, 'Client Appreciation Dinner', 'A dinner event to thank our valued clients.', '2021-11-21 18:00:00', 3),
(17, 'Continuing Legal Education', 'Mandatory CLE credits session for attorneys.', '2022-08-06 09:00:00', 6),
(18, 'End-of-Year Review', 'Year-end performance and goal review.', '2023-12-10 11:00:00', 8),
(19, 'Summer Law Intern Mixer', 'Welcome mixer for summer law interns.', '2021-07-20 16:00:00', 7),
(20, 'Firm Strategy Meeting', 'Strategic planning for the upcoming fiscal year.', '2021-09-29 13:30:00', 1),
(21, 'Annual Christmas Party', 'A festive celebration with colleagues and families.', '2023-12-20 18:00:00', 3),
(22, 'Legal Seminar', 'An informative seminar on recent legal developments.', '2021-09-14 10:00:00', 10),
(23, 'Compliance Workshop', 'Hands-on training on compliance protocols.', '2023-10-11 14:00:00', 5),
(24, 'Partner\'s Gala', 'An elegant evening honoring senior partners.', '2021-12-01 19:30:00', 9),
(25, 'Holiday Networking Event', 'A networking opportunity with drinks and hors d\'oeuvres.', '2020-12-15 17:00:00', 4),
(26, 'Client Appreciation Dinner', 'A dinner event to thank our valued clients.', '2020-11-21 18:00:00', 8),
(27, 'Continuing Legal Education', 'Mandatory CLE credits session for attorneys.', '2023-08-06 09:00:00', 1),
(28, 'End-of-Year Review', 'Year-end performance and goal review.', '2022-12-10 11:00:00', 7),
(29, 'Summer Law Intern Mixer', 'Welcome mixer for summer law interns.', '2020-07-20 16:00:00', 2),
(30, 'Firm Strategy Meeting', 'Strategic planning for the upcoming fiscal year.', '2021-09-29 13:30:00', 10),
(31, 'Annual Christmas Party', 'A festive celebration with colleagues and families.', '2024-12-20 18:00:00', 9),
(32, 'Legal Seminar', 'An informative seminar on recent legal developments.', '2022-09-14 10:00:00', 6),
(33, 'Compliance Workshop', 'Hands-on training on compliance protocols.', '2023-10-11 14:00:00', 5),
(34, 'Partner\'s Gala', 'An elegant evening honoring senior partners.', '2023-12-01 19:30:00', 8),
(35, 'Holiday Networking Event', 'A networking opportunity with drinks and hors d\'oeuvres.', '2022-12-15 17:00:00', 4),
(36, 'Client Appreciation Dinner', 'A dinner event to thank our valued clients.', '2021-11-21 18:00:00', 3),
(37, 'Continuing Legal Education', 'Mandatory CLE credits session for attorneys.', '2021-08-06 09:00:00', 7),
(38, 'End-of-Year Review', 'Year-end performance and goal review.', '2023-12-10 11:00:00', 10),
(39, 'Summer Law Intern Mixer', 'Welcome mixer for summer law interns.', '2023-07-20 16:00:00', 6),
(40, 'Firm Strategy Meeting', 'Strategic planning for the upcoming fiscal year.', '2022-09-29 13:30:00', 1),
(41, 'Annual Christmas Party', 'A festive celebration with colleagues and families.', '2025-12-20 18:00:00', 9),
(42, 'Legal Seminar', 'An informative seminar on recent legal developments.', '2021-09-14 10:00:00', 2),
(43, 'Compliance Workshop', 'Hands-on training on compliance protocols.', '2021-10-11 14:00:00', 5),
(44, 'Partner\'s Gala', 'An elegant evening honoring senior partners.', '2022-12-01 19:30:00', 8),
(45, 'Holiday Networking Event', 'A networking opportunity with drinks and hors d\'oeuvres.', '2021-12-15 17:00:00', 7),
(46, 'Client Appreciation Dinner', 'A dinner event to thank our valued clients.', '2020-11-21 18:00:00', 1),
(47, 'Continuing Legal Education', 'Mandatory CLE credits session for attorneys.', '2023-08-06 09:00:00', 3),
(48, 'End-of-Year Review', 'Year-end performance and goal review.', '2020-12-10 11:00:00', 6),
(49, 'Summer Law Intern Mixer', 'Welcome mixer for summer law interns.', '2022-07-20 16:00:00', 4),
(50, 'Firm Strategy Meeting', 'Strategic planning for the upcoming fiscal year.', '2023-09-29 13:30:00', 2),
(51, 'Annual Christmas Party', 'A festive celebration with colleagues and families.', '2026-12-20 18:00:00', 10),
(52, 'Legal Seminar', 'An informative seminar on recent legal developments.', '2023-09-14 10:00:00', 5),
(53, 'Compliance Workshop', 'Hands-on training on compliance protocols.', '2021-10-11 14:00:00', 7),
(54, 'Partner\'s Gala', 'An elegant evening honoring senior partners.', '2020-12-01 19:30:00', 1),
(55, 'Holiday Networking Event', 'A networking opportunity with drinks and hors d\'oeuvres.', '2022-12-15 17:00:00', 6),
(56, 'Client Appreciation Dinner', 'A dinner event to thank our valued clients.', '2023-11-21 18:00:00', 9),
(57, 'Continuing Legal Education', 'Mandatory CLE credits session for attorneys.', '2023-08-06 09:00:00', 3),
(58, 'End-of-Year Review', 'Year-end performance and goal review.', '2020-12-10 11:00:00', 2),
(59, 'Summer Law Intern Mixer', 'Welcome mixer for summer law interns.', '2021-07-20 16:00:00', 10),
(60, 'Firm Strategy Meeting', 'Strategic planning for the upcoming fiscal year.', '2022-09-29 13:30:00', 8);

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
(2, 'Guildhall', 'EC2V 5AE', 'Guildhall Yard', 'London', '', ''),
(3, 'Royal Festival Hall', 'SE1 8XX', 'Belvedere Road', 'London', '', ''),
(4, 'Barbican Centre', 'EC2Y 8DS', 'Silk Street', 'London', '', ''),
(5, 'The Old Bailey', 'EC4M 7EH', 'Old Bailey', 'London', '', ''),
(6, 'The Royal Courts of Justice', 'WC2A 2LL', 'Strand', 'London', '', ''),
(7, 'Somerset House', 'WC2R 1LA', 'Strand', 'London', '', ''),
(8, 'The Shard', 'SE1 9SG', '32 London Bridge Street', 'London', '', ''),
(9, 'Tate Modern', 'SE1 9TG', 'Bankside', 'London', '', ''),
(10, 'The National Gallery', 'WC2N 5DN', 'Trafalgar Square', 'London', '', '');

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
(5, 'Attended');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `UserFirstname` varchar(64) NOT NULL,
  `UserLastname` varchar(64) NOT NULL,
  `UserDateofbirth` date NOT NULL DEFAULT current_timestamp(),
  `UserEmail` varchar(128) NOT NULL,
  `UserImageURL` varchar(256) NOT NULL,
  `UserUsertypeID` int(11) DEFAULT NULL,
  `UserRoleID` int(11) DEFAULT NULL,
  `UserGuestofID` int(11) DEFAULT NULL,
  `UserActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `UserFirstname`, `UserLastname`, `UserDateofbirth`, `UserEmail`, `UserImageURL`, `UserUsertypeID`, `UserRoleID`, `UserGuestofID`, `UserActive`) VALUES
(1, 'Brittany', 'Campos', '0000-00-00', 'brittany.campos@example.com', 'https://example.com/images/1.jpg', 2, 1, 2, 1),
(2, 'Dillon', 'Duran', '0000-00-00', 'dillon.duran@example.com', 'https://example.com/images/2.jpg', 1, 2, 0, 1),
(3, 'Cody', 'Kirk', '0000-00-00', 'cody.kirk@example.com', 'https://example.com/images/3.jpg', 2, 1, 53, 1),
(4, 'Tanya', 'Harris', '0000-00-00', 'tanya.harris@example.com', 'https://example.com/images/4.jpg', 1, 2, 0, 1),
(5, 'Dennis', 'Barron', '0000-00-00', 'dennis.barron@example.com', 'https://example.com/images/5.jpg', 1, 3, 0, 1),
(6, 'Steven', 'Rogers', '0000-00-00', 'steven.rogers@example.com', 'https://example.com/images/6.jpg', 1, 3, 0, 1),
(7, 'Robert', 'Nelson', '0000-00-00', 'robert.nelson@example.com', 'https://example.com/images/7.jpg', 1, 2, 0, 1),
(8, 'James', 'Obrien', '0000-00-00', 'james.obrien@example.com', 'https://example.com/images/8.jpg', 2, 1, 56, 1),
(9, 'Megan', 'White', '0000-00-00', 'megan.white@example.com', 'https://example.com/images/9.jpg', 2, 1, 58, 1),
(10, 'Thomas', 'Reed', '0000-00-00', 'thomas.reed@example.com', 'https://example.com/images/10.jpg', 2, 1, 63, 1),
(11, 'Angela', 'Carson', '0000-00-00', 'angela.carson@example.com', 'https://example.com/images/11.jpg', 2, 1, 64, 1),
(12, 'Ashley', 'Green', '0000-00-00', 'ashley.green@example.com', 'https://example.com/images/12.jpg', 2, 1, 65, 1),
(13, 'Victor', 'Martin', '0000-00-00', 'victor.martin@example.com', 'https://example.com/images/13.jpg', 1, 2, 0, 1),
(14, 'Madison', 'Perry', '0000-00-00', 'madison.perry@example.com', 'https://example.com/images/14.jpg', 2, 1, 76, 1),
(15, 'Jessica', 'Kelly', '0000-00-00', 'jessica.kelly@example.com', 'https://example.com/images/15.jpg', 1, 2, 0, 1),
(16, 'Tasha', 'Wright', '0000-00-00', 'tasha.wright@example.com', 'https://example.com/images/16.jpg', 1, 2, 0, 1),
(17, 'Justin', 'Gutierrez', '0000-00-00', 'justin.gutierrez@example.com', 'https://example.com/images/17.jpg', 2, 1, 78, 1),
(18, 'Lori', 'Hull', '0000-00-00', 'lori.hull@example.com', 'https://example.com/images/18.jpg', 1, 4, 0, 1),
(19, 'David', 'Valencia', '0000-00-00', 'david.valencia@example.com', 'https://example.com/images/19.jpg', 2, 1, 83, 1),
(20, 'Jessica', 'Bradford', '0000-00-00', 'jessica.bradford@example.com', 'https://example.com/images/20.jpg', 1, 2, 0, 1),
(21, 'Jessica', 'Scott', '0000-00-00', 'jessica.scott@example.com', 'https://example.com/images/21.jpg', 1, 3, 0, 1),
(22, 'Kevin', 'Evans', '0000-00-00', 'kevin.evans@example.com', 'https://example.com/images/22.jpg', 1, 4, 0, 1),
(23, 'Patrick', 'Webb', '0000-00-00', 'patrick.webb@example.com', 'https://example.com/images/23.jpg', 1, 2, 0, 1),
(24, 'Meagan', 'Miller', '0000-00-00', 'meagan.miller@example.com', 'https://example.com/images/24.jpg', 2, 1, 86, 1),
(25, 'Jason', 'King', '0000-00-00', 'jason.king@example.com', 'https://example.com/images/25.jpg', 1, 2, 0, 1),
(26, 'Tracy', 'Ramos', '0000-00-00', 'tracy.ramos@example.com', 'https://example.com/images/26.jpg', 1, 3, 0, 1),
(27, 'Anthony', 'Moore', '0000-00-00', 'anthony.moore@example.com', 'https://example.com/images/27.jpg', 1, 2, 0, 1),
(28, 'Sarah', 'Fernandez', '0000-00-00', 'sarah.fernandez@example.com', 'https://example.com/images/28.jpg', 1, 3, 0, 1),
(29, 'Stephen', 'James', '0000-00-00', 'stephen.james@example.com', 'https://example.com/images/29.jpg', 1, 4, 0, 1),
(30, 'Tiffany', 'Acosta', '0000-00-00', 'tiffany.acosta@example.com', 'https://example.com/images/30.jpg', 1, 3, 0, 1),
(31, 'Kristina', 'Moreno', '0000-00-00', 'kristina.moreno@example.com', 'https://example.com/images/31.jpg', 1, 4, 0, 1),
(32, 'Douglas', 'Benton', '0000-00-00', 'douglas.benton@example.com', 'https://example.com/images/32.jpg', 2, 1, 89, 1),
(33, 'Julie', 'Sanchez', '0000-00-00', 'julie.sanchez@example.com', 'https://example.com/images/33.jpg', 1, 2, 0, 1),
(34, 'Holly', 'Newton', '0000-00-00', 'holly.newton@example.com', 'https://example.com/images/34.jpg', 1, 3, 0, 1),
(35, 'Thomas', 'Rasmussen', '0000-00-00', 'thomas.rasmussen@example.com', 'https://example.com/images/35.jpg', 2, 1, 91, 1),
(36, 'Jeremy', 'Bailey', '0000-00-00', 'jeremy.bailey@example.com', 'https://example.com/images/36.jpg', 2, 1, 94, 1),
(37, 'Tara', 'Mann', '0000-00-00', 'tara.mann@example.com', 'https://example.com/images/37.jpg', 1, 2, 0, 1),
(38, 'Karen', 'Weaver', '0000-00-00', 'karen.weaver@example.com', 'https://example.com/images/38.jpg', 1, 2, 0, 1),
(39, 'Regina', 'Thomas', '0000-00-00', 'regina.thomas@example.com', 'https://example.com/images/39.jpg', 2, 1, 96, 1),
(40, 'Jacqueline', 'Coleman', '0000-00-00', 'jacqueline.coleman@example.com', 'https://example.com/images/40.jpg', 1, 3, 0, 1),
(41, 'Pamela', 'Cunningham', '0000-00-00', 'pamela.cunningham@example.com', 'https://example.com/images/41.jpg', 1, 2, 0, 1),
(42, 'Steven', 'Davis', '0000-00-00', 'steven.davis@example.com', 'https://example.com/images/42.jpg', 1, 2, 0, 1),
(43, 'Leslie', 'Garcia', '0000-00-00', 'leslie.garcia@example.com', 'https://example.com/images/43.jpg', 2, 1, 99, 1),
(44, 'Andrew', 'Williams', '0000-00-00', 'andrew.williams@example.com', 'https://example.com/images/44.jpg', 1, 2, 0, 1),
(45, 'Erin', 'Hernandez', '0000-00-00', 'erin.hernandez@example.com', 'https://example.com/images/45.jpg', 1, 4, 0, 1),
(46, 'Bryan', 'Scott', '0000-00-00', 'bryan.scott@example.com', 'https://example.com/images/46.jpg', 2, 1, 2, 1),
(47, 'Olivia', 'Hunt', '0000-00-00', 'olivia.hunt@example.com', 'https://example.com/images/47.jpg', 1, 4, 0, 1),
(48, 'Hannah', 'Moore', '0000-00-00', 'hannah.moore@example.com', 'https://example.com/images/48.jpg', 1, 2, 0, 1),
(49, 'Paul', 'Wright', '0000-00-00', 'paul.wright@example.com', 'https://example.com/images/49.jpg', 1, 2, 0, 1),
(50, 'Logan', 'Wiggins', '0000-00-00', 'logan.wiggins@example.com', 'https://example.com/images/50.jpg', 2, 1, 4, 1),
(51, 'Monica', 'Larsen', '0000-00-00', 'monica.larsen@example.com', 'https://example.com/images/51.jpg', 2, 1, 5, 1),
(52, 'Cheryl', 'Obrien', '0000-00-00', 'cheryl.obrien@example.com', 'https://example.com/images/52.jpg', 1, 3, 0, 1),
(53, 'Natalie', 'Green', '0000-00-00', 'natalie.green@example.com', 'https://example.com/images/53.jpg', 1, 3, 0, 1),
(54, 'Ryan', 'Lewis', '0000-00-00', 'ryan.lewis@example.com', 'https://example.com/images/54.jpg', 1, 2, 0, 1),
(55, 'Tina', 'Davis', '0000-00-00', 'tina.davis@example.com', 'https://example.com/images/55.jpg', 2, 1, 13, 1),
(56, 'Krista', 'Schmitt', '0000-00-00', 'krista.schmitt@example.com', 'https://example.com/images/56.jpg', 1, 2, 0, 1),
(57, 'Michael', 'Hess', '0000-00-00', 'michael.hess@example.com', 'https://example.com/images/57.jpg', 2, 1, 2, 1),
(58, 'Lee', 'Schwartz', '0000-00-00', 'lee.schwartz@example.com', 'https://example.com/images/58.jpg', 1, 3, 0, 1),
(59, 'Hunter', 'Rojas', '0000-00-00', 'hunter.rojas@example.com', 'https://example.com/images/59.jpg', 2, 1, 15, 1),
(60, 'Kenneth', 'Shaw', '0000-00-00', 'kenneth.shaw@example.com', 'https://example.com/images/60.jpg', 2, 1, 6, 1),
(61, 'Brandon', 'Jones', '0000-00-00', 'brandon.jones@example.com', 'https://example.com/images/61.jpg', 2, 1, 22, 1),
(62, 'Brenda', 'Smith', '0000-00-00', 'brenda.smith@example.com', 'https://example.com/images/62.jpg', 2, 1, 7, 1),
(63, 'Lisa', 'Williams', '0000-00-00', 'lisa.williams@example.com', 'https://example.com/images/63.jpg', 1, 4, 0, 1),
(64, 'Taylor', 'Bruce', '0000-00-00', 'taylor.bruce@example.com', 'https://example.com/images/64.jpg', 1, 2, 0, 1),
(65, 'Jeremy', 'Beard', '0000-00-00', 'jeremy.beard@example.com', 'https://example.com/images/65.jpg', 1, 3, 0, 1),
(66, 'Phillip', 'Herrera', '0000-00-00', 'phillip.herrera@example.com', 'https://example.com/images/66.jpg', 2, 1, 25, 1),
(67, 'Pam', 'Miller', '0000-00-00', 'pam.miller@example.com', 'https://example.com/images/67.jpg', 2, 1, 16, 1),
(68, 'Jennifer', 'Crosby', '0000-00-00', 'jennifer.crosby@example.com', 'https://example.com/images/68.jpg', 2, 1, 26, 1),
(69, 'Stacy', 'Guzman', '0000-00-00', 'stacy.guzman@example.com', 'https://example.com/images/69.jpg', 2, 1, 27, 1),
(70, 'Karen', 'Gray', '0000-00-00', 'karen.gray@example.com', 'https://example.com/images/70.jpg', 2, 1, 18, 1),
(71, 'Andrew', 'Rodriguez', '0000-00-00', 'andrew.rodriguez@example.com', 'https://example.com/images/71.jpg', 2, 1, 20, 1),
(72, 'Jason', 'Ward', '0000-00-00', 'jason.ward@example.com', 'https://example.com/images/72.jpg', 2, 1, 28, 1),
(73, 'Diana', 'Hudson', '0000-00-00', 'diana.hudson@example.com', 'https://example.com/images/73.jpg', 2, 1, 21, 1),
(74, 'Brandi', 'Neal', '0000-00-00', 'brandi.neal@example.com', 'https://example.com/images/74.jpg', 2, 1, 29, 1),
(75, 'Ruth', 'Wiggins', '0000-00-00', 'ruth.wiggins@example.com', 'https://example.com/images/75.jpg', 2, 1, 23, 1),
(76, 'Sarah', 'Higgins', '0000-00-00', 'sarah.higgins@example.com', 'https://example.com/images/76.jpg', 1, 2, 0, 1),
(77, 'Douglas', 'Warren', '0000-00-00', 'douglas.warren@example.com', 'https://example.com/images/77.jpg', 2, 1, 30, 1),
(78, 'Kelly', 'Ferrell', '0000-00-00', 'kelly.ferrell@example.com', 'https://example.com/images/78.jpg', 1, 2, 0, 1),
(79, 'Kelly', 'Watts', '0000-00-00', 'kelly.watts@example.com', 'https://example.com/images/79.jpg', 2, 1, 31, 1),
(80, 'Kristen', 'Anderson', '0000-00-00', 'kristen.anderson@example.com', 'https://example.com/images/80.jpg', 2, 1, 38, 1),
(81, 'Sherry', 'Fowler', '0000-00-00', 'sherry.fowler@example.com', 'https://example.com/images/81.jpg', 2, 1, 33, 1),
(82, 'Samuel', 'Smith', '0000-00-00', 'samuel.smith@example.com', 'https://example.com/images/82.jpg', 2, 1, 34, 1),
(83, 'Miguel', 'Boyd', '0000-00-00', 'miguel.boyd@example.com', 'https://example.com/images/83.jpg', 1, 4, 0, 1),
(84, 'Adrian', 'Maxwell', '0000-00-00', 'adrian.maxwell@example.com', 'https://example.com/images/84.jpg', 2, 1, 37, 1),
(85, 'Barry', 'Nichols', '0000-00-00', 'barry.nichols@example.com', 'https://example.com/images/85.jpg', 2, 1, 40, 1),
(86, 'Erin', 'Hayes', '0000-00-00', 'erin.hayes@example.com', 'https://example.com/images/86.jpg', 1, 2, 0, 1),
(87, 'Travis', 'Chavez', '0000-00-00', 'travis.chavez@example.com', 'https://example.com/images/87.jpg', 2, 1, 44, 1),
(88, 'Katie', 'Reed', '0000-00-00', 'katie.reed@example.com', 'https://example.com/images/88.jpg', 2, 1, 41, 1),
(89, 'Karen', 'Figueroa', '0000-00-00', 'karen.figueroa@example.com', 'https://example.com/images/89.jpg', 1, 3, 0, 1),
(90, 'Jessica', 'Reyes', '0000-00-00', 'jessica.reyes@example.com', 'https://example.com/images/90.jpg', 2, 1, 42, 1),
(91, 'Jamie', 'Thornton', '0000-00-00', 'jamie.thornton@example.com', 'https://example.com/images/91.jpg', 1, 2, 0, 1),
(92, 'Tara', 'Todd', '0000-00-00', 'tara.todd@example.com', 'https://example.com/images/92.jpg', 2, 1, 47, 1),
(93, 'Angelica', 'Jones', '0000-00-00', 'angelica.jones@example.com', 'https://example.com/images/93.jpg', 2, 1, 48, 1),
(94, 'William', 'Graham', '0000-00-00', 'william.graham@example.com', 'https://example.com/images/94.jpg', 1, 3, 0, 1),
(95, 'Maria', 'Marks', '0000-00-00', 'maria.marks@example.com', 'https://example.com/images/95.jpg', 2, 1, 52, 1),
(96, 'Benjamin', 'Barnes', '0000-00-00', 'benjamin.barnes@example.com', 'https://example.com/images/96.jpg', 1, 4, 0, 1),
(97, 'Dakota', 'Cervantes', '0000-00-00', 'dakota.cervantes@example.com', 'https://example.com/images/97.jpg', 2, 1, 45, 1),
(98, 'Jeffrey', 'Thompson', '0000-00-00', 'jeffrey.thompson@example.com', 'https://example.com/images/98.jpg', 2, 1, 54, 1),
(99, 'Alexandria', 'Martin', '0000-00-00', 'alexandria.martin@example.com', 'https://example.com/images/99.jpg', 1, 4, 0, 1),
(100, 'Todd', 'Pearson', '0000-00-00', 'todd.pearson@example.com', 'https://example.com/images/100.jpg', 1, 4, 0, 1);

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
  MODIFY `AttendeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `Events`
--
ALTER TABLE `Events`
  MODIFY `EventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `LocationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Status`
--
ALTER TABLE `Status`
  MODIFY `StatusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

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
