import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {
 private array:any;
  constructor(private ServiceService :ServiceService) { }

  ngOnInit() {

    
  }

 

  createquestion(Qno,question,option1,option2,option3,option4,keyanswer){
    this.ServiceService.create(Qno,question,option1,option2,option3,option4,keyanswer).subscribe(res =>{
       
       // console.log("componentes :"+Qno,question,option1,option2,option3,option4,keyanswer);
     },
   error =>{
     // console.log("unable to save");
   })
 
    console.log("components"+Qno,question,option1,option2,option3,option4,keyanswer)
   }

   pri(){
     
   }
set:any=[]
   store(input){


   this.set.push(input)
   this.ServiceService.values(this.set);
   console.log("array"+this.set)
     
   }
 
 
 }

