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
			if (employee == null)
			{
				return NotFound();
			}
			return Ok(employee);
		}

	}
}
