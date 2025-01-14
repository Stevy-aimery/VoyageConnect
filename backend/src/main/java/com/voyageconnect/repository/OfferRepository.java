package com.voyageconnect.repository;

import com.voyageconnect.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface OfferRepository extends JpaRepository<Offer, Long> {
    List<Offer> findByDestinationAndStartDateGreaterThanEqualAndEndDateLessThanEqual(
            String destination, LocalDate startDate, LocalDate endDate);
}

