package com.townmarket.townmarket.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Product {

    public @Id @GeneratedValue long id;
    public String productName;
    public String prodDesc;
    public String prodVal;

    public Product(){}

    public Product(String productName,String prodDesc, String prodVal){
        this.productName = productName;
        this.prodDesc = prodDesc;
        this.prodVal = prodVal;

    }
}
