package com.kenzie.appserver.service.model;

import java.util.Set;

public class Request {

    private String requestId;
    private String name;
    private Set<String> accommodation;
    private String timeStamp;

    public Request(String requestId, String name,
                   Set<String> accommodation, String timeStamp) {
        this.requestId = requestId;
        this.name = name;
        this.accommodation = accommodation;
        this.timeStamp = timeStamp;
    }

    public String getRequestId() {
        return requestId;
    }

    public String getName() {
        return name;
    }

    public Set<String> getAccommodation() {
        return accommodation;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

}
