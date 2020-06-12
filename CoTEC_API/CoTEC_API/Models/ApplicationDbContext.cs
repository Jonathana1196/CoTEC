using Microsoft.EntityFrameworkCore;

namespace CoTEC_API.Models
{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Estado> Estados { get; set; }
        public DbSet<Hospital> Hospitales { get; set; }
        public DbSet<Medicacion> Medicaciones { get; set; }
        public DbSet<Medida_Sanitaria> Medidas { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Patologia> Patologias { get; set; }
        public DbSet<Region> Regiones { get; set; }
        
    }
}
