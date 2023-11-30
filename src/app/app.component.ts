import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  planet = 'Earth';
  greetingVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.planet = 'Pluto';
    }, 3000);
  }

  showGreeting(show: boolean): void {
    this.greetingVisible = show;
  }
}
