import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Member } from './member.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, AfterViewInit {
  @ViewChild('memberCard', {static: true}) memberCard: ElementRef;
  @ViewChild('membersSect', {static: true}) memberSection: ElementRef;
  
  members: Member[] = [
    new Member('Ørjan Dybevik', 'Fullstack & Design', 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'),
    new Member('Sivert Heisholt', 'Backend & API', 'https://images.pexels.com/photos/6981109/pexels-photo-6981109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Member('Sigve Eliassen', 'Frontend & Diagram', 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
    new Member('Govert Dahl', 'Rapport & Testing', 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ]



  

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    gsap.timeline({scrollTrigger:{
      trigger:this.memberSection.nativeElement,
      start:"top 70%",
      end:"bottom top",
      toggleActions:"restart none none reset"
    }})
    .from(this.memberCard.nativeElement.children[0], {yPercent:-50,  stagger:0.05, duration:0.3, ease:"back"})
    .from(this.memberCard.nativeElement.children[1], {yPercent:-50,  stagger:0.05, duration:0.3, ease:"back"})
    .from(this.memberCard.nativeElement.children[2], {yPercent:-50,  stagger:0.05, duration:0.3, ease:"back"})
    .from(this.memberCard.nativeElement.children[3], {yPercent:-50,  stagger:0.05, duration:0.3, ease:"back"})
    .from(this.memberCard.nativeElement, {opacity:0, stagger:0.05, duration:0.1}, 0)
  }

}
