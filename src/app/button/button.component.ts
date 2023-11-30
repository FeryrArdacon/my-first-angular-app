import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  // Properties
  greetingVisible = true;
  @Input() text = '';

  // Events
  @Output() showGreeting = new EventEmitter<boolean>();

  toogleGreeting(): void {
    this.greetingVisible = !this.greetingVisible;
    this.showGreeting.emit(this.greetingVisible);
  }
}
