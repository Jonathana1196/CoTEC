-- #######################################################
--                          CoTEC
-- #######################################################

-- =======================================================
-- Descripcion: Creacion de la tabla PACIENTE y los 
-- atributos que la compone y su tipo de dato.
-- =======================================================
CREATE TABLE PACIENTE (
	Cedula INT NOT NULL,
	Nombre VARCHAR(15) NOT NULL,
	Apellido VARCHAR(15) NOT NULL,
	Edad INT NOT NULL,
	Nacionalidad  VARCHAR(20) NOT NULL,
	Internado VARCHAR(2) NOT NULL,
	UCI VARCHAR(2) NOT NULL,
	Region INT NOT NULL,
	Estado INT NOT NULL,
	FechaIngreso DATE NOT NULL,
	PRIMARY KEY (Cedula)
);

-- =======================================================
-- Descripcion: Creacion de la tabla ESTADO y asignacion 
-- de los atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE ESTADO (
	Id INT NOT NULL IDENTITY(1,1),
	Descripcion VARCHAR(25),
	PRIMARY KEY (Id)
);

-- =======================================================
-- Descripcion:  Creacion de la tabla MEDICACOIN y asigna_ 
-- cion de los atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE MEDICACION (
	Id INT NOT NULL IDENTITY(1,1),
	Nombre VARCHAR(50) NOT NULL,
	CasaFarmaceutica VARCHAR(25) NOT NULL,
	Paciente INT NOT NULL,
	PRIMARY KEY (Id)
);

-- =======================================================
-- Descripcion: Creacion de la tabla REGION y asignacion 
-- de los atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE REGION(
	Id INT NOT NULL IDENTITY(1,1),
	Pais VARCHAR(30) NOT NULL,
	Estado VARCHAR(30) NOT NULL,
	PRIMARY KEY (Id)
);

-- =======================================================
-- Descripcion: Creacion de la tabla MEDIDASANITARIA y 
-- asignacion de los atributos que la componen y su tipo
-- de dato.
-- =======================================================
CREATE TABLE MEDIDASANITARIA(
	Id INT NOT NULL IDENTITY(1,1),
	Nombre VARCHAR(30) NOT NULL,
	Descripcion VARCHAR(200) NOT NULL,
	FechaInicio DATE NOT NULL,
	FechaFinal DATE NOT NULL,
	Region INT,
	PRIMARY KEY (Id)
);

-- =======================================================
-- Descripcion: Creacion de la tabla HOSPITAL y asignacion 
-- de los atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE HOSPITAL(
	Id INT NOT NULL IDENTITY(1,1),
	Nombre VARCHAR(30) NOT NULL,
	Director VARCHAR(25) NOT NULL,
	Capacidad INT NOT NULL,
	Contacto VARCHAR(8) NOT NULL,
	CamasUCI INT NOT NULL,
	Region INT NOT NULL,
	PRIMARY KEY (Id)
);

-- =======================================================
-- Descripcion: Creacion de la tabla CONTACTO y asignacion 
-- de los atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE CONTACTO(
	Cedula INT NOT NULL,
	Nombre VARCHAR(15) NOT NULL,
	Apellido VARCHAR(15) NOT NULL,
	Edad INT NOT NULL,
	Nacionalidad  VARCHAR(20) NOT NULL,
	Email VARCHAR(30) NOT NULL,
	Region INT NOT NULL,
	Paciente INT,
	PRIMARY KEY (Cedula),

);

-- =======================================================
-- Descripcion: Creacion de la tabla PATOLOGIA y asignacion 
-- de los atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE PATOLOGIA(
	Id INT NOT NULL IDENTITY(1,1),
	Nombre VARCHAR(40) NOT NULL,
	Descripcion VARCHAR(60) NOT NULL,
	Sintomas VARCHAR(70) NOT NULL,
	Tratamiento VARCHAR(70) NOT NULL,
	Paciente INT,
	Contacto INT,
	PRIMARY KEY (Id)
);