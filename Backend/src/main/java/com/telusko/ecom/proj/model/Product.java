package com.telusko.ecom.proj.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Double price;
    private String category;
    private String brand;
    private Integer quantity;
    private Boolean available;
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate releaseDate;
//    @JsonProperty("id")
//    private Integer id;
//    @JsonProperty("name")
//    private String name;
//    @JsonProperty("price")
//    private Double price;
//    @JsonProperty("category")
//    private String category;
//    @JsonProperty("brand")
//    private String brand;
//    @JsonProperty("quantity")
//    private Integer quantity;
//    @JsonProperty("available")
//    private Boolean available;
//    @JsonProperty("description")
//    private String description;
//    @JsonFormat(pattern = "yyyy-MM-dd")
//    private LocalDate releaseDate;

}

//@Entity
//public class Product {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    private String name;
//    private Double price;
//    private String category;
//    private String brand;
//    private Integer quantity;
//    private Boolean available;
//    private String description;
//    private LocalDate releaseDate;
//
//    // Default constructor
//    public Product() {}
//
//    // Getters and setters for all fields
//    public Integer getId() { return id; }
//    public void setId(Integer id) { this.id = id; }
//
//    public String getName() { return name; }
//    public void setName(String name) { this.name = name; }
//
//    public Double getPrice() { return price; }
//    public void setPrice(Double price) { this.price = price; }
//
//    public String getCategory() { return category; }
//    public void setCategory(String category) { this.category = category; }
//
//    public String getBrand() { return brand; }
//    public void setBrand(String brand) { this.brand = brand; }
//
//    public Integer getQuantity() { return quantity; }
//    public void setQuantity(Integer quantity) { this.quantity = quantity; }
//
//    public Boolean getAvailable() { return available; }
//    public void setAvailable(Boolean available) { this.available = available; }
//
//    public String getDescription() { return description; }
//    public void setDescription(String description) { this.description = description; }
//
//    public LocalDate getReleaseDate() { return releaseDate; }
//    public void setReleaseDate(LocalDate releaseDate) { this.releaseDate = releaseDate; }
//}
