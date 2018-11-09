import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admincontent',
  templateUrl: './admincontent.component.html',
  styleUrls: ['./admincontent.component.css']
})
export class AdmincontentComponent implements OnInit {

  constructor(private tcs:ServiceService,private router:Router) { }

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

  ngOnInit() {
   
  }

}




