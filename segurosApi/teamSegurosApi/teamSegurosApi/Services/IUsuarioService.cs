using System.Collections.Generic;
using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;

namespace teamSegurosApi.Services
{
    public interface IUsuarioService
    {
        ResponsePackage<bool> SaveUSer(UsuarioDto usuarioDto);
        ResponsePackage<UsuarioDto> Authenticate(string email, string clave);
        ResponsePackage<IEnumerable<UsuarioDto>> GetUsuarios();
    }
}
