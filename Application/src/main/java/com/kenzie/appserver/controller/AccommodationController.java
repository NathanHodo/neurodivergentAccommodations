package com.kenzie.appserver.controller;

import com.kenzie.appserver.controller.model.AccommodationCreateRequest;
import com.kenzie.appserver.controller.model.AccommodationResponse;
import com.kenzie.appserver.service.AccommodationService;
import com.kenzie.appserver.service.model.Accommodation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import static java.util.UUID.randomUUID;

@RestController
@RequestMapping("/accommodations")
public class AccommodationController {

    private AccommodationService accommodationService;

    AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccommodationResponse> get(@PathVariable("id") String id) {

        Accommodation accommodation = accommodationService.findById(id);
        if (accommodation == null) {
            return ResponseEntity.notFound().build();
        }

        AccommodationResponse accommodationResponse = new AccommodationResponse();
        accommodationResponse.setId(accommodation.getId());
        accommodationResponse.setAccessibilityNeed(accommodation.getAccessibilityNeed());
        accommodationResponse.setAccommodations(accommodation.getAccommodations());

        return ResponseEntity.ok(accommodationResponse);
    }

    //U1
    @GetMapping("/all")
    public ResponseEntity<List<AccommodationResponse>> getAll() {

        List<Accommodation> accommodationList = accommodationService.findAll();

        // If there are no accommodations, then return a 204
        if (accommodationList == null ||  accommodationList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        // Otherwise, convert the List of accommodations objects into a List of AccommodationsResponses and return it
        List<AccommodationResponse> responseList = new ArrayList<>();

        for (Accommodation accommodation : accommodationList) {
            responseList.add(this.createAccommodationResponse(accommodation));
        }

        return ResponseEntity.ok(responseList);
    }


    // this should add an accommodation to the array of a specific accessiblity need if it doesn't exist
    // this method is only used to seed the database
    // to be able to add an array instead of a string
    @PostMapping
    public ResponseEntity<AccommodationResponse> addNewAccommodation(@RequestBody AccommodationCreateRequest accommodationCreateRequest) {

        Accommodation accommodation = new Accommodation(randomUUID().toString(),
                                        accommodationCreateRequest.getAccessibilityNeed(),
                                        accommodationCreateRequest.getAccommodations());

        accommodationService.addNewAccommodation(accommodation);

        AccommodationResponse accommodationResponse = new AccommodationResponse();
        accommodationResponse.setId(accommodation.getId());
        accommodationResponse.setAccessibilityNeed(accommodation.getAccessibilityNeed());
        accommodationResponse.setAccommodations(accommodation.getAccommodations());

        return ResponseEntity.created(URI.create("/accommodations/" + accommodationResponse.getId())).body(accommodationResponse);
    }

    private AccommodationResponse createAccommodationResponse(Accommodation accommodation) {

        AccommodationResponse accommodationResponse = new AccommodationResponse();
        accommodationResponse.setId(accommodation.getId());
        accommodationResponse.setAccommodations(accommodation.getAccommodations());
        accommodationResponse.setAccessibilityNeed(accommodation.getAccessibilityNeed());

        return accommodationResponse;
    }
}
