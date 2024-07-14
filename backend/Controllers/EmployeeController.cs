using Employee_Management_System.Dtos;
using Employee_Management_System.Mappers;
using Employee_Management_System.Models;
using Microsoft.AspNetCore.Mvc;

namespace Employee_Management_System.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class EmployeeController : ControllerBase
	{
		private readonly EmployeeStoreContext _context;
		public EmployeeController(EmployeeStoreContext context)
		{
			_context = context;
		}

		// get all Employees
		[HttpGet]
		public IActionResult GetAll()
		{
			var employees = _context.Employees.ToList();
			return Ok(employees);
		}

		// get employee by ID
		[HttpGet("{id}")]
		public IActionResult Get([FromRoute] int id)
		{
			var employee = _context.Employees.Find(id);
			// check if user exist
			if (employee == null)
			{
				return NotFound();
			}
			return Ok(employee);
		}

		// add new Employee
		[HttpPost]
		public IActionResult Create([FromBody] EmployeeDto employeeDto)
		{
			var employee = employeeDto.ToEmployeeFromEmployeeDto();
			// add employee to database
			_context.Employees.Add(employee);
			_context.SaveChanges();
			return Ok(new 
			{
				message = "Employee created Successfully"
			});
		}

		[HttpPut]
		[Route("{id}")]
		public IActionResult Update([FromRoute] int id,[FromBody] EmployeeDto employeeDto)
		{
			var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
			// check if employee exist
			if (employee == null)
			{
				return NotFound();
			}
			// update the employee
			employee.FirstName = employeeDto.FirstName;
			employee.LastName = employeeDto.LastName;
			employee.Email = employeeDto.Email;
			employee.PhoneNumber = employeeDto.PhoneNumber;
			employee.Position = employeeDto.Position;
			employee.Department = employeeDto.Department;
			// save changes
			_context.SaveChanges();
			return Ok(employee);
		}

		// delete employee using id
		[HttpDelete]
		[Route("{id}")]
		public IActionResult Delete([FromRoute] int id)
		{
			var employee = _context.Employees.FirstOrDefault(x => x.Id == id);
			// check if employee exist
			if (employee == null)
			{
				return NotFound();
			}
			// delete the emolyee from the db
			_context.Employees.Remove(employee);
			//save changes
			_context.SaveChanges();
			return Ok();
		}
	}
}
