import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('homeImg', {static:true}) homeImg: ElementRef<HTMLDivElement>
  @ViewChild('homeTitle', {static:true}) homeTitle: ElementRef<HTMLDivElement>
  constructor() { }

  ngOnInit(): void {

  }

}
