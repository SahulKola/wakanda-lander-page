import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  bool: boolean = false;
  mobMenu(event: Event) {
    this.bool = !this.bool;
  }
}
