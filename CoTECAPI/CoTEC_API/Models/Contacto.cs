using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTECAPI.Models
{
    public class Contacto
    {
        [Key]
        public int Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public string Nacionalidad { get; set; }
        public string Email { get; set; }
        public int Region { get; set; }
        public int Paciente { get; set; }
    }
}
