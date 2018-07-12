
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  public txtuserid = '';
  public invalidLogin = '';
  constructor(
    private router: Router,
    ) {
        if (sessionStorage.getItem('accessToken') != null) {
            let auths = sessionStorage.getItem('authorities');
            if(auths === undefined || auths === null || auths === '') {
                return;
            }
            let arrauth = auths.split('-');
            let isTure: boolean = false;
            for (const a of arrauth) {
                if (a === 'FUNCSUP') {
                    this.router.navigateByUrl('/policy');
                }
                if (a === 'FUNCUSER') {
                        this.router.navigateByUrl('');
                }
            }
        }
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      txtuserid: new FormControl(null, Validators.required),
      txtpassword: new FormControl(null, Validators.required)
  });
  }
  onLogin(){
    const username = this.myForm.value.txtuserid;
    const password = this.myForm.value.txtpassword;

this.myForm.reset();;
  }
}
