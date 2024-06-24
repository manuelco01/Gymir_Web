import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    title: 'Registro',
  };

  constructor(private router: Router) { }

  onSubmit() {
    // Aquí puedes agregar la lógica de registro, por ejemplo, llamando a un servicio
    console.log('Formulario enviado', this.registerData);

    // Redirigir a la página de inicio
    this.router.navigate(['/home']);
  }
}
