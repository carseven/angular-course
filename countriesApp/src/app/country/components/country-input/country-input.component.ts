import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit {
  @Input()
  public placeholder: string = '';

  @Output()
  public onEnter = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public debouncer: Subject<string> = new Subject();
  public inputCountry: string = '';

  ngOnInit(): void {
    this.subscribeDebounceEvent();
  }

  onSubmit(inputCountry: string): void {
    console.log(inputCountry);
    this.onEnter.emit(inputCountry);
  }

  onKeyPress(): void {
    this.debouncer.next(this.inputCountry);
  }

  private subscribeDebounceEvent(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((inputValue) => this.onDebounce.emit(inputValue));
  }
}
