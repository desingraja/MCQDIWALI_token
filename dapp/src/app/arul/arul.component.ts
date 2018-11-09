import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
import {Router} from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-arul',
  templateUrl: './arul.component.html',
  styleUrls: ['./arul.component.css']
})
export class ArulComponent implements OnInit {

data:any=[]
  constructor(private service :ServiceService,private router:Router) { }
  // let details=[];

 
//  click(){
//    document.getElementById("custsignup").style.display="none";
//    document.getElementById("login").style.display="block";

//  }

clickk(name,empid,mail,pwd){
  console.log(name,empid,mail,pwd);

  this.service.usersignup(name,empid,mail,pwd).subscribe();
}

userlogin(name,empid,pwd)
{
  this.service.userlog(name,empid,pwd).subscribe();
}

show(a,d){
  console.log("First"+a,d)
document.getElementById('custid').style.display='none';
  if((a=='tezos')&&(d=='&#MNW123'))
  {
    this.service.style();

  }
  else if((a!='')&&(d!='')){
        this.router.navigate(['/test'])
  }
  else{
    alert("plz fill valid details only")
  }
}
// }
//name.value,empid.value,mail.value,pwd.value

  ngOnInit() {
    
  }
 


}



// import { Component, OnInit } from '@angular/core';
// import {ServiceService} from '../service.service';
// import {Router} from '@angular/router';
// import { ValueTransformer } from '@angular/compiler/src/util';

// @Component({
//   selector: 'app-admincontent',
//   templateUrl: './admincontent.component.html',
//   styleUrls: ['./admincontent.component.css']
// })
// export class AdmincontentComponent implements OnInit {

//   constructor(private tcs:ServiceService,private router:Router) { }

// open(){
// }
// submitt(e,f){
// document.getElementById('loginid').style.display='none';
//   if((e=='tezos')&&(f=='&#MNW123'))
//   {
//     this.tcs.style();

//   }
//   else if((e!='')&&(f!='')){
//         this.router.navigate(['/arul'])
//   }
//   else{
//     alert("plz fill valid details only")
//   }

// }

//   ngOnInit() {
   
//   }

// }




