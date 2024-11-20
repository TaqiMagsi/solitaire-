import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  displayCard: boolean = false;

  cardsSet: any;

  constructor() { }

  ngOnInit(): void {
  }

  showCard() {
    this.displayCard = true;
  }

}
