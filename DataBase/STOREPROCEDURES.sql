-- #######################################################
--               CoTEC Store Procedures
-- #######################################################

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion: Se encarga de obtener una lista de las medica_
-- iones que un paciente esta recibiendo.
-- Entradas: Cedula del paciente.
-- Salidas: N/A
-- ==============================================================
CREATE PROCEDURE GetMedicaciones(@idPaciente INT)
AS
SELECT Id, Nombre, CasaFarmaceutica, Paciente 
FROM MEDICACION
WHERE Paciente = @idPaciente;
-- ==============================================================
exec GetMedicaciones 68548954
-- ==============================================================
-- ==============================================================
GO

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion: Se encarga de obtener una lista de las patolo_
-- gias que tiene un paciente.
-- Entradas: Cedula del paciente
-- Salidas: N/A
-- ==============================================================
CREATE PROCEDURE GetPatologiasP(@idPaciente INT)
AS
SELECT Id, Nombre, Descripcion, Sintomas, Tratamiento, Paciente
FROM PATOLOGIA
WHERE Paciente = @idPaciente;
-- ==============================================================
exec GetPatologiasP 21346587
-- ==============================================================
GO

CREATE PROCEDURE COUNTACTIVOS
AS
SELECT COUNT(PACIENTE.Estado) as RESULT FROM PACIENTE WHERE PACIENTE.Estado=1
GO

CREATE PROCEDURE COUNTRECUPERADOS
AS
SELECT COUNT(PACIENTE.Estado) as RESULT FROM PACIENTE WHERE PACIENTE.Estado=2
GO

CREATE PROCEDURE COUNTMUERTOS
AS
SELECT COUNT(PACIENTE.Estado) as RESULT FROM PACIENTE WHERE PACIENTE.Estado=3
GO

CREATE PROCEDURE COUNTACTIVOSPAIS(@Pais VARCHAR(20))
AS
SELECT COUNT(PACIENTE.Estado) as RESULT FROM PACIENTE INNER JOIN REGION ON PACIENTE.Region=REGION.Id
WHERE PACIENTE.Estado=1 AND Pais=@Pais
GO

CREATE PROCEDURE COUNTRECUPERADOSPAIS(@Pais VARCHAR(20))
AS
SELECT COUNT(PACIENTE.Estado) as RESULT FROM PACIENTE INNER JOIN REGION ON PACIENTE.Region=REGION.Id
WHERE PACIENTE.Estado=2 AND Pais=@Pais
GO

CREATE PROCEDURE COUNTMUERTOSPAIS(@Pais VARCHAR(20))
AS
SELECT COUNT(PACIENTE.Estado) as RESULT FROM PACIENTE INNER JOIN REGION ON PACIENTE.Region=REGION.Id
WHERE PACIENTE.Estado=3 AND Pais=@Pais
GO
