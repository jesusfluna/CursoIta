import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:boolean = false;

  constructor(private dbService:DatabaseService, private router:Router) { }

  ngOnInit(): void {
  }

  acceder(usuario:string, contrasena:string){

    if(this.dbService.userLogin(usuario,contrasena)){
      this.router.navigateByUrl('/principal');
    }

    this.error = true;
    
  }
}
