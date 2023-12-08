-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 10:33 AM
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
-- Table structure for table `tmast_sub_category`
--

CREATE TABLE `tmast_sub_category` (
  `id` int(11) NOT NULL,
  `category_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmast_sub_category`
--

INSERT INTO `tmast_sub_category` (`id`, `category_code`, `name`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'PNM-01', 'RM A Habis', 'RM-01\r\n', '2023-10-12 15:35:39', NULL),
(2, 'PNM-01', 'RM B Habis', 'RM-02', '2023-10-12 15:35:39', NULL),
(3, 'PNM-01', 'PM Pergi', 'PM-01', '2023-10-12 15:36:52', NULL),
(4, 'PM-01', 'Problem Blade', 'PB-04', '2023-10-12 15:37:27', NULL),
(5, 'PM-01', 'Problem Stoper', 'PB-02', '2023-10-12 15:37:27', NULL),
(6, 'PM-01', 'Problem Rotor', 'PB-03', '2023-10-12 15:37:27', NULL),
(7, 'PM-01', 'Problem Rotor', 'PB-01', '2023-10-12 15:37:27', NULL),
(8, 'DND', 'Dandori Product', 'DNDP1', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmast_sub_category`
--
ALTER TABLE `tmast_sub_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmast_sub_category`
--
ALTER TABLE `tmast_sub_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
