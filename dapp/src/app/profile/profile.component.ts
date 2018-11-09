import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ref:ServiceService) { }

  array:any=[];
  Name
  Mail
  Last
  i:any=53
  
  fun(){
    this.i++;
    this.ref.getsignup().subscribe((res)=>{
      this.array=res;
           console.log(res)
           this.Name=this.array[this.i].uname;

            this.Mail=this.array[this.i].mail;
            this.Last=this.array[this.i].unamelast;
                  })
      
   
  }
  ngOnInit() {



      this.fun()
  

  
  }


  


}
