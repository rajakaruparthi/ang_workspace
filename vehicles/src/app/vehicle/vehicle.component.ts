import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Vehicle } from './vehicle.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles;
  showEdit : boolean = false;
  subscription: Subscription;
  constructor(private vehicleService : VehicleService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.vehicles = this.vehicleService.getAllVehicles();
    this.subscription = this.vehicleService.vehiclesChanged
      .subscribe(
        (vehicles: Vehicle[]) => {
          this.vehicles = vehicles;
        }
      )
  }

  addNewVehicle(vehicle: Vehicle){
    this.router.navigate(["/vehicles/new"]);
  }

  onEdit(index: number){
    this.router.navigate(["vehicles/"+index]);
    this.vehicleService.startEditing.next(index);
  }


}
