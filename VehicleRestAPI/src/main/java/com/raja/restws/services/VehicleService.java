package com.raja.restws.services;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.raja.restws.models.Vehicle;

@CrossOrigin
@Consumes("application/json")
@Produces("application/json")
@Path("/vehicleservice")
public interface VehicleService {
	

	@GET
	@Path("/vehicles/{id}")
	Vehicle getVehicleById(@PathParam("id") int id);

	@GET
	@Path("/vehicles")
	List<Vehicle> getVehicles();
	
	@POST
	@Path("/vehicles")
	Response addVehicle(Vehicle newVehicle);
	
	@PUT
	@Path("/vehicles")
	Response updateVehicle(Vehicle updatedVehicle);
	
	@DELETE
	@Path("/vehicles/{id}")
	boolean deleteVehicle(@PathParam("id") int id);
	
}
