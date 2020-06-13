using System;
using System.ComponentModel.DataAnnotations;

namespace CoTECAPI.Models
{
    public class Region
    {

        [Key]
        public int Id { get; set; }
        public string Pais { get; set; }
        public string Estado { get; set; }

    }
}