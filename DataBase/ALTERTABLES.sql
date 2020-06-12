-- #######################################################
--                          CoTEC
-- #######################################################

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- PACIENTE que contiene el atributo Region que se refe_
-- rencia de la tabla REGION mediante su Id.
-- =======================================================
ALTER TABLE PACIENTE
ADD CONSTRAINT PACIENTE_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- PACIENTE que contiene el atributo Estado que se refe_
-- rencia de la tabla ESTADO mediante su Id.
-- =======================================================
ALTER TABLE PACIENTE
ADD CONSTRAINT PACIENTE_ESTADO_FK FOREIGN KEY (Estado)
REFERENCES ESTADO (Id);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- MEDICACION que contiene el atributo paciente que se
-- referencia de la tabla PACIENTE mediante su Cedula.
-- =======================================================
ALTER TABLE MEDICACION
ADD CONSTRAINT MEDICACION_PACIENTE_FK FOREIGN KEY (Paciente)
REFERENCES PACIENTE (Cedula);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- MEDIDASANITARIA que contiene el atributo Region que
-- se referencia de la tabla REGION mediante su Id.
-- =======================================================
ALTER TABLE MEDIDASANITARIA
ADD CONSTRAINT MEDIDASANITARIA_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- HOSPITAL que contiene el atributo Region que se refe_
-- rencia de la tabla REGION mediante su Id.
-- =======================================================
ALTER TABLE HOSPITAL
ADD CONSTRAINT HOSPITAL_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- CONTACTO que contiene el atributo Region que se refe_
-- rencia de la tabla REGION mediante su Id.
-- =======================================================
ALTER TABLE CONTACTO
ADD CONSTRAINT CONTACTO_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- CONTACTO que contiene el atributo Paciente que se re_
-- ferencia de la tabla PACIENTE mediante su Cedula.
-- =======================================================
ALTER TABLE CONTACTO
ADD CONSTRAINT CONTACTO_PACIENTE_FK FOREIGN KEY (Paciente)
REFERENCES PACIENTE (Cedula);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- PATOLOGIA que contiene el atributo Contacto que se
-- referencia de la tabla CONTACTO mediante su Cedula.
-- =======================================================
ALTER TABLE PATOLOGIA
ADD CONSTRAINT PATOLOGIA_CONTACTO_FK FOREIGN KEY (Contacto)
REFERENCES CONTACTO (Cedula);

-- =======================================================
-- Descripcion: Asignacion de llave foranea de la tabla
-- PATOLOGIA que contiene el atributo Paciente que se
-- referencia de la tabla PACIENTE mediante su Cedula.
-- =======================================================
ALTER TABLE PATOLOGIA
ADD CONSTRAINT PATOLOGIA_PACIENTE_FK FOREIGN KEY (Paciente)
REFERENCES PACIENTE (Cedula);