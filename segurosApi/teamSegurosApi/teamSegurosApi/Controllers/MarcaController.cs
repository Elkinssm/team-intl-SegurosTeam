using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class MarcaController : ControllerBase
    {
        private SegurosContext _context;
        public MarcaController(SegurosContext SegurosContext)
        {
            _context = SegurosContext;
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<MarcaDto> GetAll()
        {
            return _context.Marca.Select(m => new MarcaDto { Id = m.Id, Nombre = m.Nombre }).ToList();
        }
    }
}
