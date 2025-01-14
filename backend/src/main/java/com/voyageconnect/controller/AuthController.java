package com.voyageconnect.controller;

import com.voyageconnect.dto.LoginRequest;
import com.voyageconnect.dto.LoginResponse;
import com.voyageconnect.model.User;
import com.voyageconnect.repository.UserRepository;
import com.voyageconnect.service.AuthService;
import com.voyageconnect.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService; // Injection correcte

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = authService.login(loginRequest);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            // Appel au service d'enregistrement
            userService.registerUser(user);
            return ResponseEntity.ok("Utilisateur enregistré avec succès !");
        } catch (RuntimeException ex) {
            // Retourne un message d'erreur en cas d'exception
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}

