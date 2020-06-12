INSERT INTO CONTACTO(Cedula, Nombre, Apellido, Edad, Nacionalidad, Email, Region, Paciente)
VALUES
(123456789, 'Rodolfo', 'Rodriguez', 47, 'Rumano', 'rodolforr@gmail.com', 40, 2),
(213456789, 'Quetzlcoatl', 'Azteca', 90, 'Mexicano', 'quetazteca@gmail.com', 52, 4),
(312456789, 'William', 'Walker', 89, 'Estadounidense', 'walkerwill@gmail.com', 1, 1),
(412356789, 'Esteban', 'Espinoza', 29, 'Espanol', 'esteespi@gmail.com', 34, 3),
(512346789, 'Tatiana', 'Tabarez', 24, 'Uruguaya', 'tatita@gmail.com', 598, 5),
(612345789, 'Yelena', 'Yeltsin', 36, 'Rusa', 'yelyel@gmail.com', 7, 7),
(712345689, 'Urko', 'Ustinov', 57, 'Ucraniano', 'urkousti@gmail.com', 380, 7),
(812345679, 'Igor', 'Ignarsson', 65, 'Islandes', 'ignar@gmail.com', 354, 8),
(912345678, 'Oktoberfest', 'Ozil', 74, 'Aleman', 'kaiser@gmail.com', 49, 9),
(102345678, 'Peter', 'Pasarella', 32, 'Italiano', 'pasarella@gmail.com', 39, 6),
(201345678, 'Jose', 'Jarquin', 35, 'Nicaraguense', 'joseja@gmail.com', 505, 2),
(301245678, 'Raldall', 'Vazquez', 21, 'Costarricense', 'randallvaz@gamil.com', 506, 1);

INSERT INTO HOSPITAL(Nombre, Director, Capacidad, Contacto, CamasUCI, Region)
VALUES
('San Juan de Dios', 'Daniel', 50, '12345678', 25, 506),
('Mexico', 'Josue', 40, '19876543', 20, 506),
('Calderon Guardia', 'Maria', 30, '16543278', 15, 506),
('San Rafael', 'Juan', 40, '21345678', 20, 506),
('Max Peralta', 'Randall', 30, '32198765', 15, 506);

INSERT INTO PACIENTE(Cedula, Nombre, Apellido, Edad, Nacionalidad, Internado, UCI, Region, Estado)
VALUES
(21346587, 'Abner', 'Lacayo', 25, 'Costarricense', 'Si', 'No', 506, 2),
(98756443, 'Alejandro', 'Salazar', 26, 'Costarricense', 'No', 'No', 506, 5),
(68548954, 'Brian', 'Lacayo', 27, 'Costarricense', 'No', 'No', 506, 1),
(45897564, 'Thalia', 'Arias', 28, 'Costarricense', 'No', 'No', 506, 5);