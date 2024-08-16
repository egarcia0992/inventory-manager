package com.example.inventory.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @NotNull(message = "Count cannot be null.")
    @PositiveOrZero(message = "Count must be zero or a positive integer.")
    private int count;
    @NotNull(message = "Price cannot be null.")
    @Min(value = 0, message = "Price must be zero or a positive number.")
    private double price;

    public Product(int id, String name, int count, double price) {
        this.id = id;
        this.name = name;
        this.count = count;
        this.price = price;
    }

    @JsonProperty("productId")
    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonProperty("productName")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("productPrice")
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @JsonProperty("productCount")
    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Product() {
    }
}

