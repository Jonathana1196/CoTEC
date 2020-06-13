using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTEC_API.Models;
namespace CoTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("CoTEC/Hospitales")]
    public class HospitalController : Controller
    {
        private readonly ApplicationDbContext context;
        public HospitalController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener los hospitales de la
        // la base de datos.
        public IEnumerable<Hospital> GetHospitales()
        {
            return context.Hospitales.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar un hospital en la base de datos.
        public IActionResult PostHospital([FromBody] Hospital hospital)
        {
            if (ModelState.IsValid)
            {
                context.Hospitales.Add(hospital);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        // Metodo que se encarga de 
        public IActionResult PutHospital([FromBody] Hospital hospital, int id)
        {
            if (hospital.Id != id)
            {
                return BadRequest();
            }

            context.Entry(hospital).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar un hospital de la base de datos.
        public IActionResult DeletePaciente(int id)
        {
            var hospital = context.Hospitales.FirstOrDefault(x => x.Id == id);
            if (hospital == null)
            {
                return BadRequest();
            }

            context.Hospitales.Remove(hospital);
            context.SaveChanges();
            return Ok(hospital);
        }
    }
}