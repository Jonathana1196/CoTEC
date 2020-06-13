using System.ComponentModel.DataAnnotations;

namespace CoTEC_API.Models
{
    public class Patologia
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Sintomas { get; set; }
        public string Tratamiento { get; set; }
        public int Paciente { get; set; }
        public int Contacto { get; set; }
    }
}