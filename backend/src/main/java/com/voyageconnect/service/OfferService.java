package com.voyageconnect.service;

import com.voyageconnect.model.Offer;
import com.voyageconnect.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    /**
     * 🔎 Recherche des offres avec des critères facultatifs.
     */
    public List<Offer> searchOffers(String destination, LocalDate startDate, LocalDate endDate) {
        if (destination == null && startDate == null && endDate == null) {
            return offerRepository.findAll(); // Renvoyer toutes les offres si aucun critère n'est fourni
        }

        return offerRepository.findByDestinationAndDateRange(destination, startDate, endDate);
    }

    /**
     * ➕ Création d'une nouvelle offre avec validation.
     */
    @Transactional
    public Offer createOffer(Offer offer) {
        if (offer == null || offer.getDestination() == null || offer.getStartDate() == null || offer.getEndDate() == null) {
            throw new IllegalArgumentException("❌ Les champs de l'offre ne peuvent pas être vides.");
        }

        if (offer.getEndDate().isBefore(offer.getStartDate())) {
            throw new IllegalArgumentException("🚨 La date de fin ne peut pas être avant la date de début.");
        }

        return offerRepository.save(offer);
    }

    /**
     * 🔍 Récupération d'une offre par ID.
     */
    public Offer getOfferById(Long id) {
        return offerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("❌ Offre non trouvée avec l'ID : " + id));
    }

    /**
     * ✏️ Mise à jour d'une offre existante.
     */
    @Transactional
    public Offer updateOffer(Long id, Offer offerDetails) {
        Offer existingOffer = offerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("❌ Offre non trouvée avec l'ID : " + id));

        existingOffer.setDestination(offerDetails.getDestination());
        existingOffer.setStartDate(offerDetails.getStartDate());
        existingOffer.setEndDate(offerDetails.getEndDate());
        existingOffer.setPrice(offerDetails.getPrice());

        return offerRepository.save(existingOffer);
    }

    /**
     * 🗑️ Suppression d'une offre par ID.
     */
    @Transactional
    public void deleteOffer(Long id) {
        if (!offerRepository.existsById(id)) {
            throw new RuntimeException("❌ Offre non trouvée avec l'ID : " + id);
        }
        offerRepository.deleteById(id);
    }

    /**
     * 📌 Récupération de toutes les destinations distinctes disponibles.
     */
    public List<String> getAllDestinations() {
        return offerRepository.findAll().stream()
                .map(Offer::getDestination)
                .distinct()
                .collect(Collectors.toList());
    }
}
