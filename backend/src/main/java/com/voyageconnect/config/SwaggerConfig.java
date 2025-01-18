package com.voyageconnect.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("VoyageConnect API")
                        .version("1.0")
                        .description("API for VoyageConnect - Travel Agency Management System (Gestion des offres de voyage)\n Application de gestion d'agence de voyage")
                        .contact(new Contact()
                                .name("Stevy-Aimery")
                                .url("https://stevy-aimery.github.io/My-Portfolio/")
                                .email("stevyaimery@example.com")
                        )
                        .termsOfService("https://www.example.com/terms")
                        .license(new io.swagger.v3.oas.models.info.License()
                                .name("API License")
                                .url("https://www.example.com/license")
                        )
                );
    }
}
