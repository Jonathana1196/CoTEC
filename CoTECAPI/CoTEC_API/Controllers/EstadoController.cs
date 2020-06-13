using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoTECAPI.Models;

namespace CoTECAPI.Controllers
{
    [Produces("application/json")]
    [Route("CoTEC/Estados")]
    public class EstadoController : Controller
    {
        private readonly ApplicationDbContext context;
        public EstadoController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Estado> GetEstados()
        {
            return context.ESTADO.ToList();
        }

        [HttpPost]
        public  IActionResult PostEstado([FromBody]Estado estado)
        {
            if (ModelState.IsValid)
            {
                context.ESTADO.Add(estado);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }
        
        [HttpPut("{id}")]
        public  IActionResult PutEstado([FromBody]Estado estado, int id)
        {
            if (estado.Id != id)
            {
                return BadRequest();
            }

            context.Entry(estado).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public  IActionResult DeleteEstado(int id)
        {
            var estado = context.ESTADO.FirstOrDefault(x => x.Id == id);
            if (estado==null)
            {
                return BadRequest();
            }

            context.ESTADO.Remove(estado);
            context.SaveChanges();
            return Ok(estado);
        }       
    }
}