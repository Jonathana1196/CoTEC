-- #######################################################
--               CoTEC Store Procedures
-- #######################################################

-- =======================================================
-- Descripcion:
-- =======================================================

CREATE TRIGGER estadoTrigg
ON  ESTADO
FOR DELETE
AS
	BEGIN
	 SET NOCOUNT ON;
	 IF EXISTS (
		SELECT * 
		FROM deleted
		WHERE Id < 4
		)
		BEGIN
			ROLLBACK;
			THROW 50001, 'No se puede eliminar', 1;
		END
	END;
