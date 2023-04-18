import {Component, OnInit} from '@angular/core';
import {Fruit} from "../fruit";
import {FruitService} from "../fruit.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  fruits : Fruit[] = []
  constructor(private fruitService : FruitService) {
  }
  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data) =>{
      this.fruits = data
    })
  }

  deleteFruit(id : number){
    this.fruitService.delete(id).subscribe({
      next : (data) => {
        this.fruits = this.fruits.filter(_ => _.id != id)
      }
    })
  }

}
