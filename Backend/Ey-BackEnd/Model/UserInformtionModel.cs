using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ey_BackEnd.Model
{
    public class UserInformtionModel
    {
        public string UsrName { get; set; }
        public string convertCurrencies{ get; set; }
        public double SourceCurrency{ get; set; }
        public double DestinationCurrency { get; set; }
    }
}
