using Employee_Management_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_Management_System
{
	public class EmployeeStoreContext : DbContext
	{
		protected readonly IConfiguration Configuration;

		public EmployeeStoreContext(IConfiguration configuration)
		{
			Configuration = configuration;
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
		}

		public DbSet<Employee> Employees { get; set; }
	}
}
