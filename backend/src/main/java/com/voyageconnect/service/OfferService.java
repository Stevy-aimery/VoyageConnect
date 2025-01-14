package com.voyageconnect.service;

import com.voyageconnect.model.Offer;
import com.voyageconnect.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    public List<Offer> searchOffers(String destination, LocalDate startDate, LocalDate endDate) {
        return offerRepository.findByDestinationAndStartDateGreaterThanEqualAndEndDateLessThanEqual(
                destination, startDate, endDate);
    }

    public Offer createOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public Offer getOfferById(Long id) {
        return offerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Offer not found"));
    }

    // Add more offer-related methods as needed
}

