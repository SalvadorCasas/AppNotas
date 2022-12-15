-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 22:48:01
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app_notas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authtoken_token`
--

CREATE TABLE `authtoken_token` (
  `key` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add Usuario', 6, 'add_user'),
(22, 'Can change Usuario', 6, 'change_user'),
(23, 'Can delete Usuario', 6, 'delete_user'),
(24, 'Can view Usuario', 6, 'view_user'),
(25, 'Can add Nota', 7, 'add_notes'),
(26, 'Can change Nota', 7, 'change_notes'),
(27, 'Can delete Nota', 7, 'delete_notes'),
(28, 'Can view Nota', 7, 'view_notes'),
(29, 'Can add Token', 8, 'add_token'),
(30, 'Can change Token', 8, 'change_token'),
(31, 'Can delete Token', 8, 'delete_token'),
(32, 'Can view Token', 8, 'view_token'),
(33, 'Can add token', 9, 'add_tokenproxy'),
(34, 'Can change token', 9, 'change_tokenproxy'),
(35, 'Can delete token', 9, 'delete_tokenproxy'),
(36, 'Can view token', 9, 'view_tokenproxy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8_spanish2_ci DEFAULT NULL,
  `object_repr` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext COLLATE utf8_spanish2_ci NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `model` varchar(100) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(8, 'authtoken', 'token'),
(9, 'authtoken', 'tokenproxy'),
(4, 'contenttypes', 'contenttype'),
(7, 'notes', 'notes'),
(5, 'sessions', 'session'),
(6, 'users', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-12-12 17:30:24.074015'),
(2, 'contenttypes', '0002_remove_content_type_name', '2022-12-12 17:30:24.507855'),
(3, 'auth', '0001_initial', '2022-12-12 17:30:26.806188'),
(4, 'auth', '0002_alter_permission_name_max_length', '2022-12-12 17:30:27.306685'),
(5, 'auth', '0003_alter_user_email_max_length', '2022-12-12 17:30:27.336606'),
(6, 'auth', '0004_alter_user_username_opts', '2022-12-12 17:30:27.368520'),
(7, 'auth', '0005_alter_user_last_login_null', '2022-12-12 17:30:27.394466'),
(8, 'auth', '0006_require_contenttypes_0002', '2022-12-12 17:30:27.415395'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2022-12-12 17:30:27.444318'),
(10, 'auth', '0008_alter_user_username_max_length', '2022-12-12 17:30:27.469251'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2022-12-12 17:30:27.494184'),
(12, 'auth', '0010_alter_group_name_max_length', '2022-12-12 17:30:28.348407'),
(13, 'auth', '0011_update_proxy_permissions', '2022-12-12 17:30:28.395281'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2022-12-12 17:30:28.426198'),
(15, 'users', '0001_initial', '2022-12-12 17:30:31.439277'),
(16, 'admin', '0001_initial', '2022-12-12 17:30:32.906467'),
(17, 'admin', '0002_logentry_remove_auto_add', '2022-12-12 17:30:32.940379'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-12 17:30:32.971294'),
(19, 'authtoken', '0001_initial', '2022-12-12 17:30:33.606599'),
(20, 'authtoken', '0002_auto_20160226_1747', '2022-12-12 17:30:33.657462'),
(21, 'authtoken', '0003_tokenproxy', '2022-12-12 17:30:33.683394'),
(22, 'notes', '0001_initial', '2022-12-12 17:30:33.827013'),
(23, 'notes', '0002_alter_notes_options_notes_user_and_more', '2022-12-12 17:30:34.375562'),
(24, 'sessions', '0001_initial', '2022-12-12 17:30:34.666841'),
(25, 'users', '0002_user_last_login_alter_user_groups_alter_user_id_and_more', '2022-12-12 17:30:34.776547'),
(26, 'users', '0003_alter_user_managers', '2022-12-12 17:30:34.852346'),
(27, 'users', '0004_alter_user_managers', '2022-12-12 17:30:34.897225'),
(28, 'notes', '0003_auto_20221212_1515', '2022-12-12 18:15:48.617112'),
(29, 'notes', '0004_alter_notes_creation_date', '2022-12-12 18:25:26.645928'),
(30, 'notes', '0005_alter_notes_user', '2022-12-12 18:41:19.748554'),
(31, 'notes', '0006_alter_notes_user', '2022-12-14 17:59:49.501030');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `session_data` longtext COLLATE utf8_spanish2_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notes_notes`
--

