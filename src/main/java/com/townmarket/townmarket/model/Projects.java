package com.townmarket.townmarket.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data   // Lombok automatically creates getters, setters, and constructors for your class
@Entity // This tells Hibernate to make a table out of this class
public class Projects {

    // This tells Hibernate to make a column named id as the primary key column
    @Id @GeneratedValue long id;
    private String name;
    private String description;
    private String technologies;
    private String type;

    public Projects(){}

    public Projects(String name, String description, String technologies, String type){
        this.name = name;
        this.description = description;
        this.technologies = technologies;
        this.type = type;
    }


    
}
