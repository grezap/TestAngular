import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test for recipes', 'https://cdn.pixabay.com/photo/2017/11/08/15/31/cookies-2930770_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
