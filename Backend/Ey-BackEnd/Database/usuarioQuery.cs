using Ey_BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Ey_BackEnd.Database
{
    
    public class usuarioQuery
    {
        db data = new db();
        
        public object Loging(string userLogin, string pass) 
        {
            
            userModel user = new userModel();
            string msm = "";
            SqlConnection conn = data.GetConnection();
            bool hasData = false;

            try
            {
                SqlDataReader reader;
                SqlCommand command = conn.CreateCommand();
                conn.Open();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "Loging";
                command.Parameters.Add("@User", SqlDbType.VarChar, 100).Value = userLogin;
                command.Parameters.Add("@Pass", SqlDbType.VarChar, 100).Value = pass;
                //command.ExecuteNonQuery();
                reader = command.ExecuteReader();
                while (reader.Read())
                {
                    try
                    {
                        hasData = true;
                        user.userId = reader.GetInt32(0);
                        user.userMail = reader.GetString(1);
                        user.userName = reader.GetString(2);
                        user.userRol = reader.GetInt32(3);
                    }
                    catch (Exception)
                    {
                        hasData = false;
                        msm = reader.GetString(0);

                    }
                }
                if (hasData)
                {
                    return user;
                }
                else 
                {
                    return msm;
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            { conn.Close(); }
           
        }

        public object GetInformationUser()
        {

            userModel user = new userModel();
   
            SqlConnection conn = data.GetConnection();
     

            try
            {
                SqlDataReader reader;
                SqlCommand command = conn.CreateCommand();
                conn.Open();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "GetInformationUser";
                List<UserInformtionModel> listUIM = new List<UserInformtionModel>();
                //command.ExecuteNonQuery();
                reader = command.ExecuteReader();
                while (reader.Read())
                {
                        UserInformtionModel uim = new UserInformtionModel();
                        uim.UsrName = reader.GetString(0);
                        uim.convertCurrencies = reader.GetString(1);
                        uim.SourceCurrency = reader.GetDouble(2);
                        uim.DestinationCurrency = reader.GetDouble(3);
                        listUIM.Add(uim);
                }
                return listUIM;

            }
            catch (Exception ex)
            {
               return ex;
            }
            finally
            { conn.Close(); }

        }
    }
}
