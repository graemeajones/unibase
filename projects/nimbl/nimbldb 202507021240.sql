-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 141.94.205.33
-- Generation Time: Jul 02, 2025 at 01:42 PM
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
-- Database: `nimbldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Events`
--

CREATE TABLE `Events` (
  `EventID` int(11) NOT NULL,
  `EventName` varchar(64) NOT NULL,
  `EventDescription` varchar(256) NOT NULL,
  `EventStart` datetime NOT NULL,
  `EventDuration` int(11) NOT NULL,
  `EventPetID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Events`
--

INSERT INTO `Events` (`EventID`, `EventName`, `EventDescription`, `EventStart`, `EventDuration`, `EventPetID`) VALUES
(1, 'Vet Appointment', 'Annual check-up and vaccinations', '2025-07-01 10:00:00', 60, 1),
(2, 'Vet Appointment', 'Worming at vet', '2025-08-27 15:30:00', 15, 3);

-- --------------------------------------------------------

--
-- Table structure for table `Pets`
--

CREATE TABLE `Pets` (
  `PetID` int(11) NOT NULL,
  `PetName` varchar(32) NOT NULL,
  `PetType` varchar(32) NOT NULL,
  `PetBreed` varchar(32) DEFAULT NULL,
  `PetColour` varchar(32) DEFAULT NULL,
  `PetAge` int(11) DEFAULT NULL,
  `PetSex` varchar(16) DEFAULT NULL,
  `PetImageURL` varchar(256) DEFAULT NULL,
  `PetOwnerID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Pets`
--

INSERT INTO `Pets` (`PetID`, `PetName`, `PetType`, `PetBreed`, `PetColour`, `PetAge`, `PetSex`, `PetImageURL`, `PetOwnerID`) VALUES
(1, 'Roger', 'Rabbit', 'French Lop', 'White', 5, 'Male', 'https://www.thesprucepets.com/thmb/QtPe7QMQer-O8Ypu8Hedl__0ogA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1350651044-61e4ab434928493c8b1b149bb24d23a1.jpg', 1),
(2, 'Steve', 'Dog', 'Labrador', 'Black', 7, 'Male', 'https://www.bonza.dog/wp-content/uploads/Labrador-Dog-Health-Issues-Comprehensive-Guide-to-Common-Problems.webp', 1),
(3, 'Joe', 'Cat', 'Bengal', 'White', 3, 'Male', 'https://www.thebengalcats.com/cdn/shop/files/image_2acead6e-bbcf-49d9-a27f-d0007ef38f53.jpg?v=1684226497', 2),
(4, 'Max', 'Dog', 'Labrador Retriever', 'Black', 5, 'Male', 'https://cdn.pixabay.com/photo/2019/09/10/09/23/dog-4465690_640.jpg', 1),
(5, 'Bella', 'Dog', 'Dalmatian', 'White with Black Spots', 3, 'Female', 'https://cdn.pixabay.com/photo/2021/05/09/10/51/dalmatian-6240486_640.jpg', 2),
(6, 'Luna', 'Cat', 'Bengal', 'Brown Spotted', 2, 'Female', 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg', 4),
(7, 'Oliver', 'Cat', 'Siamese', 'Cream', 3, 'Male', 'https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_640.jpg', 5),
(8, 'Daisy', 'Rabbit', 'French Lop', 'White', 4, 'Female', 'https://cdn.pixabay.com/photo/2017/04/05/23/25/rabbit-2206752_640.jpg', 6),
(9, 'Bunny', 'Rabbit', 'Dwarf Rabbit', 'Grey', 1, 'Male', 'https://cdn.pixabay.com/photo/2017/08/18/13/51/dwarf-rabbit-2655044_640.jpg', 7),
(10, 'Rocky', 'Dog', 'Australian Shepherd', 'Tri-color', 6, 'Male', 'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_640.jpg', 8),
(11, 'Milo', 'Cat', 'Domestic Shorthair', 'Tabby', 2, 'Male', 'https://cdn.pixabay.com/photo/2023/05/19/19/43/cat-8005275_1280.jpg', 9),
(12, 'Coco', 'Dog', 'Labrador Retriever', 'Yellow', 7, 'Female', 'https://cdn.pixabay.com/photo/2021/04/07/05/39/labrador-retriever-6158095_640.jpg', 10),
(13, 'Shadow', 'Dog', 'Dalmatian', 'White with Black Spots', 4, 'Male', 'https://cdn.pixabay.com/photo/2021/05/09/10/54/dalmatian-6240488_640.jpg', 11),
(14, 'Simba', 'Cat', 'Maine Coon', 'Brown Tabby', 3, 'Male', 'https://cdn.pixabay.com/photo/2015/05/22/05/52/cat-778315_640.jpg', 12),
(15, 'Thumper', 'Rabbit', 'European Hare', 'Brown', 2, 'Female', 'https://media.istockphoto.com/id/2194279664/photo/young-european-hare.jpg?b=1&s=612x612&w=0&k=20&c=SJiUShHGynPoxhoCkPLgT4NEoKxSSUMq4239a8FXTc8=', 13),
(16, 'Nala', 'Cat', 'British Shorthair', 'Blue Grey', 5, 'Female', 'https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_640.jpg', 14),
(17, 'Jack', 'Dog', 'Jack Russell Terrier', 'White and Brown', 6, 'Male', 'https://cdn.pixabay.com/photo/2020/02/14/15/35/dog-4848668_640.jpg', 15),
(18, 'Lola', 'Rabbit', 'Dwarf Rabbit', 'Light Grey', 1, 'Female', 'https://cdn.pixabay.com/photo/2022/05/23/19/28/rabbit-7217001_640.jpg', 16),
(19, 'Rex', 'Dog', 'Labrador Retriever', 'Yellow', 8, 'Male', 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg', 1),
(20, 'Whiskers', 'Cat', 'Siberian', 'Grey', 4, 'Male', 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png', 2),
(21, 'Benny', 'Rabbit', 'French Lop', 'White', 5, 'Male', 'https://cdn.pixabay.com/photo/2017/07/23/16/18/rabbit-2531797_640.jpg', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Tasks`
--

CREATE TABLE `Tasks` (
  `TaskID` int(11) NOT NULL,
  `TaskName` varchar(64) NOT NULL,
  `TaskDescription` varchar(512) NOT NULL,
  `TaskStart` datetime DEFAULT NULL,
  `TaskEnd` datetime DEFAULT NULL,
  `TaskImportance` int(11) DEFAULT NULL,
  `TaskDifficulty` int(11) DEFAULT NULL,
  `TaskPetID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Tasks`
--

INSERT INTO `Tasks` (`TaskID`, `TaskName`, `TaskDescription`, `TaskStart`, `TaskEnd`, `TaskImportance`, `TaskDifficulty`, `TaskPetID`) VALUES
(1, 'Assault Course', 'Setup assault couse made up of fences constructed from ribbons of carrot.', '2025-06-17 13:00:00', '2025-06-17 14:00:00', 4, 4, 1),
(2, 'Playtime with Toys', 'Spend 30 minutes playing with favorite toys.', '2025-06-22 14:00:00', '2025-06-22 14:30:00', 3, 1, 6),
(3, 'Morning Walk', 'Take pet for a 30-minute walk around the park.', '2025-06-18 07:30:00', '2025-06-18 08:00:00', 3, 2, 2),
(4, 'Training Session', 'Basic obedience training for 1 hour.', '2025-06-20 15:00:00', '2025-06-20 16:00:00', 4, 4, 4),
(5, 'Feeding Time', 'Prepare and feed a healthy meal.', '2025-06-23 12:00:00', '2025-06-23 12:15:00', 5, 1, 7),
(6, 'Clean Cage', 'Deep clean pet\'s cage and replace bedding.', '2025-06-25 10:00:00', '2025-06-25 10:30:00', 4, 3, 9),
(7, 'Evening Walk', 'Walk pet around neighborhood for 45 minutes.', '2025-06-26 18:00:00', '2025-06-26 18:45:00', 3, 2, 10),
(8, 'Training Commands', 'Practice basic commands like sit, stay, and come.', '2025-06-28 15:00:00', '2025-06-28 15:30:00', 4, 3, 12),
(9, 'Nail Clipping', 'Trim pet\'s nails carefully.', '2025-06-29 10:00:00', '2025-06-29 10:15:00', 3, 2, 13),
(10, 'Play Fetch', 'Play fetch in the backyard for exercise.', '2025-06-30 16:00:00', '2025-06-30 16:30:00', 3, 1, 14),
(11, 'Feed Breakfast', 'Give morning meal and fresh water.', '2025-07-02 08:00:00', '2025-07-02 08:15:00', 5, 1, 16),
(12, 'Evening Walk', 'Take dog for an evening walk around the park.', '2025-07-05 18:00:00', '2025-07-05 18:45:00', 5, 2, 19),
(13, 'Playtime', 'Interactive play with toys to keep pet active.', '2025-07-06 12:00:00', '2025-07-06 12:30:00', 3, 1, 20),
(14, 'Playtime with Toys', 'Spend 30 minutes playing with favorite toys.', '2025-06-24 14:30:00', '2025-06-26 13:30:00', 5, 1, 1),
(15, 'Evening Walk', 'Take the rabit for an evening walk around the park.', '2025-06-27 11:30:00', '2025-06-27 19:00:00', 3, 2, 1),
(16, 'Clipping nails', 'Wimbledon Petticure', '2025-08-02 11:00:00', '2025-08-02 12:00:00', 2, 3, 3),
(17, 'Clipping nails', 'Wimbledon Petticure', '2025-08-02 11:00:00', '2025-08-02 12:00:00', 2, 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `UserFirstname` varchar(64) NOT NULL,
  `UserLastname` varchar(64) NOT NULL,
  `UserEmail` varchar(128) NOT NULL,
  `UserImageURL` varchar(256) NOT NULL,
  `UserUsertypeID` int(11) DEFAULT NULL,
  `UserLevel` int(11) NOT NULL DEFAULT 0,
  `UserGems` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `UserFirstname`, `UserLastname`, `UserEmail`, `UserImageURL`, `UserUsertypeID`, `UserLevel`, `UserGems`) VALUES
(1, 'Graeme', 'Jones', 'G.Jones@kingston.ac.uk', 'https://avatars.githubusercontent.com/u/48164351?s=400&u=70e6fedaa5b9cd794807b73c5748f72af4efc328&v=4', 1, 0, 0),
(2, 'Bob', 'Ross', 'bross@kingston.ac.uk', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoHDdcekKSGl-5gzbOJNeVbtgpqdwhljlrkYDIw9I58UA2r81dnE_Pof4_E5IQhzLpM5PMKsKP5OIR4aAZwz8zpg', 1, 0, 0),
(3, 'Alice', 'Nguyen', 'alice.nguyen@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMzgwNjkuanBlZw==', 1, 0, 0),
(4, 'James', 'Taylor', 'james.taylor@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxMTM2OS5qcGVn', 1, 0, 0),
(5, 'David', 'Clark', 'david.clark@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMjY3MzUuanBlZw==', 1, 0, 0),
(6, 'Sophia', 'Martin', 'sophia.martin@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0MDYwOC5qcGVn', 1, 0, 0),
(7, 'Liam', 'Brown', 'liam.brown@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMTQwNzcuanBlZw==', 1, 0, 0),
(8, 'Emily', 'Kim', 'emily.kim@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxMjg0NS5qcGVn', 1, 0, 0),
(9, 'Noah', 'Anderson', 'noah.anderson@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMzkzMzguanBlZw==', 1, 0, 0),
(10, 'Ava', 'Singh', 'ava.singh@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkOTk5OC5qcGVn', 1, 0, 0),
(11, 'Benjamin', 'Lee', 'benjamin.lee@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQzMzc0LmpwZWc=', 1, 0, 0),
(12, 'Chloe', 'White', 'chloe.white@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNDUzNTMuanBlZw==', 1, 0, 0),
(13, 'Lucas', 'Walker', 'lucas.walker@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkMzE5NjguanBlZw==', 1, 0, 0),
(14, 'Isabella', 'Baker', 'isabella.baker@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQ0NzI5MS5qcGVn', 1, 0, 0),
(15, 'Henry', 'Wright', 'henry.wright@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQyNjYzNi5qcGVn', 1, 0, 0),
(16, 'Ella', 'Carter', 'ella.carter@example.com', 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL21hbi9zZWVkNDEwOTAuanBlZw==', 1, 0, 0),
(17, 'Aseem', 'Ahmad', 'admin@nimbl.io', 'https://cdn3.emoji.gg/emojis/8125-admin-blue.png', 2, 0, 0),
(18, 'Callum', 'Findlay', 'callum@findlay-family.com', 'https://images.generated.photos/bQRglh5kj-SvfYQE2D4k0K5H0Od8xSUCrILFtPqAHoM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTA0NDA4LmpwZw.jpg', 1, 99, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Usertypes`
--

CREATE TABLE `Usertypes` (
  `UsertypeID` int(11) NOT NULL,
  `UsertypeName` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Usertypes`
--

INSERT INTO `Usertypes` (`UsertypeID`, `UsertypeName`) VALUES
(1, 'Client'),
(2, 'Administrator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Events`
--
ALTER TABLE `Events`
  ADD PRIMARY KEY (`EventID`),
  ADD KEY `Events_Pets_FK` (`EventPetID`);

--
-- Indexes for table `Pets`
--
ALTER TABLE `Pets`
  ADD PRIMARY KEY (`PetID`),
  ADD KEY `Pets_Users_FK` (`PetOwnerID`);

--
-- Indexes for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`TaskID`),
  ADD KEY `Tasks_Pets_FK` (`TaskPetID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `Users_Usertypes_FK` (`UserUsertypeID`);

--
-- Indexes for table `Usertypes`
--
ALTER TABLE `Usertypes`
  ADD PRIMARY KEY (`UsertypeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Events`
--
ALTER TABLE `Events`
  MODIFY `EventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Pets`
--
ALTER TABLE `Pets`
  MODIFY `PetID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `Tasks`
--
ALTER TABLE `Tasks`
  MODIFY `TaskID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Usertypes`
--
ALTER TABLE `Usertypes`
  MODIFY `UsertypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Events`
--
ALTER TABLE `Events`
  ADD CONSTRAINT `Events_Pets_FK` FOREIGN KEY (`EventPetID`) REFERENCES `Pets` (`PetID`);

--
-- Constraints for table `Pets`
--
ALTER TABLE `Pets`
  ADD CONSTRAINT `Pets_Users_FK` FOREIGN KEY (`PetOwnerID`) REFERENCES `Users` (`UserID`);

--
-- Constraints for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD CONSTRAINT `Tasks_Pets_FK` FOREIGN KEY (`TaskPetID`) REFERENCES `Pets` (`PetID`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_Usertypes_FK` FOREIGN KEY (`UserUsertypeID`) REFERENCES `Usertypes` (`UsertypeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
