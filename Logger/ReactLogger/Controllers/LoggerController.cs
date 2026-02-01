using Microsoft.AspNetCore.Mvc;
using MVCDemo.Logger;

namespace MVCDemo.Controllers
{
    [ApiController]
    [Route("api/logger")]
    public class LoggerController : ControllerBase
    {
        

        [HttpPost]
        public IActionResult Log([FromBody] string message)
        {
            FileLogger.CurrentLogger.Log("[Frontend] " + message);
            return Ok("Logged");
        }
    }
}
