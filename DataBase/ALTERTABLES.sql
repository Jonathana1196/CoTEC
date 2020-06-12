ALTER TABLE PACIENTE
ADD CONSTRAINT PACIENTE_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

ALTER TABLE PACIENTE
ADD CONSTRAINT PACIENTE_ESTADO_FK FOREIGN KEY (Estado)
REFERENCES ESTADO (Id);

ALTER TABLE MEDICACION
ADD CONSTRAINT MEDICACION_PACIENTE_FK FOREIGN KEY (Paciente)
REFERENCES PACIENTE (Cedula);

ALTER TABLE MEDIDASANITARIA
ADD CONSTRAINT MEDIDASANITARIA_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

ALTER TABLE HOSPITAL
ADD CONSTRAINT HOSPITAL_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

ALTER TABLE CONTACTO
ADD CONSTRAINT CONTACTO_REGION_FK FOREIGN KEY (Region)
REFERENCES REGION (Id);

ALTER TABLE CONTACTO
ADD CONSTRAINT CONTACTO_PACIENTE_FK FOREIGN KEY (Paciente)
REFERENCES PACIENTE (Cedula);

ALTER TABLE PATOLOGIA
ADD CONSTRAINT PATOLOGIA_CONTACTO_FK FOREIGN KEY (Paciente)
REFERENCES CONTACTO (Cedula);

ALTER TABLE PATOLOGIA
ADD CONSTRAINT PATOLOGIA_PACIENTE_FK FOREIGN KEY (Paciente)
REFERENCES PACIENTE (Cedula);