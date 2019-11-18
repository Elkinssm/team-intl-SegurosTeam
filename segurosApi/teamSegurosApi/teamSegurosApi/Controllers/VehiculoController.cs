using Microsoft.AspNetCore.Mvc;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Services;

namespace teamSegurosApi.Controllers
{
    [Route("api/v2/[controller]")]
    [ApiController]
    public class VehiculoController : ControllerBase
    {
        private readonly IVehiculoService _vehiculoService;
        public VehiculoController(IVehiculoService vehiculoService)
        {
            _vehiculoService = vehiculoService;
        }

        [HttpGet]
        [Route("TraerVehiculosNoRegistrados")]
        public IActionResult TraerVehiculosNoRegistrados()
        {
            var vehiculos = _vehiculoService.TraerVechiculosNoRegistrados();
            return Ok(vehiculos);
        }

        [HttpGet]
        [Route("TraerVehiculosRegistrados")]
        public IActionResult TraerVehiculosRegistrados()
        {
            var vehiculos = _vehiculoService.TraerVechiculosRegistrados();
            return Ok(vehiculos);
        }

        [HttpGet]
        [Route("TraerVehiculosCliente")]
        public IActionResult TraerVehiculosCliente(string clienteId)
        {
            var vehiculos = _vehiculoService.TraerVehiculosCliente(clienteId);
            return Ok(vehiculos);
        }


        [HttpPost]
        [Route("RegistrarVehiculo")]
        public IActionResult RegistrarVehiculo([FromBody]VehiculoDto vehiculoDto)
        {
            var response = _vehiculoService.RegistrarVehiculo(vehiculoDto);
            return Ok(response);
        }
    }
}
