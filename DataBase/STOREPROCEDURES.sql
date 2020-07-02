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

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion:
-- Entradas:
-- Salidas:
-- ==============================================================

-- ==============================================================

-- ==============================================================
GO

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion:
-- Entradas:
-- Salidas:
-- ==============================================================

-- ==============================================================

-- ==============================================================
GO

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion:
-- Entradas:
-- Salidas:
-- ==============================================================

-- ==============================================================

-- ==============================================================