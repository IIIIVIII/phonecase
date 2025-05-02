package com.example.phonecase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.phonecase.entity.ShoppingCart;
import java.util.List;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    List<ShoppingCart> findByUserId(Long userId);
}
