package com.voyageconnect.repository;

import com.voyageconnect.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDate;
import java.util.List;

public interface OfferRepository extends JpaRepository<Offer, Long> {

    /**
     * 🔎 Recherche d'offres avec des critères facultatifs (destination, startDate, endDate).
     */
    @Query("SELECT o FROM Offer o WHERE " +
            "(:destination IS NULL OR o.destination = :destination) AND " +
            "(:startDate IS NULL OR o.startDate >= :startDate) AND " +
            "(:endDate IS NULL OR o.endDate <= :endDate)")
    List<Offer> findByDestinationAndDateRange(@Param("destination") String destination,
                                              @Param("startDate") LocalDate startDate,
                                              @Param("endDate") LocalDate endDate);
}
