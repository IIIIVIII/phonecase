package com.example.phonecase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.phonecase.entity.Product;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // 根据 categoryId 过滤产品
    List<Product> findByCategoryId(Long categoryId);
}
