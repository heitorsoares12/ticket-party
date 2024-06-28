// src/app/navbar/navbar.component.ts (exemplo)
import { Component, HostBinding } from '@angular/core';
import { faHome, faCalendarAlt, faInfoCircle, faEnvelope, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @HostBinding('attr.data-theme') theme = 'dark';
  faHome = faHome;
  faCalendarAlt = faCalendarAlt;
  faInfoCircle = faInfoCircle;
  faEnvelope = faEnvelope;
  faMoon = faMoon;
  faSun = faSun;
  faUser = faUser;
  showEventsMenu = false;
  showMobileMenu = false;

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}
