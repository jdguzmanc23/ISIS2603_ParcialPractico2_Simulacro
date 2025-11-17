import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../ingredient/Ingredient';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  maxIngredient: Ingredient | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.findOne(id).subscribe(recipe => {
      if (recipe) {
        this.recipe = recipe;
        this.calculateMaxIngredient();
      } else {
        // Si no se encuentra la receta, redirigir al listado
        this.router.navigate(['/recipe']);
      }
    });
  }

  calculateMaxIngredient(): void {
    if (!this.recipe || !this.recipe.ingredientes || this.recipe.ingredientes.length === 0) {
      return;
    }

    this.maxIngredient = this.recipe.ingredientes.reduce((max, ingredient) => {
      // Convertir la cantidad a número, ignorando texto como "al gusto"
      const currentQty = parseFloat(ingredient.cantidad) || 0;
      const maxQty = parseFloat(max.cantidad) || 0;

      return currentQty > maxQty ? ingredient : max;
    });
  }

  goBack(): void {
    this.router.navigate(['/recipe']);
  }
}
