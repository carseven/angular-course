import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        width: 100%;
        height: 100vw;
        border: 1px solid rgba(0, 0, 0, 0.5);
      }

      .sidenav-content {
        padding: 20px;
        height: 100vw;
      }
    `,
  ],
})
export class HomeComponent {
  public isExpanded: boolean = false;
}
