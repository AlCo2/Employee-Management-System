using System.ComponentModel.DataAnnotations.Schema;

namespace Employee_Management_System.Models
{
	public class Employee
	{
		// Todo: change Id to GUID later
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }
		public string FirstName { get; set; } = string.Empty;
		public string LastName { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
		public string PhoneNumber { get; set; } = string.Empty;
		public string Position { get; set; } = string.Empty;
		public string Department { get; set; } = string.Empty;

	}
}
