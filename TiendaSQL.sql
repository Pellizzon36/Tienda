-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla tienda.productos: ~6 rows (aproximadamente)
INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `disponible`) VALUES
	(1, 'Laptop', 'Laptop HP con pantalla de 15 pulgadas', 30000, 'true'),
	(2, 'Telefono', 'Teléfono inteligente Android', 50000, 'true'),
	(3, 'Tablet', 'Tablet Samsung con pantalla de 10 pulgadas', 200, 'false'),
	(4, 'Mouse', 'Mouse inalámbrico para computadora', 20, 'true'),
	(5, 'Pendrive', 'Pendrive de 1tb marca Verbatin', 30, 'true'),
	(6, 'Celular', 'Xiaomi Poco X3 128gb 8 rom', 125000, 'true'),
	(7, 'Celular', 'Motorola Edge 256int 8 ram', 125000, 'true');

-- Volcando datos para la tabla tienda.vendedores: ~6 rows (aproximadamente)
INSERT INTO `vendedores` (`id`, `nombre`, `apellido`, `puesto`, `activo`) VALUES
	(1, 'Dario', 'Pellizzon', 'Jefe', 'true'),
	(2, 'Maria', 'Lopez', 'Vendedora', 'true'),
	(3, 'Carlos', 'Martinez', 'Gerente', 'true'),
	(4, 'Laura', 'Garcia', 'Vendedora', 'False'),
	(5, 'Daniel', 'Pellizzon', 'Supervisor', 'True'),
	(7, 'Victoria', 'Orellana', 'Empleada', 'True');

-- Volcando datos para la tabla tienda.ventas: ~5 rows (aproximadamente)
INSERT INTO `ventas` (`id`, `id_producto`, `id_vendedor`, `fecha`, `total`) VALUES
	(1, 1, 1, '2023-10-15', 600),
	(2, 2, 2, '2023-10-16', 300),
	(3, 4, 1, '2023-10-16', 20),
	(4, 1, 3, '2023-10-17', 600),
	(5, 3, 2, '2023-10-18', 200);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
