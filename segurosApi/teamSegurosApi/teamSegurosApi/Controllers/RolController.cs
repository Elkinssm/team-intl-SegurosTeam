using Microsoft.AspNetCore.Mvc;
using System.Linq;
using teamSegurosApi.Data;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {
        private SegurosContext _context;
        public RolController(SegurosContext SegurosContext)
        {
            _context = SegurosContext;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var Rol = _context.Rol.ToList();
            return Ok(Rol);
        }
    }
}
