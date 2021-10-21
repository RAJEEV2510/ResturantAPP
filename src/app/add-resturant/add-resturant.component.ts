import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {

  constructor(private myResto:CommonService) { }

  alert:boolean=false;


  addResto=new FormGroup({
    name:new FormControl(""),
    address:new FormControl(""),
    email:new FormControl("")

  })


  ngOnInit(): void { }

  createResto():any{
    console.log(this.addResto.value)
    this.myResto.addResto(this.addResto.value).subscribe((data:any)=>{
      console.log(data)
      this.closeAlert()
      this.addResto.reset()

    });
  }

  closeAlert():void{

    this.alert=true
  }

  dismissAlert():void{
    this.alert=false
  }



}
