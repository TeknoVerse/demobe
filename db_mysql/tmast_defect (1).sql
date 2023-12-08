-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 11:46 AM
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
-- Table structure for table `tmast_defect`
--

CREATE TABLE `tmast_defect` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `machine_group` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmast_defect`
--

INSERT INTO `tmast_defect` (`id`, `code`, `name`, `machine_group`, `createdAt`, `updatedAt`) VALUES
(10, 'W4HF9', 'Fraying Core', 'Ct78U9', '2023-10-24 08:53:26', '2023-10-24 08:53:26'),
(11, 'H67HU', 'Terminal Bending', 'Ct78U9', '2023-10-24 08:54:07', '2023-10-24 08:54:07'),
(12, 'DMG7H', 'Damage Core', 'Ct78U9', '2023-10-24 08:54:44', '2023-10-24 08:54:44'),
(13, 'UTH5FG', 'Damage Terminal', 'Ct78U9', '2023-10-24 08:55:10', '2023-10-24 08:55:10'),
(14, 'ST6YTY', 'Wire Damage', 'Ct78U9', '2023-10-24 08:55:29', '2023-10-24 08:55:29'),
(15, 'INK9L', 'Damage Insulation', 'Ct78U9', '2023-10-24 08:55:44', '2023-10-24 08:55:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmast_defect`
--
ALTER TABLE `tmast_defect`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmast_defect`
--
ALTER TABLE `tmast_defect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
