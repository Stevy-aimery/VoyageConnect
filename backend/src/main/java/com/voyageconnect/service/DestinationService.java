package com.voyageconnect.service;

import com.voyageconnect.model.Destination;
import com.voyageconnect.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.AotInitializerNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.math.BigDecimal;

@Service
public class DestinationService {

    @Autowired
    private DestinationRepository destinationRepository;

    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    public Destination getDestinationById(Long id) {
        return destinationRepository.findById(id)
            .orElseThrow(() -> new AotInitializerNotFoundException(null, "Destination non trouvée avec l'id : " + id));
    }

    public List<Destination> getDestinationsByLocation(String location) {
        return destinationRepository.findByLocationContainingIgnoreCase(location);
    }

    public List<Destination> getDestinationsByType(String type) {
        return destinationRepository.findByTypeIgnoreCase(type);
    }

    public List<Destination> getDestinationsByMaxPrice(BigDecimal maxPrice) {
        return destinationRepository.findByPriceLessThanEqual(maxPrice);
    }

    public Destination createDestination(Destination destination) {
        return destinationRepository.save(destination);
    }

    public Destination updateDestination(Long id, Destination destinationDetails) {
        Destination destination = getDestinationById(id);
        
        destination.setTitle(destinationDetails.getTitle());
        destination.setDescription(destinationDetails.getDescription());
        destination.setLocation(destinationDetails.getLocation());
        destination.setImageUrl(destinationDetails.getImageUrl());
        destination.setPrice(destinationDetails.getPrice());
        destination.setStartDate(destinationDetails.getStartDate());
        destination.setEndDate(destinationDetails.getEndDate());
        destination.setType(destinationDetails.getType());

        return destinationRepository.save(destination);
    }

    public void deleteDestination(Long id) {
        Destination destination = getDestinationById(id);
        destinationRepository.delete(destination);
    }
}