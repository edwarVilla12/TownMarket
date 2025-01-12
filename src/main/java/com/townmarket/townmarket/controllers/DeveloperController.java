package com.townmarket.townmarket.controllers;

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

import com.townmarket.townmarket.model.Developer;
import com.townmarket.townmarket.repository.DeveloperRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
class DeveloperController {
    private DeveloperRepository developerRepository;

    public DeveloperController(DeveloperRepository developerRepository) {
        this.developerRepository = developerRepository;
    }

    @GetMapping("/developers")
    Collection<Developer> contacts() {
        return (Collection<Developer>) developerRepository.findAll();
    }


    @PostMapping("/developers")
    ResponseEntity<Developer> createContact(@Valid @RequestBody Developer developer) throws URISyntaxException {
        Developer result = developerRepository.save(developer);
        return ResponseEntity.ok().body(result);
    }
}