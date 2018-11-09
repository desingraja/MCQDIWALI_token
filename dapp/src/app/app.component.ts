
import { Component } from '@angular/core';
import { ServiceService} from './service.service'
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { HammerGesturesPlugin } from '@angular/platform-browser/src/dom/events/hammer_gestures';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  create:FormGroup;
  public array:any=[];
  constructor(private ab:ServiceService,private c:FormBuilder){  }

show(){

  document.getElementById('mainid').style.display="none";
}

note(){
  document.getElementById('mainid').style.display="none";

}
z:any=0;   

openNav() {
  this.z++;     if(this.z%2!=0){
       document.getElementById("mySidenav").style.width = "140px";
  
  }
   else{
   document.getElementById("mySidenav").style.width = "0px";
   }   
  }
  showed()
  {
    // setInterval(() => {
    //   this.ab.style1()
      
    // }, 1000);
    // document.getElementById('styleid').style.display='block';

    
    // document.getElementById("mySidenav").style.width = "140px";
    // document.getElementById(
  }


   ngOnInit()
   {
    // this.showed()
    document.getElementById("mySidenav").style.width = "140px";
    // document.getElementById("login").style.display="none";

  }
 
}
