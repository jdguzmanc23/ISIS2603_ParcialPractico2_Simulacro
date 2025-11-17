import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './Recipe';
import { Ingredient } from '../ingredient/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Ensalada César',
      2,
      'Clásica ensalada fresca con pollo, crutones y aderezo César, ideal como almuerzo ligero.',
      [
        'Lavar y trocear la lechuga.',
        'Cocinar el pollo a la plancha y cortarlo en tiras.',
        'Mezclar lechuga, pollo, crutones y parmesano.',
        'Agregar el aderezo César y servir.'
      ],
      15,
      'fácil',
      'almuerzo',
      'https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/755f697272cbcdc6e5df2adb44b1b705.jpg',
      ['rápido', 'saludable', 'ensalada'],
      [
        new Ingredient('lechuga romana', '1', 'unidad'),
        new Ingredient('pechuga de pollo', '200', 'gramos'),
        new Ingredient('queso parmesano', '50', 'gramos'),
        new Ingredient('crutones', '1', 'taza')
      ]
    ),
    new Recipe(
      2,
      'Tostadas Francesas',
      2,
      'Desayuno dulce y rápido con pan bañado en mezcla de huevo y leche, dorado a la perfección.',
      [
        'Batir huevos con leche y canela.',
        'Sumergir el pan en la mezcla.',
        'Cocinar en una sartén con mantequilla hasta dorar.',
        'Servir con miel o frutas si se desea.'
      ],
      10,
      'fácil',
      'desayuno',
      'https://cdn.elcocinerocasero.com/imagen/receta/1200/2023-02-24-20-41-28/tostadas-francesas.jpeg',
      ['dulce', 'rápido', 'económico'],
      [
        new Ingredient('pan tajado', '4', 'rebanadas'),
        new Ingredient('huevo', '2', 'unidades'),
        new Ingredient('leche', '100', 'ml')
      ]
    ),
    new Recipe(
      3,
      'Pasta con Tomate y Albahaca',
      2,
      'Plato vegetariano y rápido con sabores italianos frescos, perfecto para una comida ligera.',
      [
        'Hervir la pasta según las instrucciones.',
        'Saltear ajo y tomate en aceite de oliva.',
        'Agregar la albahaca y mezclar con la pasta cocida.',
        'Servir caliente.'
      ],
      20,
      'media',
      'almuerzo',
      'https://d36fw6y2wq3bat.cloudfront.net/recipes/espaguetis-con-tomate-y-albahaca/900/espaguetis-con-tomate-y-albahaca.jpg',
      ['vegetariano', 'rápido', 'italiano'],
      [
        new Ingredient('pasta', '200', 'gramos'),
        new Ingredient('tomates', '3', 'unidades'),
        new Ingredient('ajo', '2', 'dientes'),
        new Ingredient('aceite de oliva', '2', 'cucharadas'),
        new Ingredient('albahaca fresca', '1', 'puñado')
      ]
    ),
    new Recipe(
      4,
      'Sopa de Verduras',
      4,
      'Sopa ligera y nutritiva con vegetales variados, ideal para una cena reconfortante.',
      [
        'Pelar y cortar las verduras.',
        'Hervir el agua y agregar las verduras.',
        'Cocinar por 30 minutos o hasta que estén blandas.',
        'Agregar sal al gusto y servir caliente.'
      ],
      35,
      'fácil',
      'cena',
      'https://www.biotona.be/wp-content/uploads/liver-cleansing-phyto-detox-soup-9_2343c13453aca0a8e8a77fb3e0e75f42_2000.jpg',
      ['ligero', 'vegetariano', 'económico'],
      [
        new Ingredient('zanahoria', '2', 'unidades'),
        new Ingredient('papa', '1', 'unidad'),
        new Ingredient('apio', '2', 'ramas'),
        new Ingredient('agua', '1', 'litro'),
        new Ingredient('sal', 'al gusto', '')
      ]
    ),
    new Recipe(
      5,
      'Arroz con Pollo',
      4,
      'Receta tradicional de arroz sazonado con pollo y vegetales, ideal para una comida familiar completa.',
      [
        'Sofreír la cebolla y el pimentón picados.',
        'Agregar el pollo y dorar.',
        'Añadir el arroz y mezclar bien.',
        'Agregar el agua, tapar y cocinar a fuego bajo hasta que se absorba.'
      ],
      40,
      'media',
      'almuerzo',
      'https://www.paulinacocina.net/wp-content/uploads/2015/02/arroz-con-pollo-troceado-1736933708-1000x1000.jpg',
      ['tradicional', 'completo', 'latino'],
      [
        new Ingredient('arroz', '1', 'taza'),
        new Ingredient('pollo en trozos', '500', 'gramos'),
        new Ingredient('cebolla', '1', 'unidad'),
        new Ingredient('pimentón', '1', 'unidad')
      ]
    )
  ];

  constructor() { }

  findAll(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  findOne(id: number): Observable<Recipe | undefined> {
    const recipe = this.recipes.find(r => r.id === id);
    return of(recipe);
  }
}
