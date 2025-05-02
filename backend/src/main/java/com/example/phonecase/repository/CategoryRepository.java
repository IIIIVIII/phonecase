package com.example.phonecase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.phonecase.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
