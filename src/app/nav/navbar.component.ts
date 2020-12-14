import {Component} from "@angular/core";
import {NavbarService} from './navbar.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none}}
  `]
})

export class NavbarComponent {

  constructor(private navbarService: NavbarService) {
  }

  public checkCore() {
    console.log('checkCore');
    this.navbarService.testCore().subscribe((res) => {
      console.log('succ');
      console.log(res);
    }, error => {});
  }


}
