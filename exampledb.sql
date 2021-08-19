-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2021 at 06:13 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `facility`
--

CREATE TABLE `facility` (
  `list_id` int(3) NOT NULL,
  `facilities` varchar(15) NOT NULL,
  `list_item` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `facility`
--

INSERT INTO `facility` (`list_id`, `facilities`, `list_item`) VALUES
(1, 'bedroom', 'bed'),
(2, 'bedroom', 'pillow'),
(3, 'bedroom', 'table'),
(4, 'bedroom', 'chair'),
(5, 'bedroom', 'wardrobe'),
(6, 'bedroom', 'mirror'),
(7, 'bedroom', 'stand hanger'),
(8, 'bedroom', 'window'),
(9, 'bathroom', 'shower'),
(10, 'bathroom', 'flush toilet'),
(11, 'bathroom', 'jet washer'),
(12, 'bathroom', 'towel hanger'),
(13, 'public', 'living room'),
(14, 'public', 'kitchen'),
(15, 'public', 'drying room'),
(16, 'public', 'bathroom'),
(17, 'public', 'bike parking');

-- --------------------------------------------------------

--
-- Table structure for table `occupancy`
--

CREATE TABLE `occupancy` (
  `room_id` char(3) NOT NULL,
  `user_id` int(3) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `check_in` date DEFAULT NULL,
  `check_out` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `occupancy`
--

INSERT INTO `occupancy` (`room_id`, `user_id`, `name`, `check_in`, `check_out`) VALUES
('A-1', NULL, NULL, NULL, NULL),
('A-2', 4, 'Nia', '2020-09-03', '2021-08-03'),
('A-3', 7, 'Rangga', '2021-03-09', '2021-11-10'),
('B-1', 3, 'Ryan', '2020-08-15', '2021-08-15'),
('B-2', 8, 'Icha', '2021-03-17', '2021-10-17'),
('B-3', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` char(3) NOT NULL,
  `price` int(11) NOT NULL,
  `room_size` varchar(15) NOT NULL,
  `bed` varchar(15) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `price`, `room_size`, `bed`, `description`) VALUES
('A-1', 850000, '2.5 x 3 m', '90 x 200 cm', 'standard room'),
('A-2', 850000, '2.5 x 3 m', '90 x 200 cm', 'standard room'),
('A-3', 850000, '2.5 x 3 m', '90 x 200 cm', 'standard room'),
('B-1', 875000, '2.7 x 3 m', '100 x 200 cm', 'superior room'),
('B-2', 875000, '2.7 x 3 m', '100 x 200 cm', 'superior room'),
('B-3', 875000, '2.7 x 3 m', '100 x 200 cm', 'superior room');

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `user_id` int(3) NOT NULL DEFAULT 0,
  `name` varchar(10) NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timetable`
--

INSERT INTO `timetable` (`user_id`, `name`, `check_in`, `check_out`) VALUES
(1, 'Zainal', '2020-07-05', '2021-02-05'),
(2, 'Isti', '2020-07-24', '2020-11-24'),
(3, 'Ryan', '2020-08-15', '2021-08-15'),
(4, 'Nia', '2020-09-03', '2021-09-03'),
(5, 'Hendri', '2020-10-08', '2021-01-08'),
(6, 'Resta', '2020-12-03', '2021-05-03'),
(7, 'Rangga', '2021-03-10', '2021-11-10'),
(8, 'Icha', '2021-03-17', '2021-10-17');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(3) NOT NULL,
  `name` varchar(10) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `id_card_number` char(16) NOT NULL,
  `birthplace` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `religion` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `full_name`, `id_card_number`, `birthplace`, `birthdate`, `address`, `religion`, `phone_number`) VALUES
(1, 'Zainal', 'Abidin Zainal', '1010101010101010', 'Malang', '1960-10-01', 'Malang', 'Islam', '081010101010'),
(2, 'Isti', 'Istikomahsitoh', '2020202020202020', 'Kediri', '1970-10-10', 'Madiun', 'Islam', '082020202020'),
(3, 'Ryan', 'Ananto Prima Ryan', '3030303030303030', 'Palembang', '1989-12-11', 'Jakarta', 'Khatolik', '083030303030'),
(4, 'Nia', 'Mega Putri Irnia', '4040404040404040', 'Surabaya', '1990-03-08', 'Malang', 'Islam', '084040404040'),
(5, 'Hendri', 'Febrianto Hendri', '5050505050505050', 'Medan', '1990-02-25', 'Blitar', 'Hindu', '085050505050'),
(6, 'Resta', 'Zainistya Putri Irresta', '6060606060606060', 'Malang', '1992-03-23', 'Solo', 'Islam', '086060606060'),
(7, 'Rangga', 'Laksana Agil Putra Irrangga', '7070707070707070', 'Yogyakarta', '1993-11-11', 'Bandung', 'Islam', '087070707070'),
(8, 'Icha', 'Putri Aisya', '8080808080808080', 'Jakarta', '1994-08-08', 'Bali', 'Islam', '088080808080');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`list_id`);

--
-- Indexes for table `occupancy`
--
ALTER TABLE `occupancy`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `name` (`name`),
  ADD KEY `check_in` (`check_in`),
  ADD KEY `check_out` (`check_out`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `facility`
--
ALTER TABLE `facility`
  MODIFY `list_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `occupancy`
--
ALTER TABLE `occupancy`
  ADD CONSTRAINT `occupancy_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `occupancy_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `occupancy_ibfk_3` FOREIGN KEY (`name`) REFERENCES `user` (`name`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `timetable`
--
ALTER TABLE `timetable`
  ADD CONSTRAINT `timetable_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `timetable_ibfk_2` FOREIGN KEY (`name`) REFERENCES `user` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
