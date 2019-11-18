using System;

namespace teamSegurosApi.Data.Dto
{
    public class VehiculoDto
    {
        public string Id { get; set; }
        public string MarcaId { get; set; }
        public string ModeloId { get; set; }
        public int Anio { get; set; }
        public DateTime FechaCompra { get; set; }
        public string Placa { get; set; }
        public bool EstaAsegurado { get; set; }
    }
}
