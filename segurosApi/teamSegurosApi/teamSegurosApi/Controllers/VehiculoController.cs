using Microsoft.AspNetCore.Mvc;
using System.Linq;
using teamSegurosApi.Data;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class VehiculoController : ControllerBase
    {
        private SegurosContext _context;
        public VehiculoController(SegurosContext SegurosContext)
        {
            _context = SegurosContext;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var vehiculos = _context.Vehiculo.ToList();
            return Ok(vehiculos);
        }
    }
}
