package com.kenzie.appserver.service;

import com.kenzie.appserver.repositories.AccommodationRepository;
import com.kenzie.appserver.repositories.model.AccommodationRecord;
import com.kenzie.appserver.service.model.Accommodation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.*;

import static java.util.UUID.randomUUID;
import static org.mockito.Mockito.*;

public class AccommodationServiceTest {
    private AccommodationRepository accommodationRepository;
    private AccommodationService accommodationService;

    @BeforeEach
    void setup() {
        accommodationRepository = mock(AccommodationRepository.class);
        accommodationService = new AccommodationService(accommodationRepository);
    }
    /** ------------------------------------------------------------------------
     *  accommodationService.findById
     *  ------------------------------------------------------------------------ **/

    @Test
    void findById() {
        // GIVEN
        String id = randomUUID().toString();
        String accessibilityNeed = "Sensory Sensitivity";
        Set<String> accommodationsList = new HashSet<>();
        accommodationsList.add("Noise-cancelling headphones");
        accommodationsList.add("Dimmed lighting");
        Accommodation accommodation = new Accommodation(id, accessibilityNeed, accommodationsList);
        AccommodationRecord record = new AccommodationRecord();
        record.setId(id);
        record.setAccessibilityNeed(accessibilityNeed);
        record.setAccommodations(accommodationsList);

        // WHEN
        when(accommodationRepository.findById(id)).thenReturn(Optional.of(record));
//        when(accommodationRepository.findById(id)).thenReturn(Optional.of(accommodation));
        Accommodation returnedAccommodation = accommodationService.findById(id);

        // THEN
        Assertions.assertEquals(accommodation, returnedAccommodation);
    }

    //Ideally this would throw a different kind of exception but right now we are going for complete not ideal
    @Test
    void findById_invalidId_throwsNullPointerException(){
        //GIVEN
        //WHEN
        //THEN
        Assertions.assertThrows(NullPointerException.class, () -> accommodationService.findById(null));
    }

    /** ------------------------------------------------------------------------
     *  accommodationService.findAll
     *  ------------------------------------------------------------------------ **/

    @Test
    void findAll() {
        //GIVEN
        List<AccommodationRecord> accommodationRecordList = new ArrayList<>();
        AccommodationRecord record1 = new AccommodationRecord();
        AccommodationRecord record2 = new AccommodationRecord();
        String id1 = randomUUID().toString();
        String id2 = randomUUID().toString();
        Set<String> list1 = new HashSet<>();
        list1.add("Noise-cancelling headphones");
        list1.add("Dimmed lighting");
        Set<String> list2 = new HashSet<>();
        list2.add("All instructions and feedback in writing");
        record1.setId(id1);
        record1.setAccessibilityNeed("Sensory Sensitivity");
        record1.setAccommodations(list1);
        record2.setId(id2);
        record2.setAccessibilityNeed("Auditory Processing");
        record2.setAccommodations(list2);
        accommodationRecordList.add(record1);
        accommodationRecordList.add(record2);

        when(accommodationRepository.findAll()).thenReturn(accommodationRecordList);

        //WHEN
        List<Accommodation> returnedList = accommodationService.findAll();

        //THEN
        Assertions.assertEquals(id1, returnedList.get(0).getId());
        Assertions.assertEquals("Auditory Processing", returnedList.get(1).getAccessibilityNeed());
        Assertions.assertEquals(list1, returnedList.get(0).getAccommodations());
    }

    @Test
    void findAll_noAccommodations_returnsEmptyList(){
        //GIVEN
        List<AccommodationRecord> accommodationRecordList = new ArrayList<>();
        when(accommodationRepository.findAll()).thenReturn(accommodationRecordList);

        //WHEN
        List<Accommodation> returnedList = accommodationService.findAll();

        //THEN
        Assertions.assertTrue(returnedList.isEmpty());
    }

    /** ------------------------------------------------------------------------
     *  accommodationService.addNewAccommodation
     *  ------------------------------------------------------------------------ **/

    @Test
    void addNewAccommodation(){
        //GIVEN
        AccommodationRecord record1 = new AccommodationRecord();
        String id1 = randomUUID().toString();
        Set<String> list1 = new HashSet<>();
        list1.add("Noise-cancelling headphones");
        record1.setId(id1);
        record1.setAccessibilityNeed("Sensory Sensitivity");
        record1.setAccommodations(list1);
        Accommodation accommodation = new Accommodation(id1, "Sensory Sensitivity", list1);

        //WHEN
        accommodationService.addNewAccommodation(accommodation);

        //THEN
        verify(accommodationRepository).save(record1);
    }

    //Ideally this would throw a different kind of exception but right now we are going for complete not ideal
    @Test
    void addNewAccommodation_nullAccommodation_throwsNullPointerException(){
        //GIVEN
        Accommodation accommodation = null;

        //WHEN
        //THEN
        Assertions.assertThrows(NullPointerException.class, () -> accommodationService.addNewAccommodation(accommodation));
        verifyZeroInteractions(accommodationRepository);
    }


}
