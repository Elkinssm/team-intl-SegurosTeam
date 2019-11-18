using teamSegurosApi.Data;
using teamSegurosApi.Data.Dto;

namespace teamSegurosApi.Services
{
    public interface ISeguroService
    {
        ResponsePackage<bool> AsegurarVehiculo(SeguroDto seguroDto);
    }
}
