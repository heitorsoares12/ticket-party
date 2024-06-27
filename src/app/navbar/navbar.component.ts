// src/app/navbar/navbar.component.ts (exemplo)
import { Component, HostBinding } from '@angular/core';
import { faHome, faCalendarAlt, faInfoCircle, faEnvelope, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @HostBinding('attr.data-theme') theme = 'light';
  faHome = faHome;
  faCalendarAlt = faCalendarAlt;
  faInfoCircle = faInfoCircle;
  faEnvelope = faEnvelope;
  faMoon = faMoon;
  faSun = faSun;
  faUser = faUser;
  showEventsMenu = false;
  showMobileMenu = false;
  isDarkTheme = false;



  // Método para alternar a exibição do menu móvel
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.theme = this.theme === 'light' ? 'dark' : 'light'; // Alterna entre 'light' e 'dark'
    localStorage.setItem('theme', this.theme); // Salva o tema escolhido no localStorage
    if(this.theme == 'light'){
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // Método para carregar o tema salvo anteriormente
  loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    this.theme = savedTheme || 'light'; // Carrega o tema salvo ou define como 'light' se não houver tema salvo

  }



  // toggleTheme() {
  //   this.isDarkTheme = !this.isDarkTheme;

  //   // Adicionar ou remover a classe de tema no elemento raiz (por exemplo, body)
  //   if (this.isDarkTheme) {
  //     document.body.classList.add('dark-theme');
  //     document.body.classList.remove('light-theme');
  //   } else {
  //     document.body.classList.add('light-theme');
  //     document.body.classList.remove('dark-theme');
  //   }

  //   // Lógica adicional para persistir o tema (usando local storage, por exemplo)
  //   localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  // }

  // // Método para carregar o tema salvo anteriormente
  // loadSavedTheme() {
  //   const savedTheme = localStorage.getItem('theme');
  //   this.isDarkTheme = savedTheme === 'dark';
  //   this.theme = savedTheme || 'light';
  //   if (this.isDarkTheme) {
  //     document.body.classList.add('dark-theme');
  //   } else {
  //     document.body.classList.add('light-theme');
  //   }
  // }

  // Chamada ao carregar o componente para carregar o tema salvo
  ngOnInit() {
    this.loadSavedTheme();
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
