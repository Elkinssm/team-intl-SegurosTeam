using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Models;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class CiudadController : ControllerBase
    {
        private SegurosContext _context;
        public CiudadController(SegurosContext SegurosContext)
        {
            _context = SegurosContext;
        }

        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        {
            var ciudades = _context.Ciudad.ToList();
            return Ok(ciudades);
        }

        [HttpPost]
        [Route("SaveCiudad")]
        public void SaveCity(Ciudad ciudad)
        {

            _context.Ciudad.Add(ciudad);
            _context.SaveChanges();

        }

        [HttpPut]
        [Route("UpdateCiudad")]
        public void UpdateCity(Ciudad ciudad)
        {
            var city = _context.Ciudad.FirstOrDefault(x => x.Id == ciudad.Id);
            city.Nombre = ciudad.Nombre;
            _context.SaveChanges();

        }

        [HttpDelete]
        [Route("DeleteCiudad")]
        public void DeleteCity(Guid id)
        {
            var city = _context.Ciudad.FirstOrDefault(x => x.Id == id);
            _context.Ciudad.Remove(city);
            _context.SaveChanges();

        }


    }
}