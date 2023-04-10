package com.kenzie.appserver.controller;

import com.kenzie.appserver.controller.model.RequestCreateRequest;
import com.kenzie.appserver.controller.model.RequestResponse;
import com.kenzie.appserver.service.RequestService;
import com.kenzie.appserver.service.model.Request;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import static java.util.UUID.randomUUID;

@RestController
@RequestMapping("/request")
public class RequestController {

    private RequestService requestService;

    RequestController(RequestService requestService) {
        this.requestService = requestService;
    }

    // add a request
    @PostMapping
    public ResponseEntity<RequestResponse> addNewRequest(@RequestBody RequestCreateRequest requestCreateRequest) {

        Request request = new Request(randomUUID().toString(),
                                      requestCreateRequest.getName(),
                                      requestCreateRequest.getAccommodation(),
                                      LocalDateTime.now().toString());

        requestService.addNewRequest(request);

        RequestResponse requestResponse = new RequestResponse();
        requestResponse.setRequestId(request.getRequestId());
        requestResponse.setName(request.getName());
        requestResponse.setAccommodation(request.getAccommodation());
        requestResponse.setTimeStamp(request.getTimeStamp());

        return ResponseEntity.created(URI.create("/request/" + requestResponse.getRequestId())).body(requestResponse);
    }

    // get all requests
    @GetMapping("/all")
    public ResponseEntity<List<RequestResponse>> getAll() {

        List<Request> requestList = requestService.getAllRequests();

        // If there are no requests, then return a 204
        if (requestList == null ||  requestList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        // Otherwise, convert the List of requests into a List of requestResponses and return it
        List<RequestResponse> requestResponseList = new ArrayList<>();

        for (Request request : requestList) {
            requestResponseList.add(createRequestResponse(request));
        }

        return ResponseEntity.ok(requestResponseList);
    }

    private RequestResponse createRequestResponse(Request request) {

        RequestResponse requestResponse = new RequestResponse();
        requestResponse.setRequestId(request.getRequestId());
        requestResponse.setName(request.getName());
        requestResponse.setAccommodation(request.getAccommodation());
        requestResponse.setTimeStamp(request.getTimeStamp());

        return requestResponse;
    }

}
