using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options; 
using System.Net;
using System.Net.Mail;
// using Microsoft.Extensions.Configuration;  

public class ContactRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
    public string Feedback { get; set; }
}

public class EmailSettings
{
    public string RecipientEmail { get; set; }
    public string FromEmail { get; set; }
    public string AppPassword { get; set; }
}

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly EmailSettings _emailSettings;

    public ContactController(IOptions<EmailSettings> emailOptions)
    {
        _emailSettings = emailOptions.Value;
    }

[HttpPost]
    public IActionResult Send([FromBody] ContactRequest data)
    {
        try
        {
            var fromEmail = _emailSettings.FromEmail;
            var appPassword = _emailSettings.AppPassword;
            var recipient = _emailSettings.RecipientEmail;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential(fromEmail, appPassword),
                EnableSsl = true,
            };

            var mail = new MailMessage
            {
                From = new MailAddress(fromEmail),
                Subject = $"New Portfolio Message: {data.FirstName} {data.LastName}",
                Body =
$@"Name: {data.FirstName} {data.LastName}
Email: {data.Email}
Phone: {data.Phone}

Message:
{data.Feedback}",
                IsBodyHtml = false
            };

            mail.To.Add(recipient);

            smtpClient.Send(mail);

            return Ok(new { message = "Email sent successfully!" });
        }
        catch (SmtpException smtpEx)
        {
            // Log smtpEx.Message if you have logging
            return StatusCode(500, new { message = "Failed to send email (SMTP)." });
        }
        catch (Exception ex)
        {
            // Log ex.Message
            return StatusCode(500, new { message = "Failed to send email." });
        }
    }
}