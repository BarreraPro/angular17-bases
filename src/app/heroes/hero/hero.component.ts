import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 30;

      // propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // method
  getHeroDescription(): string {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }

  changeHero(): void {
     this.name = 'Spiderman';

  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 30;

  }




}
