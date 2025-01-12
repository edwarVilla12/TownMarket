package com.townmarket.townmarket.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Developer {

    public @Id @GeneratedValue long id;
    public String developerName;
    public String developerDesc;
    public String developerStack;
    public String developerHiringMode;

    public Developer(){}

    public Developer(String developerName,String developerDesc, String developerStack, String developerHiringMode){
        this.developerName = developerName;
        this.developerDesc = developerDesc;
        this.developerStack = developerStack;
        this.developerHiringMode = developerHiringMode;

    }
}
