import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  

    Users=[];

    constructor( private service:DashboardService) { }

    ngOnInit() {
      this.Users=this.service.getUserdata()
    }

  
}
