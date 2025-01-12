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

import com.townmarket.townmarket.model.Projects;
import com.townmarket.townmarket.repository.ProjectsRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
class ProjectsController {

    private ProjectsRepository projectsRepository;

    public ProjectsController(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    @GetMapping("/projects")
    Collection<Projects> contacts() {
        
        return (Collection<Projects>) projectsRepository.findAll();
    }

    @PostMapping("/projects")
    ResponseEntity<Projects> createContact(@Valid @RequestBody  Projects projects ) throws URISyntaxException {
        
        Projects result = projectsRepository.save(projects);

        return ResponseEntity.ok().body(result);
    }
}