using System.Collections.Generic;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Models;

namespace teamSegurosApi.Services
{
    public interface IVehiculoService
    {
        ResponsePackage<IEnumerable<Vehiculo>> TraerVechiculosRegistrados();
        ResponsePackage<IEnumerable<Vehiculo>> TraerVechiculosNoRegistrados();
        ResponsePackage<bool> RegistrarVehiculo(VehiculoDto vehiculoDto);
        ResponsePackage<IEnumerable<Vehiculo>> TraerVehiculosCliente(string clienteId);
    }
}
