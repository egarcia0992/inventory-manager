package com.example.inventory.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Additional query methods can be defined here
    List<Customer> findByName(String name);
}
