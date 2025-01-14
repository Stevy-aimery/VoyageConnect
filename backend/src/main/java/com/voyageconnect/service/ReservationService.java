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

    /**
     * Crée une nouvelle réservation pour une offre donnée.
     *
     * @param offerId  L'ID de l'offre.
     * @param username Le nom d'utilisateur.
     * @return La réservation créée.
     */
    public Reservation createReservation(Long offerId, String username) {
        User user = userService.getUserByUsername(username);
        Offer offer = offerService.getOfferById(offerId);

        if (offer == null) {
            throw new RuntimeException("Offer not found");
        }

        Reservation reservation = new Reservation(user, offer, LocalDateTime.now(), offer.getPrice(), Reservation.ReservationStatus.PENDING);
        return reservationRepository.save(reservation);
    }

    /**
     * Récupère une réservation par son ID.
     *
     * @param id L'ID de la réservation.
     * @return La réservation correspondante.
     */
    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));
    }

    /**
     * Récupère toutes les réservations d'un utilisateur donné.
     *
     * @param username Le nom d'utilisateur.
     * @return La liste des réservations.
     */
    public List<Reservation> getUserReservations(String username) {
        User user = userService.getUserByUsername(username);
        return reservationRepository.findByUser(user);
    }

    /**
     * Met à jour l'utilisateur associé à une réservation.
     *
     * @param reservation La réservation.
     * @param user        L'utilisateur.
     */
    public void setUser(Reservation reservation, User user) {
        if (reservation == null || user == null) {
            throw new IllegalArgumentException("Reservation and user cannot be null");
        }
        reservation.setUser(user);
        reservationRepository.save(reservation);
    }

    /**
     * Met à jour l'offre associée à une réservation.
     *
     * @param reservation La réservation.
     * @param offer       L'offre.
     */
    public void setOffer(Reservation reservation, Offer offer) {
        if (reservation == null || offer == null) {
            throw new IllegalArgumentException("Reservation and offer cannot be null");
        }
        reservation.setOffer(offer);
        reservation.setTotalPrice(offer.getPrice());
        reservationRepository.save(reservation);
    }

    /**
     * Met à jour la date de réservation.
     *
     * @param reservation La réservation.
     * @param date        La nouvelle date.
     */
    public void setReservationDate(Reservation reservation, LocalDateTime date) {
        if (reservation == null || date == null) {
            throw new IllegalArgumentException("Reservation and date cannot be null");
        }
        reservation.setReservationDate(date);
        reservationRepository.save(reservation);
    }

    /**
     * Met à jour le statut de la réservation.
     *
     * @param reservation La réservation.
     * @param status      Le nouveau statut.
     */
    public void setStatus(Reservation reservation, Reservation.ReservationStatus status) {
        if (reservation == null || status == null) {
            throw new IllegalArgumentException("Reservation and status cannot be null");
        }
        reservation.setStatus(status);
        reservationRepository.save(reservation);
    }
}
