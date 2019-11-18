using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Models;

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
        public IEnumerable<Marca> GetAll()
        {
            return _context.Marca.ToList();
        }




    }
}