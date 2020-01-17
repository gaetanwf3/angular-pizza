import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
	pizzas: Pizza[] = [];
  constructor(private PizzaService: PizzaService) { }

  ngOnInit() {
  	// on recupere les pizzas via le service sur l'API
  	this.PizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

}
