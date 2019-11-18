using System;

namespace teamSegurosApi.Models
{
    public partial class Seguro
    {
        public Guid Id { get; set; }
        public Guid UsuarioId { get; set; }
        public Guid? VehiculoId { get; set; }
        public decimal? Valor { get; set; }

        public virtual Usuario Usuario { get; set; }
        public virtual Vehiculo Vehiculo { get; set; }
    }
}
