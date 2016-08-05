import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Kosaki', 'Kosaki','http://myanimelist.net/images/characters/5/236301.jpg',[
      new Ingredient('kapparinos',2),
      new Ingredient('kappas',1)
    ]),
    new Recipe('kisaki', 'kisaki','http://vignette1.wikia.nocookie.net/nisekoi/images/e/e1/Kosaki_Onodera.png/revision/latest?cb=20150912213611',[])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
