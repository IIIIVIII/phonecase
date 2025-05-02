package com.example.phonecase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.phonecase.entity.Order;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}
