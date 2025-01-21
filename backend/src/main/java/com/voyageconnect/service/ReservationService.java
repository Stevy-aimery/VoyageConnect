package com.voyageconnect.service;

import com.voyageconnect.model.Offer;
import com.voyageconnect.model.Reservation;
import com.voyageconnect.model.User;
import com.voyageconnect.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private OfferService offerService;

    @Autowired
    private UserService userService;

    public Reservation createReservation(Long offerId, String username) {
    	User user = userService.getUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Offer offer = offerService.getOfferById(offerId);

        if (offer == null) {
            throw new RuntimeException("Offer not found");
        }

        Reservation reservation = new Reservation(user, offer, LocalDateTime.now(), offer.getPrice(), Reservation.ReservationStatus.PENDING);
        return reservationRepository.save(reservation);
    }

    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));
    }

    public List<Reservation> getUserReservations(String username) {
    	User user = userService.getUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reservationRepository.findByUser(user);
    }
    public void setStatus(Reservation reservation, Reservation.ReservationStatus status) {
        if (reservation == null || status == null) {
            throw new IllegalArgumentException("Reservation and status cannot be null");
        }
        reservation.setStatus(status);
        reservationRepository.save(reservation);
    }
}