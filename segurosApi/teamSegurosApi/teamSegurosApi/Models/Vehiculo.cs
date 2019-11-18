using System;
using System.Collections.Generic;

namespace teamSegurosApi.Models
{
    public partial class Vehiculo
    {
        public Vehiculo()
        {
            Seguro = new HashSet<Seguro>();
        }

        public Guid Id { get; set; }
        public Guid MarcaId { get; set; }
        public Guid ModeloId { get; set; }
        public int Anio { get; set; }
        public string Placa { get; set; }
        public DateTime FechaCompra { get; set; }
        public bool EstaAsegurado { get; set; }
        protected virtual Marca Marca { get; set; }
        protected virtual Modelo Modelo { get; set; }
        protected virtual ICollection<Seguro> Seguro { get; set; }
    }
}
