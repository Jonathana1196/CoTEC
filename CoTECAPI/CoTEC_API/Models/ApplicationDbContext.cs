using Microsoft.EntityFrameworkCore;

namespace CoTECAPI.Models
{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Estado> Estados { get; set; }
        public DbSet<Hospital> Hospitales { get; set; }
        public DbSet<Medicacion> Medicaciones { get; set; }
        public DbSet<MedidaSanitaria> Medidas { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Contacto> Contactos { get; set; }
        public DbSet<Patologia> Patologias { get; set; }
        public DbSet<Region> Regiones { get; set; }
        
    }
}
