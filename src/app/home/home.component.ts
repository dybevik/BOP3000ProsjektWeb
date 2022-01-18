import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homeImg', {static:true}) homeImg: ElementRef
  @ViewChild('homeTitle', {static:true}) homeTitle: ElementRef
  @ViewChild('homeSection', {static:true}) homeSection: ElementRef
  
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

}
