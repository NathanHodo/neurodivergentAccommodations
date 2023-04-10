package com.kenzie.appserver.service;

import com.kenzie.appserver.repositories.RequestRepository;
import com.kenzie.appserver.repositories.model.RequestRecord;
import com.kenzie.appserver.service.model.Accommodation;
import com.kenzie.appserver.service.model.Request;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.util.UUID.randomUUID;
import static org.mockito.Mockito.*;

public class RequestServiceTest {

    private RequestRepository requestRepository;
    private RequestService requestService;

    @BeforeEach
    void setup(){
        requestRepository = mock(RequestRepository.class);
        requestService = new RequestService(requestRepository);
    }

    /** ------------------------------------------------------------------------
     *  requestService.addNewRequest
     *  ------------------------------------------------------------------------ **/

    @Test
    void addNewRequest(){
        //GIVEN
        String requestId = randomUUID().toString();
        String name = "Sarah Oliason";
        String accommodation = "Noise-cancelling headphones";
        String timeStamp = "test";
        Request request = new Request(requestId, name, accommodation, timeStamp);

        RequestRecord record = new RequestRecord();
        record.setRequestId(requestId);
        record.setName(requestId);
        record.setAccommodation(accommodation);
        record.setTimeStamp(timeStamp);

        //WHEN
        requestService.addNewRequest(request);

        //THEN
        verify(requestRepository).save(record);
    }

    //Ideally this would throw a different kind of exception but right now we are going for complete not ideal
    @Test
    void addNewRequest_nullRequest_throwsNullPointerException(){
        //GIVEN
        //WHEN
        //THEN
        Assertions.assertThrows(NullPointerException.class, () -> requestService.addNewRequest(null));
    }

    /** ------------------------------------------------------------------------
     *  requestService.getAllRequests
     *  ------------------------------------------------------------------------ **/

    @Test
    void getAllRequests(){
        //GIVEN
        RequestRecord record = new RequestRecord();
        record.setRequestId(randomUUID().toString());
        record.setName("Sarah Oliason");
        record.setAccommodation("Noise-cancelling headphones");
        record.setTimeStamp("test");
        List<RequestRecord> recordList = new ArrayList<>();
        recordList.add(record);

        //WHEN
        when(requestRepository.findAll()).thenReturn(recordList);
        List<Request> requestList = requestService.getAllRequests();

        //THEN
        Assertions.assertEquals(record.getRequestId(), requestList.get(0).getRequestId());
        Assertions.assertEquals(record.getName(), requestList.get(0).getName());
        Assertions.assertEquals(record.getAccommodation(), requestList.get(0).getAccommodation());
        Assertions.assertEquals(record.getTimeStamp(), requestList.get(0).getTimeStamp());
    }

    //Ideally this would throw a different kind of exception but right now we are going for complete not ideal
    @Test
    void getAllRequests_noRequests_throwsNullPointerException(){
        //GIVEN
        //WHEN
        //THEN
        Assertions.assertThrows(NullPointerException.class, () -> requestService.getAllRequests());
    }
}
