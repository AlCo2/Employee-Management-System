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

		public static Employee ToEmployeeFromEmployeeDto(this EmployeeDto employeeDto)
		{
			return new Employee
			{
				FirstName = employeeDto.FirstName,
				LastName = employeeDto.LastName,
				Email = employeeDto.Email,
				PhoneNumber = employeeDto.PhoneNumber,
				Position = employeeDto.Position,
				Department = employeeDto.Department,
			};
		}
	}
}
