using System;
using System.Collections.Generic;

namespace teamSegurosApi.Models
{
    public partial class Modelo
    {
        public Modelo()
        {
            Vehiculo = new HashSet<Vehiculo>();
        }

        public Guid Id { get; set; }
        public Guid? MarcaId { get; set; }
        public string Nombre { get; set; }

        public virtual Marca Marca { get; set; }
        protected virtual ICollection<Vehiculo> Vehiculo { get; set; }
    }
}
