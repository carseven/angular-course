import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-alert',
  templateUrl: './no-data-alert.component.html',
})
export class NoDataAlertComponent {
  @Input()
  public showAlert: boolean = false;

  @Input()
  public message: string = 'No data';
}
