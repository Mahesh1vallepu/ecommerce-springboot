package com.telusko.ecom.proj.service;

import com.telusko.ecom.proj.model.Product;
import com.telusko.ecom.proj.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    public List<Product> getAllproducts() {
        return repo.findAll();
    }

    public Product productById(int id)
    {
        return repo.findById(id).get();
    }
    public Product saveProduct(Product prod) {
        return repo.save(prod);
    }
}