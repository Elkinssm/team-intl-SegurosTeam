using System;
using System.Collections.Generic;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Models;

namespace teamSegurosApi.Services
{
    public class VehiculoService : IVehiculoService
    {
        private readonly SegurosContext _db;
        public VehiculoService(SegurosContext db)
        {
            _db = db;
        }

        public ResponsePackage<IEnumerable<Vehiculo>> TraerVechiculosRegistrados()
        {
            var responsePackage = new ResponsePackage<IEnumerable<Vehiculo>>();
            var vehiculos = _db.Vehiculo.Where(v => v.EstaAsegurado == true);
            responsePackage.Result = vehiculos;
            return responsePackage;
        }

        public ResponsePackage<IEnumerable<Vehiculo>> TraerVechiculosNoRegistrados()
        {
            var responsePackage = new ResponsePackage<IEnumerable<Vehiculo>>();
            var vehiculos = _db.Vehiculo.Where(v => v.EstaAsegurado == false);
            responsePackage.Result = vehiculos;
            return responsePackage;
        }

        public ResponsePackage<IEnumerable<Vehiculo>> TraerVehiculosCliente(string clienteId)
        {
            var responsePackage = new ResponsePackage<IEnumerable<Vehiculo>>();
            var vehiculosAsegurados = _db.Seguro.Where(s => s.UsuarioId == Guid.Parse(clienteId)).Select(v => v.VehiculoId);
            var vehiculos = _db.Vehiculo.Where(v => vehiculosAsegurados.Contains(v.Id));
            responsePackage.Result = vehiculos;
            return responsePackage;
        }

        public ResponsePackage<bool> RegistrarVehiculo(VehiculoDto vehiculoDto)
        {
            var responsePackage = new ResponsePackage<bool> { Result = false };
            try
            {
                var vehiculo = new Vehiculo
                {
                    MarcaId = Guid.Parse(vehiculoDto.MarcaId),
                    ModeloId = Guid.Parse(vehiculoDto.ModeloId),
                    Placa = vehiculoDto.Placa,
                    FechaCompra = vehiculoDto.FechaCompra
                };

                _db.Vehiculo.Add(vehiculo);
                _db.SaveChanges();
                responsePackage.Message = "Se ha registrado el vehiculo correctamente";
                responsePackage.Result = true;
            }
            catch (Exception ex)
            {
                responsePackage.Message = "Se ha presentado un error al registrar el vehiculo";

            }
            return responsePackage;
        }
    }
}
