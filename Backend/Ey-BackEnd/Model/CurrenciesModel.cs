using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ey_BackEnd.Model
{
    public class CurrenciesModel
    {
        public int crrId { get; set; }
        public string crrCode { get; set; }
        public string crrCurrencyName { get; set; }
        public string crrCountry { get; set; }
    }
}
