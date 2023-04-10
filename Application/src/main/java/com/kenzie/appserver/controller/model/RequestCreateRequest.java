package com.kenzie.appserver.controller.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

public class RequestCreateRequest {

    @NotEmpty
    @JsonProperty("requestId")
    private String requestId;

    @JsonProperty("name")
    private String name;

    @JsonProperty("accommodation")
    private Set<String> accommodation;

    @JsonProperty("timeStamp")
    private String timeStamp;

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<String> getAccommodation() {
        return accommodation;
    }

    public void setAccommodation(Set<String> accommodation) {
        this.accommodation = accommodation;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }
}
