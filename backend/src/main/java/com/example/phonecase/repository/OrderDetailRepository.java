package com.example.phonecase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.phonecase.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
