using System;
using System.Linq;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Models;

namespace teamSegurosApi.Services
{
    public class SeguroService
    {
        private readonly SegurosContext _db;
        private const decimal _precioBase = 1000000;
        private const string _validarNombreCiudad = "Medellín";
        public SeguroService(SegurosContext db)
        {
            _db = db;
        }

        public ResponsePackage<bool> AsegurarVehiculo(SeguroDto seguroDto)
        {
            var responsePackage = new ResponsePackage<bool> { Result = false };
            var usuario = _db.Usuario.FirstOrDefault(u => u.Id == Guid.Parse(seguroDto.UsuarioId));
            var porcentajeCiudad = 0;
            var porcentajeEdad = 0;
            var porcentajeTiempoServicio = 0;
            var totalPorcentajes = 0;
            decimal valorRequerimientos = 0;

            if (usuario == null)
            {
                responsePackage.Message = "No se han encontrado datos del usuario";
                return responsePackage;
            }
            var vehiculo = _db.Vehiculo.FirstOrDefault(v => v.Id == Guid.Parse(seguroDto.VehiculoId));
            if (vehiculo == null)
            {
                responsePackage.Message = "No se han encontrado datos del vehiculo";
                return responsePackage;
            }

            if (vehiculo.EstaAsegurado)
            {
                responsePackage.Message = "El vehículo ya se encuentra asegurado";
                return responsePackage;
            }

            var edadUsuario = CalcularEdad(usuario.FechaNacimiento);
            if (edadUsuario < 16)
            {
                responsePackage.Message = "No se realizan ventas de seguro a menores de 16 años";
                return responsePackage;
            }

            if (usuario.Ciudad.Nombre == _validarNombreCiudad)
            {
                porcentajeCiudad = 10;
            }

            if (edadUsuario >= 16 && edadUsuario < 25)
            {
                porcentajeEdad = 30;
            }
            else if (edadUsuario >= 25 && edadUsuario < 40)
            {
                porcentajeEdad = 10;
            }
            else if (edadUsuario >= 40)
            {
                porcentajeEdad = 0;
            }

            if (CalcularTiempoServicio(vehiculo.Anio) > 10)
            {
                porcentajeTiempoServicio = 5;
            }

            totalPorcentajes = porcentajeCiudad + porcentajeEdad + porcentajeTiempoServicio;
            if (totalPorcentajes > 0)
            {
                valorRequerimientos = (_precioBase * (decimal)totalPorcentajes) / 100;
            }

            var seguro = new Seguro
            {
                UsuarioId = Guid.Parse(seguroDto.UsuarioId),
                VehiculoId = Guid.Parse(seguroDto.VehiculoId),
                Valor = _precioBase + valorRequerimientos
            };

            try
            {
                _db.Seguro.Add(seguro);
                vehiculo.EstaAsegurado = true;
                _db.SaveChanges();
                responsePackage.Message = "Se ha registrado el seguro correctamente";
                responsePackage.Result = true;
            }
            catch (Exception ex)
            {
                responsePackage.Message = "Se ha presentado un error al guardar un usuario";
                responsePackage.Result = false;
                responsePackage.Errors = ex;
                return responsePackage;
            }

            return responsePackage;
        }

        private int CalcularEdad(DateTime fechaNacimiento)
        {
            var today = DateTime.Today;
            var age = today.Year - fechaNacimiento.Year;
            if (fechaNacimiento.Date > today.AddYears(-age)) age--;
            return age;
        }

        private int CalcularTiempoServicio(int Anio)
        {
            var today = DateTime.Today;
            var tiempoServicio = today.Year - Anio;
            return tiempoServicio;
        }


    }
}
