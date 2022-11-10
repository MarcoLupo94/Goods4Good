import { Component, Input, OnInit } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-charity-card',
  templateUrl: './charity-card.component.html',
  styleUrls: ['./charity-card.component.css'],
})
export class CharityCardComponent implements OnInit {
  constructor() {}
  @Input()
  charity!: Charity;
  ngOnInit(): void {}
}
