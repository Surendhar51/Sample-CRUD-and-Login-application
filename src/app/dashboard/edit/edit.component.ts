import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  userForm: FormGroup;
  msg: String = '';
  user = { id: 0, name: "", email: "", mobile:0,role: "" };

  constructor(
    private service: DashboardService,
    private router: Router,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      role: new FormControl(''),
    })

    this.route.params.subscribe(param => {
      if(param && param.id){
        this.user=this.service.getUserId(param.id);
        if(this.user){
          this.userForm.setValue(this.user);
          }
        else this.router.navigate(['/list'])
      }
    })
  }

  Update(){
    if(this.userForm.valid){
      this.updateUser(this.userForm.value);
      this.router.navigateByUrl("/list");
    }
  }

  updateUser(data) {
    const index = this.service.Users.map(x => x.id).indexOf(data.id);
    if (index !== -1) {
      this.service.Users[index] = data;
    }
  }

  deleteUser(){
    this.service.deleteUser(this.user.id);
    console.log(this.user.id);
    this.router.navigateByUrl("/list");
  }
}
