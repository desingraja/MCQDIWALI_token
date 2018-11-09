import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private service:ServiceService) { }
  storey:any=[]
  radioarray:any=[]
  fun(){
  
    this.storey=this.service.storevalue()
    console.log(this.storey)
  }
storee

  result()
  {
    document.getElementById('btn').style.display="none"
    document.getElementById('txtid').style.display="block"

  }


arrays:any=[]
aray:any=[]
storage
values:any=[]
show(){
    
   this.service.getqus().subscribe((res)=>
  { 
   
    this.arrays=res;
   

     
    for(let i=86;i<this.arrays.length;i++)
    {

      this.values=this.arrays[i].KeyAnswer

      this.aray.push(this.values)

   
    }
    
      console.log(this.aray);
   this.math()
    
  })

}


k=0
value
  math(){
for(let i=0;i<this.aray.length;i++)
{
    if(this.storey[i]==this.aray[i])
    {
      this.k++
      
    }
    // else{
    //       this.k--;
    // }
  
}
console.log(this.aray.length/2)
if(this.k>=this.aray.length/2)
{
  this.value="You're pass"

}
else{
  this.value="sorry better luck next time"
}
alert(this.k)
  }
  ngOnInit() {
    this.fun()

    this.show()
 
 
  }

}
