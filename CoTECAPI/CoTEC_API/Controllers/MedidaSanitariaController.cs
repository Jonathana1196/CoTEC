using System;
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
    [Route("CoTEC/MedidasSanitarias")]
    public class MedidaSanitariaController : Controller
    {

        private readonly ApplicationDbContext context;
        public MedidaSanitariaController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener las medidas sanitarias de la
        // la base de datos.
        public IEnumerable<MedidaSanitaria> GetMedidas()
        {
            return context.MEDIDASANITARIA.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar una medida sanitaria en la base de datos.
        public IActionResult PostMedidaSanitaria([FromBody] MedidaSanitaria medida)
        {
            if (ModelState.IsValid)
            {
                context.MEDIDASANITARIA.Add(medida);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        // Metodo que se encarga de 
        public IActionResult PutMedidaSanitaria([FromBody] MedidaSanitaria medida, int id)
        {
            if (medida.Id != id)
            {
                return BadRequest();
            }

            context.Entry(medida).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        // Metodo que se encarga de eliminar una medida sanitaria de la base de datos.
        public IActionResult DeleteMedidaSanitaria(int id)
        {
            var medida = context.MEDIDASANITARIA.FirstOrDefault(x => x.Id == id);
            if (medida == null)
            {
                return BadRequest();
            }

            context.MEDIDASANITARIA.Remove(medida);
            context.SaveChanges();
            return Ok(medida);
        }
    }
}