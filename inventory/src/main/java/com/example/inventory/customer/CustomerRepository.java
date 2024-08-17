package com.example.inventory.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByName(String name);

    @Query(value = "SELECT TOP 5 * FROM customers ORDER BY created_at DESC", nativeQuery = true)
    List<Customer> findFiveNewestCustomers();
}
