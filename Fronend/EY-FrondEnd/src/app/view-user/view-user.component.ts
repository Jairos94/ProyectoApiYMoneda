import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserInformationModel } from '../interface/user-information-model';
import { ChangeSerciveService } from '../services/change-sercive.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  uim:UserInformationModel[]=[];
  constructor(private service:ChangeSerciveService) { }

  ngOnInit(): void {
    this.User();
  }

  User(){
   this.service.getInformationUsers().subscribe((u=>{
     this.uim=u;
   }),(_error=>{
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: _error.error,
    })


   }));
  }

}
