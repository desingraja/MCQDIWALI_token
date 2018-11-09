import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service'
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { unwrapResolvedMetadata } from '@angular/compiler';

@Component({
  selector: 'app-meanstack',
  templateUrl: './meanstack.component.html',
  styleUrls: ['./meanstack.component.css']
})
export class MeanstackComponent implements OnInit {

  create:FormGroup;
 
  public array:any=[];
  constructor(private ab:ServiceService,private c:FormBuilder){  }
 submit(uname,unamelast,mail,psw){

        // console.log(uname,unamelast,mail,psw);
         this.ab.signup(uname,unamelast,mail,psw).subscribe();
 }
 submitt(user,psw)
 {
   console.log(user,psw);
   
this.ab.login(user,psw).subscribe();

 }

    pri(){
      document.getElementById("signup").style.display="none";
      document.getElementById("loginid").style.display="block";

      alert("Account created");


    }
    open(){
      document.getElementById("content").style.display="block";
      document.getElementById("loginid").style.display="none";
      document.getElementById("signup").style.display="none";

    }
    Profile(){
      document.getElementById("navbarNav").style.display="none";
    }
  ngOnInit(){
    // this.det.push(uname,mail,psw)
    document.getElementById("btnid").style.display="show";
  }
}