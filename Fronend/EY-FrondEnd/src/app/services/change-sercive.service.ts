import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrenciesModel } from '../interface/CurrenciesInterface';
import { InsertTransactionModel } from '../interface/insert-transaction-model';


import { PairInterface } from '../interface/pair-interface';
import { UserInformationModel } from '../interface/user-information-model';

@Injectable({
  providedIn: 'root'
})
export class ChangeSerciveService {

  private baseUrlApi: string = environment.baseUrlApi;
  private key: string= environment.key;
  private baseUrl: string= environment.baseUrlDataBase;

  constructor(private http: HttpClient) { }

  getChance(firsValue:string,secondValue:string):Observable<PairInterface>{
   // const params = new HttpParams()
    //.set('user', firsValue)
    //.set('pass', secondValue);
    return this.http.get<PairInterface>(`${this.baseUrlApi + this.key}/pair/${firsValue}/${secondValue}`,);
  }

  getMoney(Data:string):Observable<CurrenciesModel []>
  {
     const params = new HttpParams()
    .set('Data', Data)
   
    return this.http.get<CurrenciesModel[]>(`${this.baseUrl}SuggestionsCurrency`,{params});
  }

  insertData(insert:InsertTransactionModel):Observable<InsertTransactionModel>{
    const params = new HttpParams()
    .set('Data',JSON.stringify(insert))
    return this.http.post<InsertTransactionModel>(`${this.baseUrl}InsertTransaction`,insert);
  }

  getInformationUsers():Observable<UserInformationModel []>{
    return this.http.get<UserInformationModel[]>(`${this.baseUrl}GetInformationUser`)
  }
}
