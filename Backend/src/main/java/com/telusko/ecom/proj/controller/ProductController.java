package com.telusko.ecom.proj.controller;

import com.telusko.ecom.proj.model.Product;
import com.telusko.ecom.proj.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> getProducts() {
        return service.getAllproducts();
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable int id)
    {
        return service.productById(id);
    }
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product prod) {
        return service.saveProduct(prod);
    }
}