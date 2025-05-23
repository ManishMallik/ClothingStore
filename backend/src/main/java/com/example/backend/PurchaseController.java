package com.example.backend;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/purchase")
public class PurchaseController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from PurchaseController!";
    }

    @GetMapping("/test")
    public String test() {
        return "Test endpoint in PurchaseController!";
    }

}
