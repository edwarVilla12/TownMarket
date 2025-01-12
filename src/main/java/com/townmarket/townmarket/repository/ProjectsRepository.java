package com.townmarket.townmarket.repository;

//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.townmarket.townmarket.model.Projects;

// This interface extends JpaRepository and marks it as a Spring Data Repository

@RepositoryRestResource
public interface ProjectsRepository extends JpaRepository<Projects,Long>{

}