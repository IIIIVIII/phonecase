// src/main/java/com/example/phonecase/controller/ReportController.java
package com.example.phonecase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.phonecase.service.ReportService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {

    @Autowired
    private ReportService reportService;

    /**
     * Sales report endpoint
     * @param startDate yyyy-MM-dd
     * @param endDate   yyyy-MM-dd
     * @param categoryId 可选
     */
    @GetMapping("/sales")
    public List<Map<String,Object>> getSalesReport(
            @RequestParam String startDate,
            @RequestParam String endDate,
            @RequestParam(required = false) Long categoryId) {

        return reportService.getSalesReport(startDate, endDate, categoryId);
    }
}
