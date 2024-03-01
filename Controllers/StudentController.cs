using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PEMS.Models;
using System.Linq;

namespace PEMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly PracticeContext _practiceContext;

        public StudentController(PracticeContext practiceContext)
        {
            _practiceContext = practiceContext;
        }

        [HttpGet]
        [Route("GetStudents")]
        public IActionResult GetStudents()
        {
            List<Student> students = _practiceContext.Students.ToList();
            return StatusCode(StatusCodes.Status200OK, students);
        }

        [HttpPost]
        [Route("InsertStudent")]
        public IActionResult InsertStudent([FromBody] Student student)
        {
            if (ModelState.IsValid)
            {
                _practiceContext.Students.Add(student);
                _practiceContext.SaveChanges();
                return StatusCode(StatusCodes.Status201Created);
            }
            else
            {
                return StatusCode(StatusCodes.Status400BadRequest, ModelState);
            }
        }
    }
}
