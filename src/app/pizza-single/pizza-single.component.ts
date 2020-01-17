import { Component, OnInit } from '@angular/core';
import { ActivateRoute} from '@angular/router';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	private pizzaService: PizzaService
  	) { }

  ngOnInit() {
  	// je recupere id de la pizza dans l'url
  	// equivalent au $_GET['id']
  	let id = this.route.snapshot.paramMap.get('id');
  console.log(this.route.snapshot.paramMap.get('id'));
  }

}
