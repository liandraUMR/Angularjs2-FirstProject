import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list";

import { ROUTER_DIRECTIVES } from "@angular/router";





@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent,ROUTER_DIRECTIVES]
})
export class RecipesComponent{

}
