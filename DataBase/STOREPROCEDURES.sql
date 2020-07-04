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
-- Descripcion: Obtiene el acumulado de personas confirmados 
-- contagiadas, recuperadas, muertas o activas a nivel mundial.
-- Entradas: N/A
-- Salidas: N/A
-- ==============================================================
CREATE PROCEDURE GetAcumuladoGlobal(@estadoConsultado INT)
AS
SELECT 
   COUNT(*)
FROM 
    PACIENTE
WHERE 
    PACIENTE_ESTADO_FK = @estadoConsultado;
-- ==============================================================

-- ==============================================================
GO

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion: Obtiene el detalle del incremento diario a nivel 
-- mundial.
-- Entradas: N/A
-- Salidas: N/A
-- ==============================================================
CREATE PROCEDURE GetActivosGlobal()
AS
SELECT 
   COUNT(*)
FROM 
    PACIENTE
WHERE 
    PACIENTE_ESTADO_FK = 1;
-- ==============================================================

-- ==============================================================
GO

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion: Obtiene el acumulado de personas confirmados 
-- contagiadas, recuperadas, muertas o activas para un país en 
-- específico.
-- Entradas: País 
-- Salidas: N/A
-- ==============================================================
CREATE PROCEDURE GetAcumuladoPais(@estadoConsultado INT, @pais INT)
AS
SELECT 
   COUNT(*)
FROM 
    PACIENTE
WHERE 
    Region = @pais and
    PACIENTE_ESTADO_FK = @estadoConsultado;
-- ==============================================================

-- ==============================================================
GO

-- ==============================================================
-- Tipo: Proceso.
-- Descripcion: Obtiene el detalle del incremento diario a nivel 
-- mundial.
-- Entradas: N/A
-- Salidas: N/A
-- ==============================================================
CREATE PROCEDURE GetActivosPais(@pais INT)
AS
SELECT 
   COUNT(*)
FROM 
    PACIENTE
WHERE 
    Region = @pais and
    PACIENTE_ESTADO_FK = 1;
-- ==============================================================

-- ==============================================================