import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehicle } from './vehicle/vehicle.model';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService implements OnInit{

  startEditing = new Subject<number>();
  vehiclesChanged = new Subject<Vehicle[]>();

  private vehicles : Vehicle[] = [];


  // getCustomers(): Promise<Customer[]> {
  //   return this.http.get(this.customersUrl)
  //     .toPromise()
  //     .then(response => response.json() as Customer[])
  //     .catch(this.handleError);
  // }

  constructor(private http: Http) { }

  ngOnInit(){
    
  }

  getVehiclesByIndex(index: number){
    return this.vehicles[index];
  }

  getAllVehicles(){
    if(this.vehiclesChanged.observers.length === 0){
      this.http.get("http://localhost:8080/vehicles/services/vehicleservice/vehicles")
      .subscribe(
        (response) => {
          JSON.parse(response.text()).forEach(value => {
            this.vehicles.push(new Vehicle(value.type, value.vin, value.brand, value.color, value.engine, value.price, value.year));
          });
        }
      );
    }
    return this.vehicles;
  }

  updateVehicles(index:number, newVehicle: Vehicle){
    
    this.vehicles[index] = newVehicle;
    this.vehiclesChanged.next(this.vehicles.slice());
  }

  addVehicle(newVehicle: Vehicle){
    this.vehicles.push(newVehicle);
    this.vehiclesChanged.next(this.vehicles.slice());
  }
  
}
