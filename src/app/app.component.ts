import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
logout():void{
  let username = this.authService.usuario.username;
  this.authService.logout();
  swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito`, 'success')
  this.router.navigate(['/']);
}
}
