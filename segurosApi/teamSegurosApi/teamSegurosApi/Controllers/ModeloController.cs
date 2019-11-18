using Microsoft.AspNetCore.Mvc;
using System.Linq;
using teamSegurosApi.Data;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class ModeloController : ControllerBase
    {
        private SegurosContext _context;
        public ModeloController(SegurosContext SegurosContext)
        {
            _context = SegurosContext;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var modelos = _context.Modelo.ToList();
            return Ok(modelos);
        }

    }
}
