import { Injectable } from '@angular/core';
/* httpClient es un injectable se inyecta dentro del servicio el cual lo va a manejar., el servicio es el elemento de mi aplicaci´pon que se encarga de hacer la peticiones a base de datos y repartir los datos entro los componentes */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  //En angular hay dos formas de gestionar peticiones http, observables, promises

  /*
   * getByPage(numPag) : response{} Le paso una pagina y me devuelve un objeto response, y de este objeto necesito el data que es mi array usuarios.
   */
  getByPage(pNum: number = 1): Promise<any> {
    //con promesas lastValueFrom() convierte un observable en promesa
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '?page=' + pNum));

  }

  /*
  * getById(id: number) : any
  */
  getById(pId: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + "/" + pId))
  }

  /*
  * createUser(pForm: any) : Promise<User>
  */

  createUser(pForm: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, pForm, httpOptions))
  }

}
