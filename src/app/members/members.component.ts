import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    new Member('Ørjan Dybevik', 'Fullstack', 'https://cdn.pixabay.com/photo/2016/02/17/16/32/person-1205346_1280.png'),
    new Member('Sivert Heisholt', 'Backend', 'https://cdn.pixabay.com/photo/2016/02/17/16/32/person-1205346_1280.png'),
    new Member('Sigve Eliassen', 'Frontend', 'https://cdn.pixabay.com/photo/2016/02/17/16/32/person-1205346_1280.png'),
    new Member('Govert Dahl', 'Sekretær', 'https://cdn.pixabay.com/photo/2016/02/17/16/32/person-1205346_1280.png')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
