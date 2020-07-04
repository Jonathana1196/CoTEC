using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTECAPI.Models;
using Microsoft.Data.SqlClient;

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
        [HttpGet("Activos")]
        // Metodo que se encarga de obtener las medicaciones desde un Procedure
        // la base de datos.
        public IEnumerable GetACTIVOS()
        {
            return context.result.FromSqlRaw("EXEC COUNTACTIVOS").ToList();
        }
        [HttpGet("Recuperados")]
        // Metodo que se encarga de obtener las medicaciones desde un Procedure
        // la base de datos.
        public IEnumerable GetRECUPERADOS()
        {
            return context.result.FromSqlRaw("EXEC COUNTRECUPERADOS").ToList();
        }
        [HttpGet("Muertos")]
        // Metodo que se encarga de obtener las medicaciones desde un Procedure
        // la base de datos.
        public IEnumerable GetMUERTOS()
        {
            return context.result.FromSqlRaw("EXEC COUNTMUERTOS").ToList();
        }
        [HttpGet("Activos" + "/{pais}")]
        // Metodo que se encarga de obtener las medicaciones desde un Procedure
        // la base de datos.
        public IQueryable<result> GetActivosPais(string pais)
        {
            var idp = new SqlParameter("@idpais",pais);

            return context.result.FromSqlRaw("COUNTACTIVOSPAIS @idpais", idp);
        }
        [HttpGet("Recuperados" + "/{pais}")]
        // Metodo que se encarga de obtener las medicaciones desde un Procedure
        // la base de datos.
        public IQueryable<result> GetRecuperadosPais(string pais)
        {
            var idp = new SqlParameter("@idpais",pais);

            return context.result.FromSqlRaw("COUNTRECUPERADOSPAIS @idpais", idp);
        }
        [HttpGet("Muertos" + "/{pais}")]
        // Metodo que se encarga de obtener las medicaciones desde un Procedure
        // la base de datos.
        public IQueryable<result> GetMuertosPais(string pais)
        {
            var idp = new SqlParameter("@idpais",pais);

            return context.result.FromSqlRaw("COUNTMUERTOSPAIS @idpais", idp);
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

        [HttpPut("{cedula}")]
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

        [HttpDelete("{cedula}")]
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
