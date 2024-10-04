package com.townmarket.townmarket.model;

import java.net.URISyntaxException;
import java.util.Collection;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
class ProductController {
    private ProductRepo productRepo;

    public ProductController(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @GetMapping("/products")
    Collection<Product> contacts() {
        return (Collection<Product>) productRepo.findAll();
    }

    @PostMapping("/products")
    ResponseEntity<Product> createContact(@Valid @RequestBody Product product) throws URISyntaxException {
        Product result = productRepo.save(product);
        return ResponseEntity.ok().body(result);
    }
}