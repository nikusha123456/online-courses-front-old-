import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isDisplayed = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleDisplay(): void {
    this.isDisplayed = !this.isDisplayed;
  }
}
