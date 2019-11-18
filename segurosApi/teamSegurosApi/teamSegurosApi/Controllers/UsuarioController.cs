using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using teamSegurosApi.Data.Dto;
using teamSegurosApi.Services;

namespace teamSegurosApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/v2/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("SaveUser")]
        public IActionResult SaveUser([FromBody]UsuarioDto usuarioDto)
        {
            var response = _usuarioService.SaveUSer(usuarioDto);
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Authenticate")]
        public IActionResult Authenticate([FromBody]SignInDto signInDto)
        {
            var response = _usuarioService.Authenticate(signInDto.Email, signInDto.Clave);
            return Ok(response);
        }
    }
}