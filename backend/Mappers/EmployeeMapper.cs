using Employee_Management_System.Dtos;
using Employee_Management_System.Models;

namespace Employee_Management_System.Mappers
{
	public static class EmployeeMapper
	{
		public static EmployeeDto ToEmployeeDto(this Employee employee)
		{
			return new EmployeeDto
			{
				FirstName = employee.FirstName,
				LastName = employee.LastName,
				Email = employee.Email,
				PhoneNumber = employee.PhoneNumber,
				Position = employee.Position,
				Department = employee.Department,
			};
		}
	}
}
