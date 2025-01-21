package com.townmarket.townmarket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.townmarket.townmarket.model.Developer;

import com.townmarket.townmarket.model.Projects;
import com.townmarket.townmarket.repository.DeveloperRepository;
import com.townmarket.townmarket.repository.ProjectsRepository;

@Component
public class DemoLoader implements CommandLineRunner{
    private final DeveloperRepository repository;

    private final ProjectsRepository projectRepository;

    @Autowired
    public DemoLoader(DeveloperRepository repository , ProjectsRepository projectRepository){
        this.repository = repository;
        this.projectRepository = projectRepository;
    }

    @Override
    public void run(String... strings) throws Exception{

        this.repository.save(
            new Developer(
                "Cheton Ovatsug",
                "Oracle Developer",
                "PLSQL - SQL - ORACLE DB - ORACLE CLOUD",
                "Freelance - Full time")
        );

        this.repository.save(
            new Developer(
                "Marta Flores",
                "Java Developer",
                "Java - Spring Boot - Spring Data - Hibernate",
                "Freelance ")
        );

        this.repository.save(
            new Developer(
                "Yeison Camargo",
               "SQL Consultant",
               "PLSQL - SQL - Oracle DB - ORACLE CLOUD",
               "Freelance - Full time - Part time"
            )
        );

        this.repository.save(
            new Developer(
                "Cheton Ovatsug",
                "Oracle Developer",
                "PLSQL - SQL - ORACLE DB - ORACLE CLOUD",
                "Freelance - Full time")
        );

        this.projectRepository.save(
            new Projects( 
                "Digital Library",
                "Digital Library",
                "Java - Spring Boot - Spring Data - Hibernate",
                "Edutaction ")
        );

        this.projectRepository.save(
            new Projects( 
                "Developers Managment system",
                "Developers Managment system",
                "Java - Spring Boot - Spring Data - Hibernate",
                "Work ")
        );


    }
}


