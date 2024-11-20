import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  displayCard: boolean = false;
  cardInStock: string = '';
  stock: string[] = [];
  stockCount: number = 0;
  pile1: string[] = [];
  pile2: string[] = [];
  pile3: string[] = [];
  pile4: string[] = [];
  pile5: string[] = [];
  pile6: string[] = [];
  pile7: string[] = [];

  cardNames: string[] = [
    // Aces
    "ace_of_clubs.svg", "ace_of_diamonds.svg", "ace_of_hearts.svg", "ace_of_spades.svg",

    // Number cards 2-10
    "2_of_clubs.svg", "2_of_diamonds.svg", "2_of_hearts.svg", "2_of_spades.svg",
    "3_of_clubs.svg", "3_of_diamonds.svg", "3_of_hearts.svg", "3_of_spades.svg",
    "4_of_clubs.svg", "4_of_diamonds.svg", "4_of_hearts.svg", "4_of_spades.svg",
    "5_of_clubs.svg", "5_of_diamonds.svg", "5_of_hearts.svg", "5_of_spades.svg",
    "6_of_clubs.svg", "6_of_diamonds.svg", "6_of_hearts.svg", "6_of_spades.svg",
    "7_of_clubs.svg", "7_of_diamonds.svg", "7_of_hearts.svg", "7_of_spades.svg",
    "8_of_clubs.svg", "8_of_diamonds.svg", "8_of_hearts.svg", "8_of_spades.svg",
    "9_of_clubs.svg", "9_of_diamonds.svg", "9_of_hearts.svg", "9_of_spades.svg",
    "10_of_clubs.svg", "10_of_diamonds.svg", "10_of_hearts.svg", "10_of_spades.svg",

    // Face cards
    "jack_of_clubs.svg", "jack_of_diamonds.svg", "jack_of_hearts.svg", "jack_of_spades.svg",
    "queen_of_clubs.svg", "queen_of_diamonds.svg", "queen_of_hearts.svg", "queen_of_spades.svg",
    "king_of_clubs.svg", "king_of_diamonds.svg", "king_of_hearts.svg", "king_of_spades.svg"
  ];

  constructor() { }

  ngOnInit(): void {
    this.shuffleCards()
  }

  shuffleCards() {

    const shuffledArray = this.cardNames.sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < shuffledArray.length; i++) {
      // adding from 0 index to 23 
      if (i < 24) {
        this.stock.push(shuffledArray[i]);

      } else if (i == 24) {
        this.pile1.push(shuffledArray[i])
      }
      else if (i > 24 && i <= 26) {
        this.pile2.push(shuffledArray[i])
      }
      else if (i > 26 && i <= 29) {
        this.pile3.push(shuffledArray[i])
      } else if (i > 29 && i <= 33) {
        this.pile4.push(shuffledArray[i])
      } else if (i > 33 && i <= 38) {
        this.pile5.push(shuffledArray[i])
      } else if (i > 38 && i <= 44) {
        this.pile6.push(shuffledArray[i])
      } else if (i > 44 && i <= 52) {
        this.pile7.push(shuffledArray[i])
      }

    }
    // console.log(shuffledArray)
    // console.log(this.stock)

    // console.log(this.pile2)
    // console.log(this.pile3)
    // console.log(this.pile4)
    // console.log(this.pile5)
    // console.log(this.pile6)
    // console.log(this.pile7)

  }

  showCard() {
    this.displayCard = true;
    this.cardInStock = this.stock[this.stockCount];
    this.stockCount++;

    if (this.stockCount > this.stock.length - 1) {
      this.stockCount = 0;
    }

  }
  drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    console.log(this.pile2)
  }

}
