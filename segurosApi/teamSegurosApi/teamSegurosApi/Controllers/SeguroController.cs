using Microsoft.AspNetCore.Mvc;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Services;

namespace teamSegurosApi.Controllers
{

    [ApiController]
    [Route("api/v2/[controller]")]
    public class SeguroController : ControllerBase
    {
        private ISeguroService _seguroService;
        public SeguroController(ISeguroService seguroService)
        {
            _seguroService = seguroService;
        }


        //[HttpGet]
        //[Route("GetAll")]
        //public IActionResult GetAll()
        //{
        //    var seguro = _context.TipoDocumento.ToList();
        //    return Ok(seguro);
        //}

        [HttpPost]
        [Route("AsegurarVehiculo")]
        public IActionResult AsegurarVehiculo(SeguroDto seguroDto)
        {
            var response = _seguroService.AsegurarVehiculo(seguroDto);
            return Ok(response);
        }





        //[HttpPut]
        //[Route("UpdateSeguro")]
        //public void UpdateSeguro(Seguro seguro)
        //{
        //    var seguros = _context.Seguro.FirstOrDefault(x => x.Id == seguro.Id);
        //    seguro.Vehiculo = seguro.Vehiculo;
        //    _context.SaveChanges();

        //}

        //[HttpDelete]
        //[Route("DeleteSeguro")]
        //public void DeleteSeguro(Guid id)
        //{
        //    var seguro = _context.Seguro.FirstOrDefault(x => x.Id == id);
        //    _context.Seguro.Remove(seguro);
        //    _context.SaveChanges();

        //}
    }


}
