package com.voyageconnect.service;

import com.voyageconnect.model.Payment;
import com.voyageconnect.model.Reservation;
import com.voyageconnect.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ReservationService reservationService;

    /**
     * Traitement d'un paiement pour une réservation donnée.
     *
     * @param reservationId L'ID de la réservation.
     * @param stripeToken   Le token de paiement Stripe.
     * @return Le paiement effectué.
     */
    public Payment processPayment(Long reservationId, String stripeToken) {
        Reservation reservation = reservationService.getReservationById(reservationId);

        if (reservation == null) {
            throw new RuntimeException("Reservation not found");
        }

        // Création d'un paiement
        Payment payment = new Payment(
                reservation,
                reservation.getTotalPrice(),
                LocalDateTime.now(),
                "STRIPE_" + System.currentTimeMillis(),
                Payment.PaymentStatus.COMPLETED
        );

        // Sauvegarde du paiement
        Payment savedPayment = paymentRepository.save(payment);

        // Mise à jour du statut de la réservation
        reservationService.setStatus(reservation, Reservation.ReservationStatus.CONFIRMED);

        return savedPayment;
    }

    /**
     * Récupère un paiement par son ID.
     *
     * @param paymentId L'ID du paiement.
     * @return Le paiement correspondant.
     */
    public Payment getPaymentById(Long paymentId) {
        return paymentRepository.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }

    /**
     * Récupère le paiement lié à une réservation.
     *
     * @param reservation La réservation.
     * @return Le paiement correspondant.
     */
    public Optional<Payment> getPaymentByReservation(Reservation reservation) {
        if (reservation == null) {
            throw new IllegalArgumentException("Reservation cannot be null");
        }
        return paymentRepository.findByReservation(reservation);
    }

    /**
     * Définit la date d'un paiement.
     *
     * @param payment Le paiement.
     * @param date    La date à définir.
     */
    public void setPaymentDate(Payment payment, LocalDateTime date) {
        if (payment == null || date == null) {
            throw new IllegalArgumentException("Payment and date cannot be null");
        }
        payment.setPaymentDate(date);
        paymentRepository.save(payment);
    }

    /**
     * Définit le statut d'un paiement.
     *
     * @param payment Le paiement.
     * @param status  Le statut à définir.
     */
    public void setStatus(Payment payment, Payment.PaymentStatus status) {
        if (payment == null || status == null) {
            throw new IllegalArgumentException("Payment and status cannot be null");
        }
        payment.setStatus(status);
        paymentRepository.save(payment);
    }

    /**
     * Définit l'ID de transaction d'un paiement.
     *
     * @param payment       Le paiement.
     * @param transactionId L'ID de transaction à définir.
     */
    public void setTransactionId(Payment payment, String transactionId) {
        if (payment == null || transactionId == null || transactionId.isEmpty()) {
            throw new IllegalArgumentException("Payment and transactionId cannot be null or empty");
        }
        payment.setTransactionId(transactionId);
        paymentRepository.save(payment);
    }

    /**
     * Définit la réservation associée à un paiement.
     *
     * @param payment     Le paiement.
     * @param reservation La réservation à associer.
     */
    public void setReservation(Payment payment, Reservation reservation) {
        if (payment == null || reservation == null) {
            throw new IllegalArgumentException("Payment and reservation cannot be null");
        }
        payment.setReservation(reservation);
        payment.setAmount(reservation.getTotalPrice());
        paymentRepository.save(payment);
    }
}
