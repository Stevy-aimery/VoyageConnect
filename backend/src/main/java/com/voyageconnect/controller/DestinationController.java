package com.voyageconnect.controller;


import com.voyageconnect.model.Destination;
import com.voyageconnect.service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/destinations")
//@CrossOrigin(origins = "http://localhost:4200")
public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    // Get all destinations
    @GetMapping
    public List<Destination> getAllDestinations() {
        return destinationService.getAllDestinations();
    }

    // Get destination by id
    @GetMapping("/{id}")
    public ResponseEntity<Destination> getDestinationById(@PathVariable Long id) {
        Destination destination = destinationService.getDestinationById(id);
        return ResponseEntity.ok(destination);
    }

    // Get destinations by location
    @GetMapping("/location/{location}")
    public List<Destination> getDestinationsByLocation(@PathVariable String location) {
        return destinationService.getDestinationsByLocation(location);
    }

    // Get destinations by type
    @GetMapping("/type/{type}")
    public List<Destination> getDestinationsByType(@PathVariable String type) {
        return destinationService.getDestinationsByType(type);
    }

    // Get destinations by max price
    @GetMapping("/price/{maxPrice}")
    public List<Destination> getDestinationsByMaxPrice(@PathVariable BigDecimal maxPrice) {
        return destinationService.getDestinationsByMaxPrice(maxPrice);
    }

    // Create new destination
    @PostMapping
    public Destination createDestination(@RequestBody Destination destination) {
        return destinationService.createDestination(destination);
    }

    // Update destination
    @PutMapping("/{id}")
    public ResponseEntity<Destination> updateDestination(@PathVariable Long id, @RequestBody Destination destinationDetails) {
        Destination updatedDestination = destinationService.updateDestination(id, destinationDetails);
        return ResponseEntity.ok(updatedDestination);
    }

    // Delete destination
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDestination(@PathVariable Long id) {
        destinationService.deleteDestination(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}