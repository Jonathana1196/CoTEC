﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTECAPI.Models;
namespace CoTECAPI.Controllers
{
    [Produces("application/json")]
    [Route("CoTEC/Pacientes")]
    public class PacienteController : Controller
    {
        private readonly ApplicationDbContext context;
        public PacienteController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener los pacientes de la
        // la base de datos.
        public IEnumerable<Paciente> GetPacientes()
        {
            return context.PACIENTE.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar un paciente en la base de datos.
        public IActionResult PostPaciente([FromBody] Paciente paciente)
        {
            if (ModelState.IsValid)
            {
                context.PACIENTE.Add(paciente);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        // Metodo que se encarga de 
        public IActionResult PutPaciente([FromBody] Paciente paciente, int cedula)
        {
            if (paciente.Cedula != cedula)
            {
                return BadRequest();
            }

            context.Entry(paciente).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar un paciente de la base de datos.
        public IActionResult DeletePaciente(int cedula)
        {
            var paciente = context.PACIENTE.FirstOrDefault(x => x.Cedula == cedula);
            if (paciente == null)
            {
                return BadRequest();
            }

            context.PACIENTE.Remove(paciente);
            context.SaveChanges();
            return Ok(paciente);
        }
    }
}
