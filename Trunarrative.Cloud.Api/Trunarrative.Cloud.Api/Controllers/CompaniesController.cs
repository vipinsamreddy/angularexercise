using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

namespace Trunarrative.Cloud.Api.Controllers
{
    [Route("TruProxyAPI/rest/Companies/v1")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private const string baseUrl = "https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1";
        private readonly IHttpClientFactory _httpClientFactory;
        public CompaniesController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("search/{query}")]
        public async Task<IActionResult> CompanySearch(string query)
        {
            
            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, $"{baseUrl}/Search?Query={query}")
            {
                Headers =
                {
                     { HeaderNames.Accept, "application/json" },
                     { "x-api-key", "" }
            }
            };
            var httpClient = _httpClientFactory.CreateClient();
            var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

            if (httpResponseMessage.IsSuccessStatusCode)
            {
                return Ok(await httpResponseMessage.Content.ReadAsStringAsync());
            }
            else
                return BadRequest();
        }

        [HttpGet("Officers/{companyNumber}")]
        public async Task<IActionResult> GetCompanyOfficers(string companyNumber)
        {

            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, $"{baseUrl}/Officers?CompanyNumber={companyNumber}")
            {
                Headers =
                {
                     { HeaderNames.Accept, "application/json" },
                     { "x-api-key", "" }
            }
            };
            var httpClient = _httpClientFactory.CreateClient();
            var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

            if (httpResponseMessage.IsSuccessStatusCode)
            {
                return Ok(await httpResponseMessage.Content.ReadAsStringAsync());
            }
            else
                return BadRequest();
        }

    }
}
