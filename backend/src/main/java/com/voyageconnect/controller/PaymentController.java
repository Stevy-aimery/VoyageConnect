package com.voyageconnect.controller;

import com.voyageconnect.model.Payment;
import com.voyageconnect.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Payment> processPayment(@RequestParam Long reservationId, @RequestParam String stripeToken) {
        Payment payment = paymentService.processPayment(reservationId, stripeToken);
        return ResponseEntity.ok(payment);
    }

    // Add more payment-related endpoints as needed
}

