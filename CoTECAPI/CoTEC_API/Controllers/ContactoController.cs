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
    [Route("CoTEC/Contactos")]
    /**
     * Clase que se encarga de controlar las acciones CRUD de
     * la entidad CONTACTO.
     */
    public class ContactoController : Controller
    {
        private readonly ApplicationDbContext context;
        public ContactoController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        // Metodo que se encarga de obtener los contactos de la
        // la base de datos.
        public IEnumerable<Contacto> GetContactos()
        {
            return context.CONTACTO.ToList();
        }

        [HttpPost]
        // Metodo que se encarga publicar un contacto en la base de datos.
        public IActionResult PostContacto([FromBody] Contacto contacto)
        {
            if (ModelState.IsValid)
            {
                context.CONTACTO.Add(contacto);
                context.SaveChanges();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{cedula}")]
        // Metodo que se encarga de 
        public IActionResult PutContacto([FromBody] Contacto contacto, int cedula)
        {
            if (contacto.Cedula != cedula)
            {
                return BadRequest();
            }
            context.Entry(contacto).State = EntityState.Modified;
            context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{cedula}")]
        // Metodo que se encarga de eliminar un contacto de la base de datos.
        public IActionResult DeleteContacto(int cedula)
        {
            var contacto = context.CONTACTO.FirstOrDefault(x => x.Cedula == cedula);
            if (contacto == null)
            {
                return BadRequest();
            }

            context.CONTACTO.Remove(contacto);
            context.SaveChanges();
            return Ok(contacto);
        }
    }
}