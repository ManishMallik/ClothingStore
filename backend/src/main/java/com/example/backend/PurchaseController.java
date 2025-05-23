package com.example.backend;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/purchase")
public class PurchaseController {
    
    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello from PurchaseController!");
    }

    @GetMapping("/test")
    public Map<String, String> test() {
        return Map.of("message", "Test endpoint in PurchaseController!");
    }

}
