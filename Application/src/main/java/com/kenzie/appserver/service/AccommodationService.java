package com.kenzie.appserver.service;

import com.kenzie.appserver.repositories.model.AccommodationRecord;
import com.kenzie.appserver.repositories.AccommodationRepository;
import com.kenzie.appserver.service.model.Accommodation;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccommodationService {

    private AccommodationRepository accommodationRepository;

    public AccommodationService(AccommodationRepository accommodationRepository) {
        this.accommodationRepository = accommodationRepository;
    }

    public Accommodation findById(String id) {
        Accommodation accommodation = accommodationRepository
                .findById(id)
                .map(acc -> new Accommodation(acc.getId(), acc.getAccessibilityNeed(), acc.getAccommodations()))
                .orElse(null);
        return accommodation;
    }

    public List<Accommodation> findAll() {

        List<Accommodation> accommodations = new ArrayList<>();

        Iterable<AccommodationRecord> accommodationIterator = accommodationRepository.findAll();

        for(AccommodationRecord AccommodationRecord : accommodationIterator) {
            accommodations.add(new Accommodation(AccommodationRecord.getId(),
                    AccommodationRecord.getAccessibilityNeed(),
                    AccommodationRecord.getAccommodations()));
        }

        return accommodations;
    }

    public Accommodation addNewAccommodation(Accommodation accommodation) {

        AccommodationRecord accommodationRecord = new AccommodationRecord();

        accommodationRecord.setId(accommodation.getId());
        accommodationRecord.setAccessibilityNeed(accommodation.getAccessibilityNeed());
        accommodationRecord.setAccommodations(accommodation.getAccommodations());

        accommodationRepository.save(accommodationRecord);

        return accommodation;
    }
}
