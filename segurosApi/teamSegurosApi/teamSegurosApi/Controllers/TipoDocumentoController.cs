using Microsoft.AspNetCore.Mvc;
using System.Linq;
using teamSegurosApi.Data;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class TipoDocumentoController : ControllerBase
    {
        private SegurosContext _context;
        public TipoDocumentoController(SegurosContext SegurosContext)
        {
            _context = SegurosContext;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var documentos = _context.TipoDocumento.ToList();
            return Ok(documentos);
        }


    }
}
