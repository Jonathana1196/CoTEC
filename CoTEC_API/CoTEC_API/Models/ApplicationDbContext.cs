using Microsoft.EntityFrameworkCore;

namespace CoTEC_API.Models
{
    public class ApplicationDbContext:DbContext

    {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }
    }
}