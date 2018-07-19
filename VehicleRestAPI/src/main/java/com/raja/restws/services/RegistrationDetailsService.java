package com.raja.restws.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.raja.restws.models.RegistrationDetails;

@Consumes("application/json")
@Produces("application/json")
@Path("/registrationservice")
public interface RegistrationDetailsService {
	
	@POST
	@Path("/register")
	public boolean register(RegistrationDetails userDetails);
	
	@GET
	@Path("/checkuser")
	public boolean checkEmailId(String email);
	
	@POST
	@Path("/logincheck")
	public boolean validateUser();

}
