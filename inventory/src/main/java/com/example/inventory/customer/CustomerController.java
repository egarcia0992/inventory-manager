package com.example.inventory.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://app-240820233891-b4aad9dyfcdmgna3.centralus-01.azurewebsites.net") // Change this to the frontend's URL
@RestController
@RequestMapping(path = "customers")
public class CustomerController {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/all-customers")
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @GetMapping("/find-customer/{name}")
    public ResponseEntity<List<Customer>> getCustomerByName(@PathVariable String name) {
        List<Customer> customers = customerRepository.findByName(name);
        if (customers.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(customers);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(
            @PathVariable Long id,
            @RequestBody Customer updatedCustomer) {

        return customerRepository.findById(id)
                .map(customer -> {
                    customer.setName(updatedCustomer.getName());
                    customer.setEmail(updatedCustomer.getEmail());
                    Customer savedCustomer = customerRepository.save(customer);
                    return ResponseEntity.ok(savedCustomer);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        if (customerRepository.existsById(id)) {
            customerRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add-customer")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer newCustomer) {
        newCustomer.setCreatedAt(null);
        Customer savedCustomer = customerRepository.save(newCustomer);
        return ResponseEntity.ok(savedCustomer);
    }

    @GetMapping("/newest-customers")
    public List<Customer> getNewestCustomers() {
        return customerRepository.findFiveNewestCustomers();
    }
}
