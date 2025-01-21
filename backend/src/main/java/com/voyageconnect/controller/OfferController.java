package com.voyageconnect.controller;

import com.voyageconnect.model.Offer;
import com.voyageconnect.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/offers")
public class OfferController {

    @Autowired
    private OfferService offerService;

    /**
     * 🔎 Recherche des offres par destination et plage de dates
     */
    @GetMapping("/search")
    public ResponseEntity<?> searchOffers(
            @RequestParam(required = false) String destination,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        try {
            List<Offer> offers = offerService.searchOffers(destination, startDate, endDate);
            
            if (offers.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "❌ Aucune offre trouvée."));
            }
            
            return ResponseEntity.ok(offers);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "🚨 Erreur dans la requête", "details", e.getMessage()));
        }
    }

    /**
     * 📌 Récupérer toutes les destinations disponibles
     */
    @GetMapping
    public ResponseEntity<List<String>> getAllDestinations() {
        List<String> destinations = offerService.getAllDestinations(); 
        return ResponseEntity.ok(destinations);
    }

    /**
     * 🔍 Récupérer une offre par ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getOfferById(@PathVariable Long id) {
        try {
            Offer offer = offerService.getOfferById(id);
            return ResponseEntity.ok(offer);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "❌ Offre non trouvée avec l'ID : " + id));
        }
    }

    /**
     * ➕ Création d'une nouvelle offre (ADMIN uniquement)
     */
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> createOffer(@RequestBody Offer offer) {
        try {
            Offer createdOffer = offerService.createOffer(offer);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOffer);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "❌ Données invalides", "details", e.getMessage()));
        }
    }

    /**
     * ✏️ Modifier une offre existante (ADMIN uniquement)
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateOffer(@PathVariable Long id, @RequestBody Offer offerDetails) {
        try {
            Offer updatedOffer = offerService.updateOffer(id, offerDetails);
            return ResponseEntity.ok(updatedOffer);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "❌ Offre non trouvée avec l'ID : " + id));
        }
    }

    /**
     * 🗑️ Supprimer une offre (ADMIN uniquement)
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteOffer(@PathVariable Long id) {
        try {
            offerService.deleteOffer(id);
            return ResponseEntity.ok(Map.of("message", "✅ Offre supprimée avec succès"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "❌ Offre non trouvée avec l'ID : " + id));
        }
    }
}
