package com.townmarket.townmarket.repository;

//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.townmarket.townmarket.model.Developer;

@RepositoryRestResource
public interface DeveloperRepository extends JpaRepository<Developer,Long>{

}