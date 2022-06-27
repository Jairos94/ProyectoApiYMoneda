using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ey_BackEnd.Model
{
    public class InsertTransactionModel
    {
        public int idkindTransaction { get; set; }
        public int idUser { get; set; }
        public int idSourceCurrency { get; set; }
        public int idDestinationCurrency { get; set; }
        public float ValueSourceCurrency { get; set; }
        public float ValueSourceDestinationCurrency { get; set; }
    }
}
