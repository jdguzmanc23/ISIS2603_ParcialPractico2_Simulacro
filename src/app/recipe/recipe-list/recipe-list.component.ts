import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeService.findAll().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }
}
