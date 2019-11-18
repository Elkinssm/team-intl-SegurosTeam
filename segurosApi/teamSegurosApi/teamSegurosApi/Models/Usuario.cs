using System;
using System.Collections.Generic;

namespace teamSegurosApi.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Seguro = new HashSet<Seguro>();
        }

        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public Guid? TipoDocumentoId { get; set; }
        public string NumeroDocumento { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public Guid CiudadId { get; set; }
        public Guid RolId { get; set; }
        public string Email { get; set; }
        public string Clave { get; set; }
        public string Token { get; set; }

        public virtual Ciudad Ciudad { get; set; }
        public virtual Rol Rol { get; set; }
        public virtual TipoDocumento TipoDocumento { get; set; }
        public virtual ICollection<Seguro> Seguro { get; set; }



    }
}
