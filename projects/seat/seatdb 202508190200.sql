-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2025 at 02:57 AM
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
-- Table structure for table `Agegroups`
--

CREATE TABLE `Agegroups` (
  `AgegroupID` int(11) NOT NULL,
  `AgegroupName` varchar(32) NOT NULL,
  `AgegroupOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Agegroups`
--

INSERT INTO `Agegroups` (`AgegroupID`, `AgegroupName`, `AgegroupOrder`) VALUES
(1, 'Minor', 1),
(2, '18-29', 2),
(3, '30-44', 3),
(4, '45-59', 4),
(5, '60+', 5);

-- --------------------------------------------------------

--
-- Table structure for table `Attendees`
--

CREATE TABLE `Attendees` (
  `AttendeeID` int(11) NOT NULL,
  `AttendeeUserID` int(11) NOT NULL,
  `AttendeeEventID` int(11) NOT NULL,
  `AttendeeStatusID` int(11) DEFAULT NULL,
  `AttendeeTable` int(11) DEFAULT NULL,
  `AttendeeSeat` int(11) DEFAULT NULL,
  `AttendeeIsVIP` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Attendees`
--

INSERT INTO `Attendees` (`AttendeeID`, `AttendeeUserID`, `AttendeeEventID`, `AttendeeStatusID`, `AttendeeTable`, `AttendeeSeat`, `AttendeeIsVIP`) VALUES
(1, 2, 41, 5, 3, 9, 0),
(2, 4, 41, 5, 8, 5, 0),
(3, 5, 41, 5, 3, 5, 0),
(4, 6, 41, 2, 1, 2, 0),
(5, 7, 41, 3, NULL, NULL, 0),
(6, 13, 41, 4, NULL, NULL, 0),
(7, 15, 41, 3, NULL, NULL, 0),
(8, 16, 41, 2, 7, 1, 0),
(9, 18, 41, 5, 1, 9, 0),
(10, 20, 41, 5, 2, 1, 0),
(11, 21, 41, 2, 2, 8, 0),
(12, 22, 41, 3, NULL, NULL, 0),
(13, 23, 41, 5, 3, 4, 0),
(14, 25, 41, 3, NULL, NULL, 0),
(15, 26, 41, 2, 3, NULL, 0),
(16, 27, 41, 1, NULL, NULL, 0),
(17, 28, 41, 2, 5, 8, 0),
(18, 29, 41, 5, 8, 8, 0),
(19, 30, 41, 5, 1, 4, 0),
(20, 31, 41, 5, 5, 2, 0),
(21, 33, 41, 5, 8, 1, 0),
(22, 34, 41, 5, 2, 4, 0),
(23, 37, 41, 5, 6, 1, 0),
(24, 38, 41, 5, 4, 8, 0),
(25, 40, 41, 2, 3, 3, 0),
(26, 41, 41, 5, 3, 1, 0),
(27, 42, 41, 1, NULL, NULL, 0),
(28, 44, 41, 4, NULL, NULL, 0),
(29, 45, 41, 4, NULL, NULL, 0),
(30, 47, 41, 4, NULL, NULL, 0),
(31, 48, 41, 1, NULL, NULL, 0),
(32, 49, 41, 5, 5, 4, 0),
(33, 52, 41, 5, 7, 2, 0),
(34, 53, 41, 5, 6, 5, 0),
(35, 54, 41, 5, 2, 5, 0),
(36, 56, 41, 5, 5, 5, 0),
(37, 58, 41, 5, 6, 2, 0),
(38, 63, 41, 5, 1, 1, 0),
(39, 64, 41, 5, 8, 1, 0),
(40, 65, 41, 5, 6, 3, 0),
(41, 76, 41, 2, 7, 8, 0),
(42, 78, 41, 5, 1, 3, 0),
(43, 83, 41, 1, NULL, NULL, 0),
(44, 86, 41, 5, 8, 3, 0),
(45, 89, 41, 5, 5, 7, 0),
(46, 91, 41, 5, 4, 7, 0),
(47, 94, 41, 5, 4, 2, 0),
(48, 96, 41, 5, 3, 6, 0),
(49, 99, 41, 5, 2, 3, 0),
(50, 100, 41, 2, 6, 7, 0),
(51, 1, 41, 5, 1, 1, 0),
(52, 3, 41, 5, 8, 7, 0),
(53, 8, 41, 5, 5, 1, 0),
(54, 9, 41, 5, 3, 7, 0),
(55, 10, 41, 5, 2, 9, 0),
(56, 11, 41, 5, 7, 6, 0),
(57, 12, 41, 5, 6, 1, 0),
(58, 14, 41, 2, 3, 2, 0),
(59, 17, 41, 5, 1, 6, 0),
(60, 19, 41, 1, NULL, NULL, 0),
(61, 24, 41, 5, 4, 1, 0),
(62, 32, 41, 5, 2, 6, 0),
(63, 35, 41, 5, 8, 2, 0),
(64, 36, 41, 5, 4, 4, 0),
(65, 39, 41, 5, 4, 6, 0),
(66, 43, 41, 5, 5, 1, 0),
(67, 46, 41, 5, 6, 6, 0),
(68, 50, 41, 5, 4, 1, 0),
(69, 51, 41, 5, 7, 7, 0),
(70, 55, 41, 4, NULL, NULL, 0),
(71, 57, 41, 5, 4, 3, 0),
(72, 59, 41, 3, NULL, NULL, 0),
(73, 60, 41, 2, 8, 6, 0),
(74, 61, 41, 3, NULL, NULL, 0),
(75, 62, 41, 3, NULL, NULL, 0),
(76, 66, 41, 3, NULL, NULL, 0),
(77, 67, 41, 2, 2, 2, 0),
(78, 68, 41, 2, 7, 4, 0),
(79, 69, 41, 1, NULL, NULL, 0),
(80, 70, 41, 5, 2, 7, 0),
(81, 71, 41, 5, 1, 5, 0),
(82, 72, 41, 2, 2, 1, 0),
(83, 73, 41, 2, 7, 3, 0),
(84, 74, 41, 5, 7, 5, 0),
(85, 75, 41, 5, 5, 3, 0),
(86, 77, 41, 5, 5, 6, 0),
(87, 79, 41, 5, 7, 1, 0),
(88, 80, 41, 5, 4, 9, 0),
(89, 81, 41, 5, 1, 8, 0),
(90, 82, 41, 5, 6, 4, 0),
(91, 84, 41, 5, 4, 5, 0),
(92, 85, 41, 2, 1, 7, 0),
(93, 87, 41, 4, NULL, NULL, 0),
(94, 88, 41, 5, 8, 4, 0),
(95, 90, 41, 1, NULL, NULL, 0),
(96, 92, 41, 4, NULL, NULL, 0),
(97, 93, 41, 1, NULL, NULL, 0),
(98, 95, 41, 5, 6, 8, 0),
(99, 97, 41, 4, NULL, NULL, 0),
(100, 98, 41, 5, 3, 8, 0),
(101, 2, 51, NULL, NULL, NULL, 0),
(102, 4, 51, NULL, NULL, NULL, 0),
(103, 5, 51, NULL, NULL, NULL, 0),
(104, 6, 51, NULL, NULL, NULL, 0),
(105, 7, 51, NULL, NULL, NULL, 0),
(106, 13, 51, NULL, NULL, NULL, 0),
(107, 15, 51, NULL, NULL, NULL, 0),
(108, 16, 51, NULL, NULL, NULL, 0),
(109, 18, 51, NULL, NULL, NULL, 0),
(110, 20, 51, NULL, NULL, NULL, 0),
(111, 21, 51, NULL, NULL, NULL, 0),
(112, 22, 51, NULL, NULL, NULL, 0),
(113, 23, 51, NULL, NULL, NULL, 0),
(114, 25, 51, NULL, NULL, NULL, 0),
(115, 26, 51, NULL, NULL, NULL, 0),
(116, 27, 51, NULL, NULL, NULL, 0),
(117, 28, 51, NULL, NULL, NULL, 0),
(118, 29, 51, NULL, NULL, NULL, 0),
(119, 30, 51, NULL, NULL, NULL, 0),
(120, 31, 51, NULL, NULL, NULL, 0),
(121, 33, 51, NULL, NULL, NULL, 0),
(122, 34, 51, NULL, NULL, NULL, 0),
(123, 37, 51, NULL, NULL, NULL, 0),
(124, 38, 51, NULL, NULL, NULL, 0),
(125, 40, 51, NULL, NULL, NULL, 0),
(126, 41, 51, NULL, NULL, NULL, 0),
(127, 42, 51, NULL, NULL, NULL, 0),
(128, 44, 51, NULL, NULL, NULL, 0),
(129, 45, 51, NULL, NULL, NULL, 0),
(130, 47, 51, NULL, NULL, NULL, 0),
(131, 48, 51, NULL, NULL, NULL, 0),
(132, 49, 51, NULL, NULL, NULL, 0),
(133, 52, 51, NULL, NULL, NULL, 0),
(134, 53, 51, NULL, NULL, NULL, 0),
(135, 54, 51, NULL, NULL, NULL, 0),
(136, 56, 51, NULL, NULL, NULL, 0),
(137, 58, 51, NULL, NULL, NULL, 0),
(138, 63, 51, NULL, NULL, NULL, 0),
(139, 64, 51, NULL, NULL, NULL, 0),
(140, 65, 51, NULL, NULL, NULL, 0),
(141, 76, 51, NULL, NULL, NULL, 0),
(142, 78, 51, NULL, NULL, NULL, 0),
(143, 83, 51, NULL, NULL, NULL, 0),
(144, 86, 51, NULL, NULL, NULL, 0),
(145, 89, 51, NULL, NULL, NULL, 0),
(146, 91, 51, NULL, NULL, NULL, 0),
(147, 94, 51, NULL, NULL, NULL, 0),
(148, 96, 51, NULL, NULL, NULL, 0),
(149, 99, 51, NULL, NULL, NULL, 0),
(150, 100, 51, NULL, NULL, NULL, 0),
(151, 1, 51, NULL, NULL, NULL, 0),
(152, 3, 51, NULL, NULL, NULL, 0),
(153, 8, 51, NULL, NULL, NULL, 0),
(154, 9, 51, NULL, NULL, NULL, 0),
(155, 10, 51, NULL, NULL, NULL, 0),
(156, 11, 51, NULL, NULL, NULL, 0),
(157, 12, 51, NULL, NULL, NULL, 0),
(158, 14, 51, NULL, NULL, NULL, 0),
(159, 17, 51, NULL, NULL, NULL, 0),
(160, 19, 51, NULL, NULL, NULL, 0),
(161, 24, 51, NULL, NULL, NULL, 0),
(162, 32, 51, NULL, NULL, NULL, 0),
(163, 35, 51, NULL, NULL, NULL, 0),
(164, 36, 51, NULL, NULL, NULL, 0),
(165, 39, 51, NULL, NULL, NULL, 0),
(166, 43, 51, NULL, NULL, NULL, 0),
(167, 46, 51, NULL, NULL, NULL, 0),
(168, 50, 51, NULL, NULL, NULL, 0),
(169, 51, 51, NULL, NULL, NULL, 0),
(170, 55, 51, NULL, NULL, NULL, 0),
(171, 57, 51, NULL, NULL, NULL, 0),
(172, 59, 51, NULL, NULL, NULL, 0),
(173, 60, 51, NULL, NULL, NULL, 0),
(174, 61, 51, NULL, NULL, NULL, 0),
(175, 62, 51, NULL, NULL, NULL, 0),
(176, 66, 51, NULL, NULL, NULL, 0),
(177, 67, 51, NULL, NULL, NULL, 0),
(178, 68, 51, NULL, NULL, NULL, 0),
(179, 69, 51, NULL, NULL, NULL, 0),
(180, 70, 51, NULL, NULL, NULL, 0),
(181, 71, 51, NULL, NULL, NULL, 0),
(182, 72, 51, NULL, NULL, NULL, 0),
(183, 73, 51, NULL, NULL, NULL, 0),
(184, 74, 51, NULL, NULL, NULL, 0),
(185, 75, 51, NULL, NULL, NULL, 0),
(186, 77, 51, NULL, NULL, NULL, 0),
(187, 79, 51, NULL, NULL, NULL, 0),
(188, 80, 51, NULL, NULL, NULL, 0),
(189, 81, 51, NULL, NULL, NULL, 0),
(190, 82, 51, NULL, NULL, NULL, 0),
(191, 84, 51, NULL, NULL, NULL, 0),
(192, 85, 51, NULL, NULL, NULL, 0),
(193, 87, 51, NULL, NULL, NULL, 0),
(194, 88, 51, NULL, NULL, NULL, 0),
(195, 90, 51, NULL, NULL, NULL, 0),
(196, 92, 51, NULL, NULL, NULL, 0),
(197, 93, 51, NULL, NULL, NULL, 0),
(198, 95, 51, NULL, NULL, NULL, 0),
(199, 97, 51, NULL, NULL, NULL, 0),
(200, 98, 51, NULL, NULL, NULL, 0);

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
  `UserAgegroupID` int(11) NOT NULL,
  `UserEmail` varchar(128) NOT NULL,
  `UserImageURL` varchar(256) NOT NULL,
  `UserUsertypeID` int(11) DEFAULT NULL,
  `UserRoleID` int(11) DEFAULT NULL,
  `UserGuestofID` int(11) DEFAULT NULL,
  `UserIsoffshore` tinyint(1) NOT NULL DEFAULT 0,
  `UserActive` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `UserFirstname`, `UserLastname`, `UserAgegroupID`, `UserEmail`, `UserImageURL`, `UserUsertypeID`, `UserRoleID`, `UserGuestofID`, `UserIsoffshore`, `UserActive`) VALUES
(1, 'Brittany', 'Campos', 5, 'brittany.campos@example.com', 'https://example.com/images/1.jpg', 2, 1, 2, 0, 1),
(2, 'Dillon', 'Duran', 5, 'dillon.duran@example.com', 'https://example.com/images/2.jpg', 1, 2, NULL, 0, 1),
(3, 'Cody', 'Kirk', 2, 'cody.kirk@example.com', 'https://example.com/images/3.jpg', 2, 1, 53, 0, 1),
(4, 'Tanya', 'Harris', 4, 'tanya.harris@example.com', 'https://example.com/images/4.jpg', 1, 2, NULL, 0, 1),
(5, 'Dennis', 'Barron', 3, 'dennis.barron@example.com', 'https://example.com/images/5.jpg', 1, 3, NULL, 0, 1),
(6, 'Steven', 'Rogers', 2, 'steven.rogers@example.com', 'https://example.com/images/6.jpg', 1, 3, NULL, 0, 1),
(7, 'Robert', 'Nelson', 4, 'robert.nelson@example.com', 'https://example.com/images/7.jpg', 1, 2, NULL, 0, 1),
(8, 'James', 'Obrien', 5, 'james.obrien@example.com', 'https://example.com/images/8.jpg', 2, 1, 56, 0, 1),
(9, 'Megan', 'White', 4, 'megan.white@example.com', 'https://example.com/images/9.jpg', 2, 1, 58, 0, 1),
(10, 'Thomas', 'Reed', 2, 'thomas.reed@example.com', 'https://example.com/images/10.jpg', 2, 1, 63, 0, 1),
(11, 'Angela', 'Carson', 4, 'angela.carson@example.com', 'https://example.com/images/11.jpg', 2, 1, 64, 0, 1),
(12, 'Ashley', 'Green', 3, 'ashley.green@example.com', 'https://example.com/images/12.jpg', 2, 1, 65, 0, 1),
(13, 'Victor', 'Martin', 4, 'victor.martin@example.com', 'https://example.com/images/13.jpg', 1, 2, NULL, 0, 1),
(14, 'Madison', 'Perry', 4, 'madison.perry@example.com', 'https://example.com/images/14.jpg', 2, 1, 76, 0, 1),
(15, 'Jessica', 'Kelly', 4, 'jessica.kelly@example.com', 'https://example.com/images/15.jpg', 1, 2, NULL, 0, 1),
(16, 'Tasha', 'Wright', 4, 'tasha.wright@example.com', 'https://example.com/images/16.jpg', 1, 2, NULL, 0, 1),
(17, 'Justin', 'Gutierrez', 4, 'justin.gutierrez@example.com', 'https://example.com/images/17.jpg', 2, 1, 78, 0, 1),
(18, 'Lori', 'Hull', 2, 'lori.hull@example.com', 'https://example.com/images/18.jpg', 1, 4, NULL, 0, 1),
(19, 'David', 'Valencia', 3, 'david.valencia@example.com', 'https://example.com/images/19.jpg', 2, 1, 83, 0, 1),
(20, 'Jessica', 'Bradford', 4, 'jessica.bradford@example.com', 'https://example.com/images/20.jpg', 1, 2, NULL, 0, 1),
(21, 'Jessica', 'Scott', 2, 'jessica.scott@example.com', 'https://example.com/images/21.jpg', 1, 3, NULL, 0, 1),
(22, 'Kevin', 'Evans', 2, 'kevin.evans@example.com', 'https://example.com/images/22.jpg', 1, 4, NULL, 0, 1),
(23, 'Patrick', 'Webb', 5, 'patrick.webb@example.com', 'https://example.com/images/23.jpg', 1, 2, NULL, 0, 1),
(24, 'Meagan', 'Miller', 4, 'meagan.miller@example.com', 'https://example.com/images/24.jpg', 2, 1, 86, 0, 1),
(25, 'Jason', 'King', 4, 'jason.king@example.com', 'https://example.com/images/25.jpg', 1, 2, NULL, 0, 1),
(26, 'Tracy', 'Ramos', 4, 'tracy.ramos@example.com', 'https://example.com/images/26.jpg', 1, 3, NULL, 0, 1),
(27, 'Anthony', 'Moore', 4, 'anthony.moore@example.com', 'https://example.com/images/27.jpg', 1, 2, NULL, 0, 1),
(28, 'Sarah', 'Fernandez', 2, 'sarah.fernandez@example.com', 'https://example.com/images/28.jpg', 1, 3, NULL, 0, 1),
(29, 'Stephen', 'James', 3, 'stephen.james@example.com', 'https://example.com/images/29.jpg', 1, 4, NULL, 0, 1),
(30, 'Tiffany', 'Acosta', 4, 'tiffany.acosta@example.com', 'https://example.com/images/30.jpg', 1, 3, NULL, 0, 1),
(31, 'Kristina', 'Moreno', 2, 'kristina.moreno@example.com', 'https://example.com/images/31.jpg', 1, 4, NULL, 0, 1),
(32, 'Douglas', 'Benton', 3, 'douglas.benton@example.com', 'https://example.com/images/32.jpg', 2, 1, 89, 0, 1),
(33, 'Julie', 'Sanchez', 4, 'julie.sanchez@example.com', 'https://example.com/images/33.jpg', 1, 2, NULL, 0, 1),
(34, 'Holly', 'Newton', 2, 'holly.newton@example.com', 'https://example.com/images/34.jpg', 1, 3, NULL, 0, 1),
(35, 'Thomas', 'Rasmussen', 4, 'thomas.rasmussen@example.com', 'https://example.com/images/35.jpg', 2, 1, 91, 0, 1),
(36, 'Jeremy', 'Bailey', 3, 'jeremy.bailey@example.com', 'https://example.com/images/36.jpg', 2, 1, 94, 0, 1),
(37, 'Tara', 'Mann', 4, 'tara.mann@example.com', 'https://example.com/images/37.jpg', 1, 2, NULL, 0, 1),
(38, 'Karen', 'Weaver', 4, 'karen.weaver@example.com', 'https://example.com/images/38.jpg', 1, 2, NULL, 0, 1),
(39, 'Regina', 'Thomas', 2, 'regina.thomas@example.com', 'https://example.com/images/39.jpg', 2, 1, 96, 0, 1),
(40, 'Jacqueline', 'Coleman', 3, 'jacqueline.coleman@example.com', 'https://example.com/images/40.jpg', 1, 3, NULL, 0, 1),
(41, 'Pamela', 'Cunningham', 4, 'pamela.cunningham@example.com', 'https://example.com/images/41.jpg', 1, 2, NULL, 0, 1),
(42, 'Steven', 'Davis', 5, 'steven.davis@example.com', 'https://example.com/images/42.jpg', 1, 2, NULL, 0, 1),
(43, 'Leslie', 'Garcia', 2, 'leslie.garcia@example.com', 'https://example.com/images/43.jpg', 2, 1, 99, 0, 1),
(44, 'Andrew', 'Williams', 5, 'andrew.williams@example.com', 'https://example.com/images/44.jpg', 1, 2, NULL, 0, 1),
(45, 'Erin', 'Hernandez', 2, 'erin.hernandez@example.com', 'https://example.com/images/45.jpg', 1, 4, NULL, 0, 1),
(46, 'Bryan', 'Scott', 5, 'bryan.scott@example.com', 'https://example.com/images/46.jpg', 2, 1, 2, 0, 1),
(47, 'Olivia', 'Hunt', 2, 'olivia.hunt@example.com', 'https://example.com/images/47.jpg', 1, 4, NULL, 0, 1),
(48, 'Hannah', 'Moore', 4, 'hannah.moore@example.com', 'https://example.com/images/48.jpg', 1, 2, NULL, 0, 1),
(49, 'Paul', 'Wright', 4, 'paul.wright@example.com', 'https://example.com/images/49.jpg', 1, 2, NULL, 0, 1),
(50, 'Logan', 'Wiggins', 4, 'logan.wiggins@example.com', 'https://example.com/images/50.jpg', 2, 1, 4, 0, 1),
(51, 'Monica', 'Larsen', 3, 'monica.larsen@example.com', 'https://example.com/images/51.jpg', 2, 1, 5, 0, 1),
(52, 'Cheryl', 'Obrien', 2, 'cheryl.obrien@example.com', 'https://example.com/images/52.jpg', 1, 3, NULL, 0, 1),
(53, 'Natalie', 'Green', 2, 'natalie.green@example.com', 'https://example.com/images/53.jpg', 1, 3, NULL, 0, 1),
(54, 'Ryan', 'Lewis', 4, 'ryan.lewis@example.com', 'https://example.com/images/54.jpg', 1, 2, NULL, 0, 1),
(55, 'Tina', 'Davis', 4, 'tina.davis@example.com', 'https://example.com/images/55.jpg', 2, 1, 13, 0, 1),
(56, 'Krista', 'Schmitt', 5, 'krista.schmitt@example.com', 'https://example.com/images/56.jpg', 1, 2, NULL, 0, 1),
(57, 'Michael', 'Hess', 5, 'michael.hess@example.com', 'https://example.com/images/57.jpg', 2, 1, 2, 0, 1),
(58, 'Lee', 'Schwartz', 4, 'lee.schwartz@example.com', 'https://example.com/images/58.jpg', 1, 3, NULL, 0, 1),
(59, 'Hunter', 'Rojas', 4, 'hunter.rojas@example.com', 'https://example.com/images/59.jpg', 2, 1, 15, 0, 1),
(60, 'Kenneth', 'Shaw', 2, 'kenneth.shaw@example.com', 'https://example.com/images/60.jpg', 2, 1, 6, 0, 1),
(61, 'Brandon', 'Jones', 2, 'brandon.jones@example.com', 'https://example.com/images/61.jpg', 2, 1, 22, 0, 1),
(62, 'Brenda', 'Smith', 4, 'brenda.smith@example.com', 'https://example.com/images/62.jpg', 2, 1, 7, 0, 1),
(63, 'Lisa', 'Williams', 2, 'lisa.williams@example.com', 'https://example.com/images/63.jpg', 1, 4, NULL, 0, 1),
(64, 'Taylor', 'Bruce', 4, 'taylor.bruce@example.com', 'https://example.com/images/64.jpg', 1, 2, NULL, 0, 1),
(65, 'Jeremy', 'Beard', 3, 'jeremy.beard@example.com', 'https://example.com/images/65.jpg', 1, 3, NULL, 0, 1),
(66, 'Phillip', 'Herrera', 4, 'phillip.herrera@example.com', 'https://example.com/images/66.jpg', 2, 1, 25, 0, 1),
(67, 'Pam', 'Miller', 4, 'pam.miller@example.com', 'https://example.com/images/67.jpg', 2, 1, 16, 0, 1),
(68, 'Jennifer', 'Crosby', 4, 'jennifer.crosby@example.com', 'https://example.com/images/68.jpg', 2, 1, 26, 0, 1),
(69, 'Stacy', 'Guzman', 4, 'stacy.guzman@example.com', 'https://example.com/images/69.jpg', 2, 1, 27, 0, 1),
(70, 'Karen', 'Gray', 2, 'karen.gray@example.com', 'https://example.com/images/70.jpg', 2, 1, 18, 0, 1),
(71, 'Andrew', 'Rodriguez', 4, 'andrew.rodriguez@example.com', 'https://example.com/images/71.jpg', 2, 1, 20, 0, 1),
(72, 'Jason', 'Ward', 2, 'jason.ward@example.com', 'https://example.com/images/72.jpg', 2, 1, 28, 0, 1),
(73, 'Diana', 'Hudson', 2, 'diana.hudson@example.com', 'https://example.com/images/73.jpg', 2, 1, 21, 0, 1),
(74, 'Brandi', 'Neal', 3, 'brandi.neal@example.com', 'https://example.com/images/74.jpg', 2, 1, 29, 0, 1),
(75, 'Ruth', 'Wiggins', 5, 'ruth.wiggins@example.com', 'https://example.com/images/75.jpg', 2, 1, 23, 0, 1),
(76, 'Sarah', 'Higgins', 4, 'sarah.higgins@example.com', 'https://example.com/images/76.jpg', 1, 2, NULL, 0, 1),
(77, 'Douglas', 'Warren', 4, 'douglas.warren@example.com', 'https://example.com/images/77.jpg', 2, 1, 30, 0, 1),
(78, 'Kelly', 'Ferrell', 4, 'kelly.ferrell@example.com', 'https://example.com/images/78.jpg', 1, 2, NULL, 0, 1),
(79, 'Kelly', 'Watts', 2, 'kelly.watts@example.com', 'https://example.com/images/79.jpg', 2, 1, 31, 0, 1),
(80, 'Kristen', 'Anderson', 4, 'kristen.anderson@example.com', 'https://example.com/images/80.jpg', 2, 1, 38, 0, 1),
(81, 'Sherry', 'Fowler', 4, 'sherry.fowler@example.com', 'https://example.com/images/81.jpg', 2, 1, 33, 0, 1),
(82, 'Samuel', 'Smith', 2, 'samuel.smith@example.com', 'https://example.com/images/82.jpg', 2, 1, 34, 0, 1),
(83, 'Miguel', 'Boyd', 3, 'miguel.boyd@example.com', 'https://example.com/images/83.jpg', 1, 4, NULL, 0, 1),
(84, 'Adrian', 'Maxwell', 4, 'adrian.maxwell@example.com', 'https://example.com/images/84.jpg', 2, 1, 37, 0, 1),
(85, 'Barry', 'Nichols', 3, 'barry.nichols@example.com', 'https://example.com/images/85.jpg', 2, 1, 40, 0, 1),
(86, 'Erin', 'Hayes', 4, 'erin.hayes@example.com', 'https://example.com/images/86.jpg', 1, 2, NULL, 0, 1),
(87, 'Travis', 'Chavez', 5, 'travis.chavez@example.com', 'https://example.com/images/87.jpg', 2, 1, 44, 0, 1),
(88, 'Katie', 'Reed', 4, 'katie.reed@example.com', 'https://example.com/images/88.jpg', 2, 1, 41, 0, 1),
(89, 'Karen', 'Figueroa', 3, 'karen.figueroa@example.com', 'https://example.com/images/89.jpg', 1, 3, NULL, 0, 1),
(90, 'Jessica', 'Reyes', 5, 'jessica.reyes@example.com', 'https://example.com/images/90.jpg', 2, 1, 42, 0, 1),
(91, 'Jamie', 'Thornton', 4, 'jamie.thornton@example.com', 'https://example.com/images/91.jpg', 1, 2, NULL, 0, 1),
(92, 'Tara', 'Todd', 2, 'tara.todd@example.com', 'https://example.com/images/92.jpg', 2, 1, 47, 0, 1),
(93, 'Angelica', 'Jones', 4, 'angelica.jones@example.com', 'https://example.com/images/93.jpg', 2, 1, 48, 0, 1),
(94, 'William', 'Graham', 3, 'william.graham@example.com', 'https://example.com/images/94.jpg', 1, 3, NULL, 0, 1),
(95, 'Maria', 'Marks', 2, 'maria.marks@example.com', 'https://example.com/images/95.jpg', 2, 1, 52, 0, 1),
(96, 'Benjamin', 'Barnes', 2, 'benjamin.barnes@example.com', 'https://example.com/images/96.jpg', 1, 4, NULL, 0, 1),
(97, 'Dakota', 'Cervantes', 2, 'dakota.cervantes@example.com', 'https://example.com/images/97.jpg', 2, 1, 45, 0, 1),
(98, 'Jeffrey', 'Thompson', 4, 'jeffrey.thompson@example.com', 'https://example.com/images/98.jpg', 2, 1, 54, 0, 1),
(99, 'Alexandria', 'Martin', 2, 'alexandria.martin@example.com', 'https://example.com/images/99.jpg', 1, 4, NULL, 0, 1),
(100, 'Todd', 'Pearson', 2, 'todd.pearson@example.com', 'https://example.com/images/100.jpg', 1, 4, NULL, 0, 1);

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
-- Indexes for table `Agegroups`
--
ALTER TABLE `Agegroups`
  ADD PRIMARY KEY (`AgegroupID`);

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
  ADD KEY `Users_Users_FK` (`UserGuestofID`),
  ADD KEY `Users_Agegroups` (`UserAgegroupID`);

--
-- Indexes for table `Usertypes`
--
ALTER TABLE `Usertypes`
  ADD PRIMARY KEY (`UsertypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Agegroups`
--
ALTER TABLE `Agegroups`
  MODIFY `AgegroupID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Attendees`
--
ALTER TABLE `Attendees`
  MODIFY `AttendeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

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
  ADD CONSTRAINT `Users_Agegroups` FOREIGN KEY (`UserAgegroupID`) REFERENCES `Agegroups` (`AgegroupID`),
  ADD CONSTRAINT `Users_Roles_FK` FOREIGN KEY (`UserRoleID`) REFERENCES `Roles` (`RoleID`),
  ADD CONSTRAINT `Users_Users_FK` FOREIGN KEY (`UserGuestofID`) REFERENCES `Users` (`UserID`),
  ADD CONSTRAINT `Users_Usertypes_FK` FOREIGN KEY (`UserUsertypeID`) REFERENCES `Usertypes` (`UsertypeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
