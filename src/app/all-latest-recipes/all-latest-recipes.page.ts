import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-latest-recipes',
  templateUrl: './all-latest-recipes.page.html',
  styleUrls: ['./all-latest-recipes.page.scss'],
})
export class AllLatestRecipesPage implements OnInit {

  constructor(private router: Router,
              private navCtr: NavController) { }

  ngOnInit() {
  }

}
