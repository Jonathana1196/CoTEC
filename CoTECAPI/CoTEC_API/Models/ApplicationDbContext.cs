using Microsoft.EntityFrameworkCore;

namespace CoTECAPI.Models
{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Estado> ESTADO { get; set; }
        
        public DbSet<Hospital> HOSPITAL { get; set; }
        public DbSet<Medicacion> MEDICACION { get; set; }
        public DbSet<MedidaSanitaria> MEDIDASANITARIA { get; set; }
        public DbSet<Paciente> PACIENTE { get; set; }
        public DbSet<Contacto> CONTACTO { get; set; }
        public DbSet<Patologia> PATOLOGIA { get; set; }
        public DbSet<Region> REGION { get; set; }
        
    }
}
