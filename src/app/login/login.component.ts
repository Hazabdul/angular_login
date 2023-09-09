import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from Angular router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  signupUsers: any[] = [];
  signupobj: any = {
    userName: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    userName: '',
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void { 
    const localdata = localStorage.getItem('signupUsers');
    if (localdata !== null) {
      this.signupUsers = JSON.parse(localdata);
    }
  }

  onSignup() {
    this.signupUsers.push(this.signupobj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers)); // Corrected the localStorage key
    this.signupobj = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (user) => user.userName === this.loginObj.userName && user.password === this.loginObj.password
    );
    
    if (isUserExist !== undefined) {
      alert('Login successful');
      this.loggedIn = true; // Set loggedIn to true to hide the login component
      // You can navigate to the dashboard here using the Router
      this.router.navigate(['/dashboard']);
    } else {
      alert('Wrong username and password');
    }
  }
}
