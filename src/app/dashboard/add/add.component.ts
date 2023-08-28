import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userForm: FormGroup;
  len = this.service.Users.length + 1;

  constructor(
    private service: DashboardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.len),
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      role: new FormControl(''),
    })
  }
  
  add() {
    if (this.userForm.valid) {
      this.service.Users.push(this.userForm.value);
      this.userForm.reset();
      this.router.navigateByUrl("/list");
    }
  }

}
