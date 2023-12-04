import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string [] = ['Spiderman', 'iroman', 'thor', 'Hulk'];
  public deleteHero?: string;

  removeLastHero(): void {
     this.deleteHero =  this.heroes.pop();
  }



}
