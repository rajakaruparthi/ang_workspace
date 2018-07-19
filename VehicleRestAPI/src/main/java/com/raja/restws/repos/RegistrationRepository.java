package com.raja.restws.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.raja.restws.models.RegistrationDetails;

public interface RegistrationRepository extends JpaRepository<RegistrationDetails, String> {

}
