import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: User | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      let id: number = parseInt(params['iduser'])
      const response = await this.usersService.getById(id);
      this.user = response.data;
      console.log(this.user)
    })
  }

}
