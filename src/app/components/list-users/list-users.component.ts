import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  arrUsers: User[] = [];
  paginas: number[] = [];
  page: number = 1;
  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    const peticion = await this.usersService.getByPage()
    this.paginas = new Array(peticion.total_pages)
    // console.log(this.paginas)
    this.arrUsers = peticion.data;
    //console.log(this.arrUsers)
  }

  async goToPage(pNum: number) {
    this.page = pNum;
    const peticion = await this.usersService.getByPage(pNum);
    this.arrUsers = peticion.data;
  }

}
