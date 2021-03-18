import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }
  car: Car
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getDetail(params["id"]);
    })
    
  }

  getDetail(carId: number){
    this.carService.getCarDetail(carId).subscribe(response=>{
      this.car = response.data
    })
  }

}
