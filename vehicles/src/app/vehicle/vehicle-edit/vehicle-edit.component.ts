import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../vehicle.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') vForm : NgForm;

  editMode = false;
  editedVehicle: Vehicle;
  editedIndex: number;
  subscription: Subscription;

  
  constructor(private vService: VehicleService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const index = this.route.snapshot.params['id'];
    this.vService.startEditing.next(index);
    console.log(this.editMode);
    
    this.subscription = this.vService.startEditing
      .subscribe(
        (index: number) => {
          this.editedIndex = index;
          this.editMode = true;
          this.editedVehicle = this.vService.getVehiclesByIndex(index);
          
          this.vForm.setValue({
            type: this.editedVehicle.type,
            vin: this.editedVehicle.vin,
            brand: this.editedVehicle.brand,
            color: this.editedVehicle.color,
            engine: this.editedVehicle.engine,
            price: this.editedVehicle.price,
            year: this.editedVehicle.year,
          })
        }
      )
      console.log("after-->"+this.editMode);
      if(!this.editMode){
        console.log("came");
        this.vForm.resetForm();
      }
  }


  onSubmit(ngForm: NgForm){
    const value = ngForm.value;
    const newVehicle = new Vehicle(value.type, value.vin, value.brand, value.color, value.engine, value.price, value.year);
    if(this.editMode){
      // Update the existing vehicle 
      this.vService.updateVehicles(this.editedIndex, newVehicle);
    }
    else{
      // Add new vehicle
      this.vService.addVehicle(newVehicle);
    }
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
