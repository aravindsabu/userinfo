import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchdata()
  }
  fetchdata=()=>{
    this.myapi.viewaddinfo().subscribe(
      (data)=>{
        this.usdata=data
      }
    )
  }
  usdata:any=[]

  ngOnInit(): void {
  }

}
