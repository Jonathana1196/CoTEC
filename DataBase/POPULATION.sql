-- ##############################################################
--                          CoTEC
-- ##############################################################

-- ==============================================================
-- Descripcion: Poblacion de la tabla REGION que recibe:
-- @VARCHAR(30):
-- @VARCHAR(30):
-- ==============================================================
INSERT INTO REGION(Pais, Estado)
VALUES
('Estados Unidos', 'New York'),
('Mexico', 'DF'),
('Rumania', 'Bucarest'),
('Espana', 'Madrid'),
('Uruguay', 'Montevideo'),
('Rusia', 'Moscu'),
('Ucrania', 'Kiev'),
('Islandia', 'Reykjavik'),
('Alemania', 'Berlin'),
('Italia', 'Roma'),
('Nicaragua', 'Managua'),
('Costa Rica', 'San Jose');

-- ==============================================================
-- Descripcion: Poblacion de la tabla ESTADO que recibe:
-- @VARCHAR(25):
-- ==============================================================
INSERT INTO ESTADO(Descripcion)
VALUES
('Activa - Contagiada'),
('Recuperada'),
('Muerta');

-- ==============================================================
-- Descripcion: Poblacion de la tabla PACIENTE que recibe:
-- @INT:
-- @VARCHAR(20):
-- @VARCHAR(20):
-- @INT:
-- @VARCHAR(20):
-- @VARCHAR(2):
-- @VARCHAR(2):
-- @INT:
-- @INT:
-- ==============================================================
INSERT INTO PACIENTE(Cedula, Nombre, Apellido, Edad, Nacionalidad, Internado, UCI, Region, Estado, FechaIngreso)
VALUES
(0, 'Marco', 'Rivera', 25, 'Costarricense', 'No', 'No', 5, 2,'2020-05-12'),
(21346587, 'Abner', 'Lacayo', 25, 'Costarricense', 'Si', 'No', 5, 2,'2020-03-08'),
(98756443, 'Alejandro', 'Salazar', 26, 'Costarricense', 'No', 'No', 5, 3,'2020-05-05'),
(68548954, 'Brian', 'Lacayo', 27, 'Costarricense', 'No', 'No', 2, 1,'2020-01-08'),
(45897564, 'Thalia', 'Arias', 28, 'Costarricense', 'No', 'No', 5, 3,'2020-06-08');

-- ==============================================================
-- Descripcion: Poblacion de la tabla CONTACTO que recibe:
-- @INT:
-- @VARCHAR(20):
-- @VARCHAR(20):
-- @INT:
-- @VARCHAR(20):
-- @VARCHAR(30):
-- @INT:
-- @INT:
-- ==============================================================
INSERT INTO CONTACTO(Cedula, Nombre, Apellido, Edad, Nacionalidad, Email, Region, Paciente)
VALUES
(123456789, 'Rodolfo', 'Rodriguez', 47, 'Rumano', 'rodolforr@gmail.com', 5, 68548954),
(213456789, 'Quetzlcoatl', 'Azteca', 90, 'Mexicano', 'quetazteca@gmail.com', 5, 21346587),
(312456789, 'William', 'Walker', 89, 'Estadounidense', 'walkerwill@gmail.com', 1, 98756443),
(412356789, 'Esteban', 'Espinoza', 29, 'Espanol', 'esteespi@gmail.com', 4, 45897564),
(512346789, 'Tatiana', 'Tabarez', 24, 'Uruguaya', 'tatita@gmail.com', 5, 98756443),
(612345789, 'Yelena', 'Yeltsin', 36, 'Rusa', 'yelyel@gmail.com', 7, 98756443),
(712345689, 'Urko', 'Ustinov', 57, 'Ucraniano', 'urkousti@gmail.com', 3, 45897564),
(812345679, 'Igor', 'Ignarsson', 65, 'Islandes', 'ignar@gmail.com', 1, 98756443),
(912345678, 'Oktoberfest', 'Ozil', 74, 'Aleman', 'kaiser@gmail.com', 4, 68548954),
(102345678, 'Peter', 'Pasarella', 32, 'Italiano', 'pasarella@gmail.com', 3, 45897564),
(201345678, 'Jose', 'Jarquin', 35, 'Nicaraguense', 'joseja@gmail.com', 5, 98756443),
(301245678, 'Raldall', 'Vazquez', 21, 'Costarricense', 'randallvaz@gamil.com', 5, 21346587);

