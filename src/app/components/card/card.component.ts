import { Component } from '@angular/core';
import { CarCard } from 'src/app/models/models';
import {Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('card') car!: CarCard
}