package com.example.inventory.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // Change this to the frontend's URL
@RestController
@RequestMapping(path = "products")
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/all-products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
}
