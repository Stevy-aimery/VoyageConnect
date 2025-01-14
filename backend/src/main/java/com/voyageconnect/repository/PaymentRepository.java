package com.voyageconnect.repository;

import com.voyageconnect.model.Payment;
import com.voyageconnect.model.Reservation;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

	Optional<Payment> findByReservation(Reservation reservation);
}

