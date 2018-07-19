package com.raja.restws.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.raja.restws.models.RegistrationDetails;
import com.raja.restws.repos.RegistrationRepository;
import com.raja.restws.services.RegistrationDetailsService;

@Service
public class RegistrationServiceImpl implements RegistrationDetailsService{
	
	@Autowired
	public RegistrationRepository rRepository;
	
	@Override
	public boolean register(RegistrationDetails userDeails) {
		RegistrationDetails newUserDetails = rRepository.save(userDeails);
		return false;
	}

	@Override
	public boolean checkEmailId(String email) {
		rRepository.getOne(email);
		return false;
	}

	@Override
	public boolean validateUser() {
		return false;
	}

}
