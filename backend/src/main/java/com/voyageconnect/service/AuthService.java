package com.voyageconnect.service;

import com.voyageconnect.dto.LoginRequest;
import com.voyageconnect.dto.LoginResponse;
import com.voyageconnect.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    public LoginResponse login(LoginRequest loginRequest) {
        try {
            System.out.println("🔍 Tentative de connexion avec l'email : " + loginRequest.getEmail());

            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
                )
            );

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String token = jwtUtil.generateToken(userDetails.getUsername());

            System.out.println("✅ Connexion réussie pour : " + userDetails.getUsername());
            return new LoginResponse("Connexion réussie avec succès", token);
        } catch (Exception e) {
            System.out.println("❌ Erreur lors de la connexion : " + e.getMessage());
            throw new RuntimeException("Email ou mot de passe incorrect");
        }
    }


}
