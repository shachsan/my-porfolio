import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  navLinkSelected='home';
  navClicked=false;

  onNavigate(navLinkSelected:string){
    this.navLinkSelected=navLinkSelected;
    this.navClicked=!this.navClicked;
  }
}
