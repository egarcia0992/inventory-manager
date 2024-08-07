package com.example.inventory.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int count;

    public Product(int id, String name, int count) {
        this.id = id;
        this.name = name;
        this.count = count;
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

