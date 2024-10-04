package com.townmarket.townmarket.model;
import com.townmarket.townmarket.model.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner{
    private final ProductRepo repository;

    @Autowired
    public DemoLoader(ProductRepo repository){
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception{
        this.repository.save(new Product("Extractor de impurezas","Extractor de puntos negros","30000"));

    }
}


