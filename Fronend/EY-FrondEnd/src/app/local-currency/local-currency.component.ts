import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { GlobalConstants } from '../active';
import { CurrenciesModel } from '../interface/CurrenciesInterface';
import { InsertTransactionModel } from '../interface/insert-transaction-model';
import { PairInterface } from '../interface/pair-interface';
import { ChangeSerciveService } from '../services/change-sercive.service';


@Component({
  selector: 'app-local-currency',
  templateUrl: './local-currency.component.html',
  styleUrls: ['./local-currency.component.css']
})
export class LocalCurrencyComponent implements OnInit {

  value1:string='USD';
  value2:string='CRC';
  result:number=0;
  CorrencyM:CurrenciesModel []=[];
  CorrencyCRC:CurrenciesModel [] =[];
  ValueUSD:PairInterface | undefined;
  //InsertM: InsertTransactionModel | undefined;
  ValUsd:number=0;
  DollarActive:boolean=false;

  USD = new FormControl('');
  CRC = new FormControl('');

    constructor(private service:ChangeSerciveService, ) 
    {

     }

  ngOnInit(): void {
    this.dataUsd();
  }

  dataUsd(){
    this.service.getMoney(this.value2)
                .subscribe((m=>{
                
                  this.CorrencyM=m;
                              }),
                              (_error=>{
                                Swal.fire({
                                  icon: 'error',
                                  title: 'Oops...',
                                  text: _error.error,
                                })
                              }));
                              
    this.service.getMoney(this.value1)
                .subscribe((m=>{
                                this.CorrencyCRC=m;
                                            }),
                                            (_error=>{
                                              Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: _error.error,
                                              })
                              }));

  this.service.getChance(this.value1,this.value2)
              .subscribe((v=>{
                this.ValUsd=v.conversion_rate;
                
                this.ValueUSD=v;
              }),(_error=>{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: _error.error,
                })
              }));
  }
  calculate(){
    
   
      
    if(this.USD.value>0 && this.CRC.value!=''|| this.CRC.value==0)
    {
      
      this.DollarActive=true;
      this.result= this.USD.value * this.ValUsd;
    }else{
      this.DollarActive=false;
      this.result= this.CRC.value / this.ValUsd;
    }
    const InsertM = new InsertTransactionModel();
      
    InsertM.idkindTransaction=1;
      
    InsertM.idUser= GlobalConstants.userActive.userId;
      if(this.DollarActive )
      {
        InsertM.idSourceCurrency= this.CorrencyM[0].crrId
        InsertM.idDestinationCurrency= this.CorrencyCRC[0].crrId;
        InsertM.valueSourceCurrency=this.USD.value;
      }else{
        
        InsertM.idSourceCurrency=this.CorrencyCRC[0].crrId
        InsertM.idDestinationCurrency=this.CorrencyM[0].crrId
        InsertM.valueSourceCurrency=this.CRC.value;
        
      }
      InsertM.valueSourceDestinationCurrency = this.result;
      
    this.service.insertData(InsertM)
                .subscribe((r=>{console.log(r)}),(_erro=>{ console.log(_erro)}));
  }
}
