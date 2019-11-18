using System;
using System.Collections.Generic;

namespace teamSegurosApi.Models
{
    public partial class Ciudad
    {
        public Ciudad()
        {
            Usuario = new HashSet<Usuario>();
        }

        public Guid Id { get; set; }
        public string Nombre { get; set; }

        protected virtual ICollection<Usuario> Usuario { get; set; }
    }
}
