using Microsoft.EntityFrameworkCore;
using eCommerse.Models;


namespace eCommerse
{
    public class eCommerseDBContext : DbContext
        // datatype used to represent tables is called a DBSet
    {
        public DbSet<Category> Categories { get; set; }

        //constructor
        public eCommerseDBContext(DbContextOptions options) : base(options)
        {

        }

        //constructor
        public DbSet<eCommerse.Models.Product> Product { get; set; } = default!;
    }
}
