using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTECAPI.Models;
namespace CoTECAPI.Controllers
{
    [Produces("application/json")]
    [Route("CoTEC/Regiones")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad REGION.
     */
    public class RegionController : Controller
    {

        private readonly ApplicationDbContext context;
        public RegionController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las regiones de la
        // la base de datos.
        public IEnumerable<Region> GetRegiones()
        {
            return context.REGION.ToList();
        }
        
        [HttpPost]
        // Metodo que se encarga publicar una region en la base de datos.
        public  IActionResult PostRegion([FromBody]Region region)
        {
            if (ModelState.IsValid)
            {
                context.REGION.Add(region);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        // Metodo que se encarga de 
        public IActionResult PutRegion([FromBody] Region region, int id)
        {
            if (region.Id != id)
            {
                return BadRequest();
            }

            context.Entry(region).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar una region de la base de datos.
        public IActionResult DeleteRegion(int id)
        {
            var region = context.REGION.FirstOrDefault(x => x.Id == id);
            if (region == null)
            {
                return BadRequest();
            }

            context.REGION.Remove(region);
            context.SaveChanges();
            return Ok(region);
        }
    }
}