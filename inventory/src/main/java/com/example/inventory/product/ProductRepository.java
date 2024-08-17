package com.example.inventory.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByName(String name);

    @Query(value = "SELECT TOP 5 * FROM products ORDER BY count ASC", nativeQuery = true)
    List<Product> findFiveLowestCountProducts();
}

