import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle/vehicle.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {
  
  select_options = ['Type', 'Brand', 'Color', 'EngineType', 'Year' ];
  
  submitted = false;
  averageBy: String = '';

  constructor() { }

  onSubmit(ngForm : NgForm){
    const avgBy = ngForm.value.averageBy;
    console.log("selection--> "+ngForm.value.averageBy);
    this.submitted = true;
    this.averageBy = avgBy;
    return true;
  }

  ngOnInit() {

  }

}
