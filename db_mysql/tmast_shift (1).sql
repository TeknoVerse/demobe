-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 11:42 AM
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
-- Database: `teknoverse_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `tmast_shift`
--

CREATE TABLE `tmast_shift` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `start` time DEFAULT NULL,
  `end` time DEFAULT NULL,
  `start_time_off_1` time DEFAULT NULL,
  `start_time_off_2` time DEFAULT NULL,
  `start_time_off_3` time DEFAULT NULL,
  `start_time_off_4` time DEFAULT NULL,
  `start_time_off_5` time DEFAULT NULL,
  `start_time_off_6` time DEFAULT NULL,
  `end_time_off_1` time DEFAULT NULL,
  `end_time_off_2` time DEFAULT NULL,
  `end_time_off_3` time DEFAULT NULL,
  `end_time_off_4` time DEFAULT NULL,
  `end_time_off_5` time DEFAULT NULL,
  `end_time_off_6` time DEFAULT NULL,
  `duration_time_off` time DEFAULT NULL,
  `loading_time` time DEFAULT NULL,
  `past_day` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmast_shift`
--

INSERT INTO `tmast_shift` (`id`, `name`, `category`, `start`, `end`, `start_time_off_1`, `start_time_off_2`, `start_time_off_3`, `start_time_off_4`, `start_time_off_5`, `start_time_off_6`, `end_time_off_1`, `end_time_off_2`, `end_time_off_3`, `end_time_off_4`, `end_time_off_5`, `end_time_off_6`, `duration_time_off`, `loading_time`, `past_day`, `createdAt`, `updatedAt`) VALUES
(1, 'shift_1', NULL, '06:00:00', '14:15:00', '09:45:00', '11:50:00', NULL, NULL, NULL, NULL, '10:00:00', '12:30:00', NULL, NULL, NULL, NULL, '00:55:00', '07:20:00', 0, NULL, NULL),
(2, 'shift_2\n', NULL, '14:10:00', '22:15:00', '15:25:00', '18:00:00', NULL, NULL, NULL, NULL, '15:40:00', '18:40:00', NULL, NULL, NULL, NULL, '00:55:00', '07:10:00', 0, NULL, NULL),
(3, 'shift_3\r\n', NULL, '22:10:00', '06:05:00', '00:00:00', '04:40:00', NULL, NULL, NULL, NULL, '00:45:00', '04:50:00', NULL, NULL, NULL, NULL, '00:55:00', '07:00:00', 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmast_shift`
--
ALTER TABLE `tmast_shift`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmast_shift`
--
ALTER TABLE `tmast_shift`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
