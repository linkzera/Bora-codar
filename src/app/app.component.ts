import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isStaticImage = true;
  buyed = false;
  handleChange(event: Event) {
    event.preventDefault();
    this.isStaticImage = !this.isStaticImage;
  }

  handleBuy(event: Event) {
    event.preventDefault();
    this.buyed = !this.buyed;
    console.log(this.buyed);
  }
}
