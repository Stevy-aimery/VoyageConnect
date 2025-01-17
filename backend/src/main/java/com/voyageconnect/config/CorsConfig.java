package com.voyageconnect.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Autorise tous les endpoints
              .allowedOrigins("https://abcd1234.ngrok.io", "http://localhost:4200") // Liste des origines autorisées
                		//.allowedOriginPatterns("*")// Autorise toutes les origines
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Méthodes HTTP autorisées
                        .allowedHeaders("*") // Tous les en-têtes autorisés
                        .allowCredentials(true) // Autorise les cookies ou sessions
                        .maxAge(3600); // Cache la configuration pendant 1 heure (3600 secondes)
            }
        };
    }
}
