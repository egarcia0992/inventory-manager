package com.example.inventory.product;

import com.example.inventory.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Customer, Long> {
    // Additional query methods can be defined here
//    List<Customer> findByName(String name);
}

