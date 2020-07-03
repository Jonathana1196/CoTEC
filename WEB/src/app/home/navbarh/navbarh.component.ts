import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbarh',
  templateUrl: './navbarh.component.html',
  styleUrls: ['./navbarh.component.css'],
  providers: []
})
export class NavbarhComponent {

  constructor(private router: Router) { }
}
