var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy
                .WithOrigins("https://aarikguy.com")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowFrontend");
app.MapControllers();

app.Run();