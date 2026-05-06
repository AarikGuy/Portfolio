using Microsoft.AspNetCore.Mvc;

public class ContactRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
    public string Feedback { get; set; }
}

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    [HttpPost]
    [Consumes("application/json")]
    public IActionResult Send([FromBody] ContactRequest data)
    {
        return Ok(new { message = "Received!" });
    }
}