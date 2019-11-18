using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Models;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class SeguroController : ControllerBase
    {
        private SegurosContext _context;
        public SeguroController(SegurosContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var seguro = _context.Seguro.ToList();
            return Ok(seguro);
        }

        [HttpPost]
        [Route("SaveSeguro")]
        public IActionResult SaveUser(Seguro seguro)
        {
            _context.Seguro.Add(seguro);
            _context.SaveChanges();
            return Ok();

        }
        [HttpPut]
        [Route("UpdateSeguro")]
        public void UpdateSeguro(Seguro seguro)
        {
            var seguros = _context.Seguro.FirstOrDefault(x => x.Id == seguro.Id);
            seguro.Vehiculo = seguro.Vehiculo;
            _context.SaveChanges();

        }

        [HttpDelete]
        [Route("DeleteSeguro")]
        public void DeleteSeguro(Guid id)
        {
            var seguro = _context.Seguro.FirstOrDefault(x => x.Id == id);
            _context.Seguro.Remove(seguro);
            _context.SaveChanges();

        }
    }


}
