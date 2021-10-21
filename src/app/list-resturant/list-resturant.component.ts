import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-resturant',
  templateUrl: './list-resturant.component.html',
  styleUrls: ['./list-resturant.component.css']
})
export class ListResturantComponent implements OnInit {

  public collection :any;

  constructor(private listResto:CommonService) { }

  ngOnInit(): void {

      this.listResto.getRestoList().subscribe((data:any)=>{
        console.log(data)
       this.collection=data
      })

  }

}
