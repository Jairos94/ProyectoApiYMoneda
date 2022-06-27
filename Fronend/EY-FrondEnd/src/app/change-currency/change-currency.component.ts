import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { GlobalConstants } from '../active';
import { CurrenciesModel } from '../interface/CurrenciesInterface';
import { InsertTransactionModel } from '../interface/insert-transaction-model';
import { PairInterface } from '../interface/pair-interface';
import { ChangeSerciveService } from '../services/change-sercive.service';

@Component({
  selector: 'app-change-currency',
  templateUrl: './change-currency.component.html',
  styleUrls: ['./change-currency.component.css']
})
export class ChangeCurrencyComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();



  deboucer: Subject<string> = new Subject();
  deboucer2: Subject<string> = new Subject();

  cuncurry: string = ''
  destination: string = ''
  search: string = '';
  search2: string = '';
  result:number=0;
  CurrenciesModel: CurrenciesModel[] = [];
  CurrenciesModel2: CurrenciesModel[] = [];
  Info:PairInterface= new PairInterface();
  Data:InsertTransactionModel= new InsertTransactionModel();
  value:number=0;

  constructor(private service: ChangeSerciveService) { }

  ngOnInit() {
    this.deboucer
      .pipe(debounceTime(300))
      .subscribe(val => {
        //this.deboucer.next(val);
        this.searchMoney();

      });

    this.deboucer2
      .pipe(debounceTime(300))
      .subscribe(val => {
        //this.deboucer.next(val);
        this.searchMoney2();
      });

  }

  KeybordPress() {
    this.deboucer.next(this.search);


  }

  KeybordPress2() {
    this.deboucer2.next(this.search2);


  }

  keyboardEnter() {

    this.onEnter.emit(this.search2);
  }
  keyboardEnter2() {

    this.onEnter.emit(this.search2);


  }

  searchMoney() {
    this.CurrenciesModel = [];
    this.service.getMoney(this.search).subscribe((val => {
      this.CurrenciesModel = val;
      if (this.CurrenciesModel.length == 1) {
        this.cuncurry = this.CurrenciesModel[0].crrCode;
      }

    }), (_error => {
    }));
  }
  searchMoney2() {
    this.CurrenciesModel2 = [];
    this.service.getMoney(this.search2).subscribe((val => {
      this.CurrenciesModel2 = val;
      if (this.CurrenciesModel2.length == 1) {
        this.destination = this.CurrenciesModel2[0].crrCode;
        this.values();
        console.log(this.Info);
        
      }
    }), (_error => {
    }));
  }

  values(){
    this.service.getChance(this.CurrenciesModel[0].crrCode,this.CurrenciesModel2[0].crrCode)
    .subscribe((val=>{
this.Info=val;
    }),(_error=>{
      
    }));
  }
  resultO(){
    
    this.result= this.Info.conversion_rate * this.value;
    this.Data.idDestinationCurrency=this.CurrenciesModel2[0].crrId;
    this.Data.idSourceCurrency=this.CurrenciesModel[0].crrId;
    this.Data.idUser= GlobalConstants.userActive.userId;
    this.Data.idkindTransaction=2
    this.Data.valueSourceCurrency= this.value;
    this.Data.valueSourceDestinationCurrency=this.result;
    this.service.insertData(this.Data).subscribe((val=>{
      console.log(val);
      
    }),(_error=>{
      console.log(_error);
    }));
  }
}
