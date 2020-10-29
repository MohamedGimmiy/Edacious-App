import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  // Default value
  selector: string;
  constructor() { }

  ngOnInit() {
    this.selector = 'Direction';
  }

  select(selector){
    console.log(selector)
    this.selector = selector;
  }
}
