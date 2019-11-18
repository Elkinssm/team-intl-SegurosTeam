using System;
using System.Collections.Generic;

namespace teamSegurosApi.Models
{
    public partial class Marca
    {
        public Marca()
        {
            Modelo = new HashSet<Modelo>();
            Vehiculo = new HashSet<Vehiculo>();
        }

        public Guid Id { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Modelo> Modelo { get; set; }
        public virtual ICollection<Vehiculo> Vehiculo { get; set; }
    }
}
