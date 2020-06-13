using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoTEC_API.Models
{
    public class Medicacion
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string CasaFarmaceutica { get; set; }
        public int Paciente { get; set; }
    }
}
