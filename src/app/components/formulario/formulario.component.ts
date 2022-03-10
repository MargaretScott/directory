import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async recogerDatosForm(pForm: any) {
    // console.log(pForm.value)
    const response = await this.usersService.createUser(pForm.value)
    //este console log me devuelve el nuevo usuario.
    console.log(response);

    if (response.id) {
      //redirigir a la lista de usuarios
      alert('Usuario creado correctamente')
      this.router.navigate(['/agenda'])
    } else {
      alert('Error usuario no registrado, intentelo de nuevo')
    }
  }

}