CREATE TABLE `notes_notes` (
  `id` bigint(20) NOT NULL,
  `title` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `creation_date` datetime(6) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `notes_notes`
--

INSERT INTO `notes_notes` (`id`, `title`, `description`, `creation_date`, `user_id`) VALUES
(1, 'Primer nota', 'aaaa', '2022-12-12 18:42:37.560931', NULL),
(2, 'Nota 2', 'Nota creada desde django rest', '2022-12-15 21:41:12.586789', NULL),
(3, 'Nota 3', 'Nota creada desde django rest, intento 2', '2022-12-15 21:41:31.425106', NULL),
(4, 'Nota 4', 'Nota creada desde django rest, ultimo intento, viene funcionando bien', '2022-12-15 21:42:06.432902', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user`
--

CREATE TABLE `users_user` (
  `id` bigint(20) NOT NULL,
  `password` varchar(128) COLLATE utf8_spanish2_ci NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `users_user`
--

INSERT INTO `users_user` (`id`, `password`, `is_superuser`, `username`, `email`, `name`, `last_name`, `is_staff`, `last_login`) VALUES
(2, 'pbkdf2_sha256$260000$Th1dS0rGN3ZmXHGEjiwGDO$IT53sCkwegN9RTaGs08Ct/qeDKyi7/88C6hWJYVkjok=', 0, 'ssss', 'salvadorcasas11@gmail.com', 'salvador', 'casas', 0, NULL),
(4, 'pbkdf2_sha256$260000$nCj1owzK4hYStCsFzB5j7a$EG8/z+8FmZ8KwDqYGQj+NttU0C7mLhPkbei0zrTENLY=', 0, 'Gabi', 'gabi33@gmail.com', 'Gabriela', NULL, 0, NULL),
(5, 'pbkdf2_sha256$260000$Ea0oD2woTFSpnQPs9bWYO6$Zd2kSw7GFTBsmXTEu3IoXZNxdGUTC4Qi8f/zI7TC3JA=', 0, 'juan44', 'juancitooo@gmail.com', 'Juan', NULL, 0, NULL),
(6, 'pbkdf2_sha256$260000$rM3kjldfJ3CvD1dxPoSpQE$OQEaDknB1p5CYT4Cg+naUSKnjRm+KoxQ5os/yG5EALE=', 0, 'mariadb', 'mariadb@gmail.com', 'Maria', NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user_groups`
--

CREATE TABLE `users_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user_user_permissions`
--

CREATE TABLE `users_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `notes_notes`
--
ALTER TABLE `notes_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notes_notes_user_id_e6485e57_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `users_user`
--
ALTER TABLE `users_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_groups_user_id_group_id_b88eab82_uniq` (`user_id`,`group_id`),
  ADD KEY `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_user_permissions_user_id_permission_id_43338c45_uniq` (`user_id`,`permission_id`),
  ADD KEY `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `notes_notes`
--
ALTER TABLE `notes_notes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users_user`
--
ALTER TABLE `users_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `authtoken_token`
--
ALTER TABLE `authtoken_token`
  ADD CONSTRAINT `authtoken_token_user_id_35299eff_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `notes_notes`
--
ALTER TABLE `notes_notes`
  ADD CONSTRAINT `notes_notes_user_id_e6485e57_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD CONSTRAINT `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `users_user_groups_user_id_5f6f5a90_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD CONSTRAINT `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `users_user_user_permissions_user_id_20aca447_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
