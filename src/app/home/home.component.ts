import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { User } from './models/user.model';
import { Ingredient } from './models/ingredient.model';
import { PizzaService } from '../pizza.service';

  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
selectedPizza: Pizza;
  pizzas: Pizza[];
  user: User = {
    name: 'Rogie',
    firstname: 'Gaetan',
    birthday: '1985-01-04',
    avatar: 'https://www.gravatar.com/avatar/5355a3882df0fdd7689f8b0b5dc50720',
    age: null
  };
  ingredients: Ingredient[] = [
    { name: 'Tomate', image: 'tomate.jpg', weight: 50, price: 2 },
    { name: 'Olive', image: 'olive.jpeg', weight: 5, price: 1 }
  ];
  selectedIngredients: Ingredient[] = [];

// j'injecte le service dans le composant
  constructor(private pizzaService: PizzaService) {
   // constructeur vide
   
  }

// le composant Angular s'initialise
// Document ready pour Angular
ngOnInit() {
   this.calculateAge();
  // On recupere le composant dans le service
   this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);

}


  private calculateAge(): void {
    let currentDate = Date.now(); // 2020-01-16 en timestamp (millisecondes)
    let birthDate = (new Date(this.user.birthday)).getTime(); // 1985-01- en timestamp (millisecondes)
    let timeDiff = currentDate - birthDate;
    let age = (new Date(timeDiff)).getFullYear() - 1970;

    this.user.age = age;
  }

  onSelect(pizza: Pizza): void {
    // On récupère la pizza cliquée
    console.log(pizza);
    this.selectedPizza = pizza;
  }

  selectIngredient(event) {
    console.log(event);

    // si l'ingredient n'est pas encore dans la liste des ingrédients sélectionnés on l'ajoute
    if(!this.selectedIngredients.includes(event)) {
      this.selectedIngredients.push(event);
    }
  }

  deleteIngredient(index: number, event) {
    event.stopPropagation();
    // On supprime l'index du tableau
     this.selectedIngredients.splice(index, 1);
  }
 
}


