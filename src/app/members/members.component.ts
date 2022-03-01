import { Component, OnInit} from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  members: Member[] = [
    new Member('Ørjan Dybevik', 'Fullstack & Design', '../../assets/images/orjan.jpg', 'https://www.linkedin.com/in/%C3%B8rjan-dybevik-930685222/', 'https://github.com/dyb0'),
    new Member('Sivert Heisholt', 'Backend & API', '../../assets/images/sivert.png', 'https://www.linkedin.com/in/sivert-heisholt-07a697201/', 'https://github.com/sivertheisholt'),
    new Member('Sigve Eliassen', 'Frontend & Diagram', '../../assets/images/sigve.png', '', 'https://github.com/sigve888'),
    new Member('Govert Dahl', 'Rapport & Testing', '../../assets/images/govert.jpg', 'https://www.linkedin.com/in/govertdahl', 'https://github.com/GovDa')
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
