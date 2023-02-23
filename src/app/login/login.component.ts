import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerUsers: any[] = [];
  registerObj: any = {
    uname: '',
    email: '',
    psw: ''
  };


  loginUsers: any[] = []

  loginObj: any = {
    uname: '',
    psw: ''
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('registerUsers')
    if (localData != null) {
      this.registerUsers = JSON.parse(localData)
    }


  }
  onLogin() {
    const isUserexist = this.registerUsers.find(m => m.uname == this.loginObj.uname &&  m.psw == this.loginObj.psw );
    if(isUserexist!=undefined){
      alert('user login')
      this.router.navigateByUrl('dashboard')
    }
    else{
       alert('wrong credential')
    }
  }
}
