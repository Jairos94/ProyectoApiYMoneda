using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Ey_BackEnd.Database
{
    public class db
    {
        
        private const string server = "DESKTOP-4FJOI9V";
        private const string user = "EyTest";
        private const string password = "12345678";
        private const string dataBase = "DI_MFSD_J_R";
        private const string conexion = "Data Source=" + server + "; Initial Catalog= " + dataBase + "; User ID=" + user + "; Password=" + password;

        public SqlConnection GetConnection()
        {
            return new SqlConnection(conexion);
        }
    }
}
