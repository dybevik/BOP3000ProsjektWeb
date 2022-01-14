import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    new Member('Ørjan Dybevik', 'Fullstack & Design', 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    new Member('Sivert Heisholt', 'Backend & API', 'https://images.pexels.com/photos/6981109/pexels-photo-6981109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Member('Sigve Eliassen', 'Frontend & Diagram', 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Member('Govert Dahl', 'Rapport & Testing', 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ]



  constructor() { }

  ngOnInit(): void {
    
  }
}
