using System;

namespace teamSegurosApi.Data.Dto
{
    public class UsuarioDto
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string TipoDocumentoId { get; set; }
        public string NumeroDocumento { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string CiudadId { get; set; }
        public string Email { get; set; }
        public string Clave { get; set; }
        public string RolId { get; set; }
        public string Rol { get; set; }
        public string Token { get; set; }
    }
}