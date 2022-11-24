import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Charity, User } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { CurrentUserService } from '../utils/current-user.service';
@Component({
  selector: 'charity-app-production-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  charities: Charity[] = [];
  currentSearch: Charity[] = [];
  user!: User;
  options: string[] = [];
  categories: string[] = [];
  currentCat: string = '';
  formValue = '';
  formDisabled = true;

  constructor(
    private api: CharitiesApiService,
    private userService: CurrentUserService,
    private router: Router
  ) {}
  checkValidity() {
    this.currentSearch = this.charities.filter((charity) => {
      return (
        charity.tags.includes(this.currentCat) &&
        charity.name.toLowerCase().includes(this.formValue.toLowerCase())
      );
    });
  }
  ngOnInit(): void {
    this.userService
      .setUser()
      .then(() => {
        this.charities = this.currentSearch = [...this.api.db].sort(
          () => 0.5 - Math.random()
        );
        this.options = this.charities.map((el) => el.name).sort();
        //Extracting all the available categories/tags from charities to use as filter
        const allTags = this.charities
          .map((el) => el.tags)
          .reduce((acc, e) => (acc = [...e, ...acc]), []);
        const uniqueTags = new Set([...allTags]); //Romoving duplicates by converting to Set
        this.categories = Array.from(uniqueTags).sort(); //Converting back to array
        //---------------------------------------------------------------------------
        this.user = this.userService.currentUser;
      })
      .catch((e) => console.log(e));
  }
}

// looping over charities twice
// map and reduce have been used together - reduce will do what map does as well
// 1 single reduce over this.api.db (don't modify)
