import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { FormControl} from '@angular/forms' //TODO para los formularios ;
import Swal from 'sweetalert2';
import { GlobalConstants } from '../active';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= new FormControl('');
  password = new FormControl('');

  constructor(private route: Router,
              private LoginSer: LoginServiceService,
              ) { }

  ngOnInit(): void {
    
  }

  checkUser(){

 
    const user=this.user.value;
    const pass=this.password.value;
    this.LoginSer.getUser(user,pass)
                 .subscribe((us)=>
                 {
                   //! convierte a json
                  //console.log(JSON.stringify(us));
                    
                   
                  GlobalConstants.userActive=us;
                   this.route.navigate(['/menu'])
                   
                 },(_error)=>{
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: _error.error,
                  })
                  
                   console.error();
                   ;
                 });
   
  }
}
