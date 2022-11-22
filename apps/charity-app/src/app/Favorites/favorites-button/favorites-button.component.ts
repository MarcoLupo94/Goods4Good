import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'charity-app-production-favorites-button',
  templateUrl: './favorites-button.component.html',
  styleUrls: ['./favorites-button.component.css']
})
export class FavoritesButtonComponent implements OnInit {
  constructor() {}

  @Input() isFavorite = false;

  ngOnInit(): void {}
}
