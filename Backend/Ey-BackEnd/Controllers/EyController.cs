using Ey_BackEnd.Database;
using Ey_BackEnd.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ey_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EyController : ControllerBase
    {
        CurrencyQuery cq = new CurrencyQuery();
        usuarioQuery uq = new usuarioQuery();
        [HttpGet("Loging")]
        public async Task<IActionResult> Loging(string user,string pass)
        {
            
            var res = uq.Loging(user, pass);
            try
            {
                
                try
                {
                    userModel um = new userModel();
                    um =(userModel) res;
                    return Ok(um);
                }
                catch (Exception)
                {

                    return BadRequest(res);
                }

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpGet("SuggestionsCurrency")]
        public async Task<IActionResult> SuggestionsCurrency(string Data)
        {
            List<CurrenciesModel> cmList = new List<CurrenciesModel>();
            try
            {

                cmList =(List<CurrenciesModel>) cq.SuggestionsCurrency(Data);
                return Ok(cmList);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost("InsertTransaction")]
        public async Task<IActionResult> InsertTransaction(InsertTransactionModel data)
        {
            try
            {
                //InsertTransactionModel itm = new InsertTransactionModel();
                //string output = data.ToString(); ;
                //itm  = JsonConvert.DeserializeObject<InsertTransactionModel>(output);
                bool resul = false;

                resul=(bool) cq.InsertTransaction(data);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
            
        }

        [HttpGet("GetInformationUser")]
        public async Task<IActionResult> GetInformationUser()
        {
           
            try
            {
                List<UserInformtionModel> ListUIM = new List<UserInformtionModel>();
                ListUIM =(List<UserInformtionModel>) uq.GetInformationUser();
                return Ok(ListUIM);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        
    }
}
