using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;

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
        [Route("GetByMarca")]
        public IActionResult GetByMarca(string marca)
        {
            var modelos = _context.Modelo
                .Where(m => m.MarcaId == Guid.Parse(marca))
                .Select(m => new ModeloDto { Id = m.Id, Nombre = m.Nombre }).ToList();
            return Ok(modelos);
        }

    }
}
