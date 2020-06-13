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
    [Route("CoTEC/Medicaciones")]
    public class MedicacionController : Controller
    {

        private readonly ApplicationDbContext context;
        public MedicacionController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las medicaciones de la
        // la base de datos.
        public IEnumerable<Medicacion> GetMedicaciones()
        {
            return context.Medicaciones.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar una medicacion en la base de datos.
        public IActionResult PostMedicacion([FromBody] Medicacion medicacion)
        {
            if (ModelState.IsValid)
            {
                context.Medicaciones.Add(medicacion);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        // Metodo que se encarga de 
        public IActionResult PutMedicacion([FromBody] Medicacion medicacion, int id)
        {
            if (medicacion.Id != id)
            {
                return BadRequest();
            }

            context.Entry(medicacion).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar un contacto de la base de datos.
        public IActionResult DeleteMedicacion(int id)
        {
            var medicacion = context.Medicaciones.FirstOrDefault(x => x.Id == id);
            if (medicacion == null)
            {
                return BadRequest();
            }

            context.Medicaciones.Remove(medicacion);
            context.SaveChanges();
            return Ok(medicacion);
        }
    }
}