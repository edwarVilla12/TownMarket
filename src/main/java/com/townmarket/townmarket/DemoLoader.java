package com.townmarket.townmarket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.townmarket.townmarket.model.Developer;
import com.townmarket.townmarket.repository.DeveloperRepository;

@Component
public class DemoLoader implements CommandLineRunner{
    private final DeveloperRepository repository;

    @Autowired
    public DemoLoader(DeveloperRepository repository){
        this.repository = repository;
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


    }
}


