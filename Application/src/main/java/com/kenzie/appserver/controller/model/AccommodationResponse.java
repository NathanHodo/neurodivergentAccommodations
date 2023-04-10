package com.kenzie.appserver.controller.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


import java.util.Date;
import java.util.Set;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AccommodationResponse {

    @JsonProperty("id")
    private String id;

    @JsonProperty("accessibilityNeed")
    private String accessibilityNeed;

    @JsonProperty("accommodations")
    private Set<String> accommodations;

    @JsonProperty("created")
    private Date created;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAccessibilityNeed() {
        return accessibilityNeed;
    }

    public void setAccessibilityNeed(String accessibilityNeed) {
        this.accessibilityNeed = accessibilityNeed;
    }

    public Set<String> getAccommodations() {
        return accommodations;
    }

    public void setAccommodations(Set<String> accommodations) {
        this.accommodations = accommodations;
    }

}
