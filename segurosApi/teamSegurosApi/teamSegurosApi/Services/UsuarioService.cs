using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Helpers;
using teamSegurosApi.Models;

namespace teamSegurosApi.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly SegurosContext _db;
        private readonly AppSettings _appSettings;
        public UsuarioService(SegurosContext db, IOptions<AppSettings> appSettings)
        {
            _db = db;
            _appSettings = appSettings.Value;
        }

        public ResponsePackage<UsuarioDto> Authenticate(string email, string clave)
        {
            var responsePackage = new ResponsePackage<UsuarioDto>();
            var user = _db.Usuario.SingleOrDefault(x => x.Email == email && x.Clave == clave);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var usuario = new UsuarioDto
            {
                Nombre = user.Nombre,
                Apellido = user.Apellido,
                Email = user.Email,
                Clave = user.Clave,
                TipoDocumentoId = user.TipoDocumentoId.ToString(),
                NumeroDocumento = user.NumeroDocumento,
                RolId = user.RolId.ToString()
            };
            var Role = _db.Rol.FirstOrDefault(r => r.Id == user.RolId);
            usuario.RolId = Role.Nombre;
            usuario.Token = tokenHandler.WriteToken(token);

            responsePackage.Message = "";
            responsePackage.Result = usuario.WithoutPassword();
            return responsePackage;
        }

        public ResponsePackage<bool> SaveUSer(UsuarioDto usuarioDto)
        {
            var responsePackage = new ResponsePackage<bool>();
            try
            {
                var usuario = new Usuario
                {
                    Nombre = usuarioDto.Nombre,
                    Apellido = usuarioDto.Apellido,
                    CiudadId = Guid.Parse(usuarioDto.CiudadId),
                    Clave = usuarioDto.Clave,
                    Email = usuarioDto.Email,
                    TipoDocumentoId = Guid.Parse(usuarioDto.TipoDocumentoId),
                    FechaNacimiento = usuarioDto.FechaNacimiento,
                    NumeroDocumento = usuarioDto.NumeroDocumento,
                    RolId = Guid.Parse(usuarioDto.RolId)
                };

                var user = _db.Usuario.Add(usuario);
                _db.SaveChanges();

                if (!string.IsNullOrEmpty(user.Entity.Id.ToString()))
                {
                    responsePackage.Message = "Usuario guardado satisfactoriamente";
                    responsePackage.Result = true;
                    return responsePackage;
                }
                responsePackage.Message = "Se ha presentado un error al guardar un usuario";
                responsePackage.Result = false;
                return responsePackage;
            }
            catch (Exception ex)
            {

                responsePackage.Message = "Se ha presentado un error al guardar un usuario";
                responsePackage.Result = false;
                responsePackage.Errors = ex;
                return responsePackage;
            }
        }
    }
}