-- ==============================================================
-- Descripcion: Poblacion de la tabla HOSPITAL que recibe:
-- @VARCHAR(30):
-- @VARCHAR(25):
-- @INT:
-- @VARCHAR(8):
-- @INT:
-- @INT:
-- ==============================================================
INSERT INTO HOSPITAL(Nombre, Director, Capacidad, Contacto, CamasUCI, Region)
VALUES
('San Juan de Dios', 'Daniel', 50, '12345678', 25, 5),
('Mexico', 'Josue', 40, '19876543', 20, 2),
('Calderon Guardia', 'Maria', 30, '16543278', 15, 6),
('San Rafael', 'Juan', 40, '21345678', 20, 3),
('Max Peralta', 'Randall', 30, '32198765', 15, 2);

-- ==============================================================
-- Descripcion: Poblacion de la tabla MEDICACION que recibe:
-- @VARCHAR(50):
-- @VARCHAR(25):
-- @INT:
-- ==============================================================
INSERT INTO MEDICACION(Nombre, CasaFarmaceutica, Paciente)
VALUES
('Python', 'Norton', 68548954),
('Java', 'McAffe', 45897564),
('C++', 'Avast', 68548954),
('Scheme', 'AVG', 98756443),
('Prolog', 'Bullguard', 68548954),
('JavaScript', 'Heimdal', 98756443),
('Rust', 'BitDefender', 68548954),
('Asembly', 'Panda', 68548954),
('PHP', 'Kaspersky', 45897564),
('Swift', 'Webroot', 68548954);

-- ==============================================================
-- Descripcion: Poblacion de la tabla MEDIDASANITARIA que recibe:
-- @VARCHAR(30):
-- @VARCHAR(200):
-- @DATE:
-- @DATE:
-- @INT:
-- ==============================================================
INSERT INTO MEDIDASANITARIA(Nombre, Descripcion, FechaInicio, FechaFinal, Region)
VALUES
('No Stack Overflow','No se puede utilizar la pagina de StackOverflow debido a que es una fuente de conytagio','2020-05-05','2020-05-08',2),
('Repetir Bases','Se debe llevar el Curso 2 veces para generar anticuerpos','2020-03-08','2020-10-12',3),
('Evitar a Choco','Se debe evitar llevar el curso de Dise�o logico para evitar la patologia','2020-05-03','2020-04-12',1),
('Solo en Consola','Se puede programar solo utilizando la consola del sistema operativo','2020-02-02','2020-08-10',2);

-- ==============================================================
-- Descripcion: Poblacion de la tabla PATOLOGIA que recibe:
-- @VARCHAR(40):
-- @VARCHAR(60):
-- @VARCHAR(70):
-- @VARCHAR(70):
-- @INT:
-- @INT:
-- ==============================================================
INSERT INTO PATOLOGIA(Nombre, Descripcion, Sintomas, Tratamiento, Paciente, Contacto)
VALUES
('Signal and Systems', 'Barboza', 'Fatiga Extrema', 'Tutorias', 68548954, NULL),
('Datos I', 'Nereo', 'Insomnio', 'Stack Overflow', 21346587, NULL),
('Datos II', 'Noguera', 'Jaqueca', 'Stack Overflow', 45897564, NULL),
('CA', 'Barboza', 'Fatiga', 'Tutorias', NULL, 612345789),
('Discretos', 'Rivas', 'Confusion', 'El Rivas PDF', 21346587, NULL);