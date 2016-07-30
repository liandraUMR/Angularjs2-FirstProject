import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import { RecipeItemComponent } from "./recipe-item.component";


@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Kosaki', 'Kosaki','http://myanimelist.net/images/characters/5/236301.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
