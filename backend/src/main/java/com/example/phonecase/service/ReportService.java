// src/main/java/com/example/phonecase/service/ReportService.java
package com.example.phonecase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Service
public class ReportService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * 按日期范围和可选分类生成销售报表
     * @param startDate "2025-01-01"
     * @param endDate   "2025-12-31"
     * @param categoryId 可选分类ID，null 表示所有分类
     */
    public List<Map<String, Object>> getSalesReport(
            String startDate, String endDate, Long categoryId) {

        // 基本 SQL
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT p.name               AS product_name, ")
                .append("       SUM(od.quantity)    AS total_sold, ")
                .append("       SUM(od.quantity * od.unit_price) AS total_revenue ")
                .append("  FROM orders o ")
                .append("  JOIN order_details od ON o.id = od.order_id ")
                .append("  JOIN products p      ON od.product_id = p.id ")
                .append(" WHERE o.order_date BETWEEN ? AND ? ");

        List<Object> params = new ArrayList<>();
        params.add(startDate + " 00:00:00");
        params.add(endDate   + " 23:59:59");

        // 如果传了 categoryId，就加上过滤
        if (categoryId != null) {
            sql.append(" AND p.category_id = ? ");
            params.add(categoryId);
        }

        sql.append(" GROUP BY p.name ")
                .append(" ORDER BY total_sold DESC;");

        // 执行 PreparedStatement 查询
        return jdbcTemplate.query(sql.toString(), params.toArray(), (ResultSet rs, int rowNum) -> {
            Map<String,Object> row = new HashMap<>();
            row.put("productName", rs.getString("product_name"));
            row.put("totalSold",    rs.getInt("total_sold"));
            row.put("totalRevenue", rs.getDouble("total_revenue"));
            return row;
        });
    }
}
