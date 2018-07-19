package com.raja.restws.serviceImpl;

import java.util.List;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.raja.restws.models.Vehicle;
import com.raja.restws.repos.VehicleRepository;
import com.raja.restws.services.VehicleService;

@Service
public class VehicleServiceImpl implements VehicleService{

	@Autowired
	VehicleRepository repository;
	
	@Override
	public List<Vehicle> getVehicles() {
		return repository.findAll();
	}
	

	@Override
	public Vehicle getVehicleById(int id) {
		System.out.println("came-->"+repository.findById(id).get());
		return repository.findById(id).get();
	}
	

	@Override
	public Response addVehicle(Vehicle vehicle) {
		if(checkVin(vehicle.getVin())) {
			System.out.println("came into post");
		}
		Vehicle newVehicle = repository.save(vehicle);
		return Response.ok(newVehicle).build();
	}

	@Override
	public Response updateVehicle(Vehicle updatedVehicle) {
		Vehicle newVehicle = repository.save(updatedVehicle);
		return Response.ok(newVehicle).build();
	}

	@Override
	public boolean deleteVehicle(int vin) {
		try{
			repository.deleteById(vin);
			return true;
		}catch(EmptyResultDataAccessException e) {
			return false;
		}
	}
	

	private boolean checkVin(int integer) {
		List<Vehicle> allVehicles = getVehicles();
		boolean vinPresent = false;
		for (Vehicle vehicle : allVehicles) {
			if(integer == (vehicle.getVin())){
				vinPresent = true;
				break;
			}
		}
		return vinPresent;
	}

}
