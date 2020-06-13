using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTEC_API.Models;
namespace CoTEC_API.Controllers
{
    [Produces("application/json")]
    [Route("CoTEC/Patologias")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad REGION.
     */
    public class PatologiaController : Controller
    {

        private readonly ApplicationDbContext context;
        public PatologiaController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las patologias de la
        // la base de datos.
        public IEnumerable<Patologia> GetPatologias()
        {
            return context.Patologias.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar una patologia en la base de datos.
        public IActionResult PostPatologia([FromBody] Patologia patologia)
        {
            if (ModelState.IsValid)
            {
                context.Patologias.Add(patologia);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        // Metodo que se encarga de 
        public IActionResult PutPatologia([FromBody] Patologia patologia, int id)
        {
            if (patologia.Id != id)
            {
                return BadRequest();
            }

            context.Entry(patologia).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeletePatologia(int id)
        {
            var patologia = context.Patologias.FirstOrDefault(x => x.Id == id);
            if (patologia == null)
            {
                return BadRequest();
            }

            context.Patologias.Remove(patologia);
            context.SaveChanges();
            return Ok(patologia);
        }
    }
}