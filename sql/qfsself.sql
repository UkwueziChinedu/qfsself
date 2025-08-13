-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2025 at 06:10 PM
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
-- Database: `qfsself`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `two_factor_secret` varchar(255) DEFAULT NULL,
  `failed_attempts` int(11) DEFAULT 0,
  `last_failed_login` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `created_at`, `two_factor_secret`, `failed_attempts`, `last_failed_login`) VALUES
(1, 'chinedujunia', 'admin@admin.com', '$2y$10$lGLFXLEX7kxnPdoSam7rJuP6M8yvauFaODHKgZ6nTcUaHfkFC/c3S', '2025-08-11 14:50:27', NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_assets`
--

CREATE TABLE `user_assets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `network_badge` varchar(20) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `balance` decimal(20,8) NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `price_history` decimal(10,2) NOT NULL,
  `fiat_worth` decimal(20,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_assets`
--

INSERT INTO `user_assets` (`id`, `user_id`, `symbol`, `name`, `network_badge`, `image_url`, `balance`, `price`, `price_history`, `fiat_worth`) VALUES
(1, 2, 'BTC', 'Bitcoin', NULL, 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', 0.50000000, 65000.00, 2.50, 32500.00),
(2, 1, 'ETH', 'Ethereum', NULL, 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', 1.25000000, 3200.00, 1.10, 4000.00),
(3, 1, 'XRP', 'Ripple', NULL, 'https://assets.coingecko.com/coins/images/44/large/xrp.png', 123.45678901, 0.52, -0.70, 64.20),
(4, 1, 'BCH', 'Bitcoin Cash', NULL, 'https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png', 0.75000000, 450.00, 3.20, 337.50),
(5, 1, 'XLM', 'Stellar', NULL, 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png', 500.00000000, 0.11, -0.20, 55.00),
(6, 1, 'LTC', 'Litecoin', NULL, 'https://assets.coingecko.com/coins/images/2/large/litecoin.png', 2.50000000, 80.00, 1.80, 200.00),
(7, 1, 'TRX', 'Tron', NULL, 'https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png', 15000.00000000, 0.08, -0.50, 1200.00),
(8, 1, 'DOGE', 'Doge Coin', NULL, 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png', 100000.00000000, 0.15, 5.00, 15000.00),
(9, 1, 'ALGO', 'Algorand', NULL, 'https://assets.coingecko.com/coins/images/4380/large/download.png', 2000.00000000, 0.25, 0.30, 500.00),
(10, 1, 'SOL', 'Solana', NULL, 'https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png', 5.00000000, 150.00, 4.10, 750.00),
(11, 1, 'DOT', 'Polkadot', NULL, 'https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png', 30.00000000, 7.00, -1.50, 210.00),
(12, 1, 'ADA', 'Cardano', NULL, 'https://assets.coingecko.com/coins/images/975/large/cardano.png', 1000.00000000, 0.45, 0.90, 450.00),
(13, 1, 'BNB', 'Binance Coin', NULL, 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png', 0.25000000, 550.00, 1.30, 137.50),
(14, 1, 'USDT', 'Tether', 'TRC20', 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png', 500.00000000, 1.00, 0.00, 500.00),
(15, 1, 'USDT', 'Tether', 'BSC', 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png', 250.00000000, 1.00, 0.00, 250.00),
(16, 1, 'USDT', 'Tether', 'ERC20', 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png', 750.00000000, 1.00, 0.00, 750.00),
(17, 1, 'SHIB', 'SHIBA INU', NULL, 'https://assets.coingecko.com/coins/images/11939/large/shiba.png', 5000000.00000000, 0.00, -1.00, 125.00);

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(11) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `NAME`, `image_url`, `description`) VALUES
(1, 'Trust', 'https://qfsselfcustody.com/images/wallets/0_trust.png', NULL),
(2, 'Metamask', 'https://qfsselfcustody.com/images/wallets/1_metamask.png', NULL),
(3, 'Lobstr', 'https://qfsselfcustody.com/images/wallets/2_lobstr.png', NULL),
(4, 'Coinbase', 'https://qfsselfcustody.com/images/wallets/3_coinbase.png', NULL),
(5, 'Aktionariat', 'https://qfsselfcustody.com/images/wallets/aktionariat.png', NULL),
(6, 'Alice', 'https://qfsselfcustody.com/images/wallets/alice.png', NULL),
(7, 'Alpha Wallet', 'https://qfsselfcustody.com/images/wallets/alpha_wallet.png', NULL),
(8, 'Anchor', 'https://qfsselfcustody.com/images/wallets/anchor.png', NULL),
(9, 'Argent', 'https://qfsselfcustody.com/images/wallets/argent.png', NULL),
(10, 'At.wallet', 'https://qfsselfcustody.com/images/wallets/at.wallet.png', NULL),
(11, 'Atomic', 'https://qfsselfcustody.com/images/wallets/atomic.png', NULL),
(12, 'Authereum', 'https://qfsselfcustody.com/images/wallets/authereum.png', NULL),
(13, 'Bakkt', 'https://qfsselfcustody.com/images/wallets/bakkt.png', NULL),
(14, 'Binance Smart Chain', 'https://qfsselfcustody.com/images/wallets/binance_smart_chain.png', NULL),
(15, 'Bit Keep', 'https://qfsselfcustody.com/images/wallets/bit_keep.png', NULL),
(16, 'Bit Pay', 'https://qfsselfcustody.com/images/wallets/bit_pay.png', NULL),
(17, 'Blockchain', 'https://qfsselfcustody.com/images/wallets/blockchain.png', NULL),
(18, 'Bridge Wallet', 'https://qfsselfcustody.com/images/wallets/bridge_wallet.png', NULL),
(19, 'Coin98', 'https://qfsselfcustody.com/images/wallets/coin98.png', NULL),
(20, 'Coinomi', 'https://qfsselfcustody.com/images/wallets/coinomi.png', NULL),
(21, 'Cool Wallet S', 'https://qfsselfcustody.com/images/wallets/cool_wallet_s.png', NULL),
(22, 'Cosmostation', 'https://qfsselfcustody.com/images/wallets/cosmostation.png', NULL),
(23, 'Crypto.com Defi Wallet', 'https://qfsselfcustody.com/images/wallets/crypto.com_defi_wallet.png', NULL),
(24, 'Cybavo Wallet', 'https://qfsselfcustody.com/images/wallets/cybavo_wallet.png', NULL),
(25, 'D\'Cent Wallet', 'https://qfsselfcustody.com/images/wallets/d_cent_wallet.png', NULL),
(26, 'Dok Wallet', 'https://qfsselfcustody.com/images/wallets/dok_wallet.png', NULL),
(27, 'Easy Pocket', 'https://qfsselfcustody.com/images/wallets/easy_pocket.jpg', NULL),
(28, 'Eidoo', 'https://qfsselfcustody.com/images/wallets/eidoo.png', NULL),
(29, 'Ellipal', 'https://qfsselfcustody.com/images/wallets/ellipal.png', NULL),
(30, 'Equal', 'https://qfsselfcustody.com/images/wallets/equal.jpg', NULL),
(31, 'Exodus', 'https://qfsselfcustody.com/images/wallets/exodus.png', NULL),
(32, 'Fetch', 'https://qfsselfcustody.com/images/wallets/fetch.jpg', NULL),
(33, 'Gnosis Safe Multisig', 'https://qfsselfcustody.com/images/wallets/gnosis_safe_multisig.png', NULL),
(34, 'Graph Protocol', 'https://qfsselfcustody.com/images/wallets/graph_protocol.jpg', NULL),
(35, 'Grid Plus', 'https://qfsselfcustody.com/images/wallets/grid_plus.png', NULL),
(36, 'Harmony', 'https://qfsselfcustody.com/images/wallets/harmony.png', NULL),
(37, 'Huobi Wallet', 'https://qfsselfcustody.com/images/wallets/huobi_wallet.png', NULL),
(38, 'Iconex', 'https://qfsselfcustody.com/images/wallets/iconex.png', NULL),
(39, 'Infinito', 'https://qfsselfcustody.com/images/wallets/infinito.png', NULL),
(40, 'Infinity Wallet', 'https://qfsselfcustody.com/images/wallets/infinity_wallet.png', NULL),
(41, 'Karda Chain', 'https://qfsselfcustody.com/images/wallets/karda_chain.png', NULL),
(42, 'Keplr', 'https://qfsselfcustody.com/images/wallets/keplr.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wallet_imports`
--

CREATE TABLE `wallet_imports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `wallet_name` varchar(255) NOT NULL,
  `method` varchar(50) NOT NULL,
  `input` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallet_imports`
--

INSERT INTO `wallet_imports` (`id`, `user_id`, `wallet_name`, `method`, `input`, `created_at`) VALUES
(1, 1, 'hi', 'Phrase', 'hdfuiusnnsns', '2025-08-13 15:33:34'),
(2, 1, 'hi', 'Phrase', 'hdfuiusnnsns', '2025-08-13 15:36:28'),
(3, 1, 'hi', 'Phrase', 'dhhduuis', '2025-08-13 15:40:32'),
(4, 1, 'hi', 'Phrase', 'hhdjd', '2025-08-13 15:41:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_assets`
--
ALTER TABLE `user_assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_imports`
--
ALTER TABLE `wallet_imports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_assets`
--
ALTER TABLE `user_assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `wallet_imports`
--
ALTER TABLE `wallet_imports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
