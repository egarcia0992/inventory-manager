package com.example.inventory.product;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Additional query methods can be defined here
    List<Product> findByName(String name);
}

