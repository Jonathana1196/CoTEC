using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTEC_API.Models
{
    public class Hospital
    {

        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Director { get; set; }
        public int Capacidad { get; set; }
        public string Contacto { get; set; }
        public int CamasUCI { get; set; }
        public int Region { get; set; }
    }
}
