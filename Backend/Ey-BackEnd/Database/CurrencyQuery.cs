using Ey_BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Ey_BackEnd.Database
{
    public class CurrencyQuery
    {
        db data = new db();

        public object InsertTransaction(InsertTransactionModel InsertData)
        {
            SqlConnection conn = data.GetConnection();


            try
            {
                SqlDataReader reader;
                SqlCommand command = conn.CreateCommand();
                conn.Open();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "InsertTransaction";
                command.Parameters.Add("@idkindTransaction", SqlDbType.Int).Value = InsertData.idkindTransaction;
                command.Parameters.Add("@idUser", SqlDbType.Int).Value = InsertData.idUser;
                command.Parameters.Add("@idSourceCurrency", SqlDbType.Int).Value = InsertData.idSourceCurrency;
                command.Parameters.Add("@idDestinationCurrency", SqlDbType.Int).Value = InsertData.idDestinationCurrency;
                command.Parameters.Add("@ValueSourceCurrency", SqlDbType.Float).Value = InsertData.ValueSourceCurrency;
                command.Parameters.Add("@ValueSourceDestinationCurrency", SqlDbType.Float).Value = InsertData.ValueSourceDestinationCurrency;


                //command.ExecuteNonQuery();
                reader = command.ExecuteReader();
                return true;

            }
            catch (Exception ex)
            {
                return ex.Message;

            }
            finally
            { conn.Close(); }

        }

        public object SuggestionsCurrency(string Data)
        {
            SqlConnection conn = data.GetConnection();
            List<CurrenciesModel> list = new List<CurrenciesModel>();

            try
            {
                SqlDataReader reader;
                SqlCommand command = conn.CreateCommand();
                conn.Open();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "SuggestionsCurrency";
                command.Parameters.Add("@Data", SqlDbType.VarChar,300).Value = Data;
                reader = command.ExecuteReader();
                while (reader.Read())
                {
                    CurrenciesModel currency = new CurrenciesModel();
                    currency.crrId = reader.GetInt32(0);
                    currency.crrCode = reader.GetString(1);
                    currency.crrCurrencyName = reader.GetString(2);
                    currency.crrCountry = reader.GetString(3);
                    list.Add(currency);
                }
              
                return list;

            }
            catch (Exception ex)
            {
                return ex.Message;

            }
            finally
            { conn.Close(); }

        }
    }
}
