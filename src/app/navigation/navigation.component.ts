import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'rxd-navigation',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{

  private router : Router = inject(Router);

  routes : Route[] = [];

  ngOnInit(): void {
    this.routes=this.router.config;
  }

}
