package com.example.inventory.product;

import com.example.inventory.customer.Customer;
import com.example.inventory.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // Change this to the frontend's URL
@RestController
@RequestMapping(path = "customers")
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/all-customers")
    public List<Customer> getProducts() {
        return productRepository.findAll();
    }
}
