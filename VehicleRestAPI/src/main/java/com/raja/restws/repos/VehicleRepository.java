package com.raja.restws.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.raja.restws.models.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {

}
