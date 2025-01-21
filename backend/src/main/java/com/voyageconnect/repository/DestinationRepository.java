package com.voyageconnect.repository;

import com.voyageconnect.model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    List<Destination> findByLocationContainingIgnoreCase(String location);
    List<Destination> findByTypeIgnoreCase(String type);
    List<Destination> findByPriceLessThanEqual(BigDecimal price);
}