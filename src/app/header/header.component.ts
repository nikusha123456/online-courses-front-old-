import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  isDisplayed = false;

  toggleDisplay(): void {
    this.isDisplayed = !this.isDisplayed;
  }
}
