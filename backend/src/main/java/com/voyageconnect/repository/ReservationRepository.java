package com.voyageconnect.repository;

import com.voyageconnect.model.Reservation;
import com.voyageconnect.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUser(User user);
}