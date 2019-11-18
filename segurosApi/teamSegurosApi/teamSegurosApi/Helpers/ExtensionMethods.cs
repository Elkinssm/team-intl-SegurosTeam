using System.Collections.Generic;
using System.Linq;
using teamSegurosApi.Data.Dto;

namespace teamSegurosApi.Helpers
{
    public static class ExtensionMethods
    {
        public static IEnumerable<UsuarioDto> WithoutPasswords(this IEnumerable<UsuarioDto> users)
        {
            return users.Select(x => x.WithoutPassword());
        }

        public static UsuarioDto WithoutPassword(this UsuarioDto user)
        {
            user.Clave = null;
            return user;
        }
    }
}
