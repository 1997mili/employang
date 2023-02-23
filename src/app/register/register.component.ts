import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  registerUsers:any[]=[];
  registerObj:any={
    uname:'',
    email:'',
    psw:''
  };

  

  constructor(){}

  ngOnInit():void{
  const localData =localStorage.getItem('registerUsers')
  if(localData!=null){
    this.registerUsers=JSON.parse(localData)
  }

  }
  onSignUp(){
    this.registerUsers.push(this.registerObj)
    localStorage.setItem('registerUsers',JSON.stringify(this.registerUsers));
   this.registerObj={
      uname:'',
      email:'',
      psw:''
    };
  
  }
}
