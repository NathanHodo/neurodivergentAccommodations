package com.kenzie.appserver.service;

import com.kenzie.appserver.repositories.RequestRepository;
import com.kenzie.appserver.repositories.model.RequestRecord;
import com.kenzie.appserver.service.model.Request;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class RequestService {

    private RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    // add a request
    public Request addNewRequest(Request request) {

        RequestRecord requestRecord = new RequestRecord();

        requestRecord.setRequestId(request.getRequestId());
        requestRecord.setName(request.getName());
        requestRecord.setAccommodation(request.getAccommodation());
        requestRecord.setTimeStamp(request.getTimeStamp());

        requestRepository.save(requestRecord);

        return request;
    }

    // get all requests
    public List<Request> getAllRequests() {

        List<Request> requestList = new ArrayList<>();

        Iterable<RequestRecord> requestRecordList = requestRepository.findAll();

        for(RequestRecord requestRecord : requestRecordList) {
            requestList.add(new Request(requestRecord.getRequestId(),
                                        requestRecord.getName(),
                                        requestRecord.getAccommodation(),
                                        requestRecord.getTimeStamp()));
        }

        return requestList;

    }

}
