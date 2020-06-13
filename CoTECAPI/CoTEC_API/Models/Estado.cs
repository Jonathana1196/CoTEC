using System;
using System.ComponentModel.DataAnnotations;

namespace CoTECAPI.Models
{
    public class Estado
    {
        
        [Key]
        public int Id { get; set; }
        public string Descripcion { get; set; }
        
    }
}