package com.kenzie.appserver.repositories.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import java.util.Objects;
import java.util.Set;

@DynamoDBTable(tableName = "Accommodation")
public class AccommodationRecord {

    private String id;
    private String accessibilityNeed;
    private Set<String> accommodations;


    @DynamoDBHashKey(attributeName = "Id")
    public String getId() {
        return id;
    }

    @DynamoDBAttribute(attributeName = "AccessibilityNeed")
    public String getAccessibilityNeed() {
        return accessibilityNeed;
    }

    @DynamoDBAttribute(attributeName = "Accommodations")
    public Set<String> getAccommodations() {
        return accommodations;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setAccessibilityNeed(String accessibilityNeed) {
        this.accessibilityNeed = accessibilityNeed;
    }

    public void setAccommodations(Set<String> accommodations) { this.accommodations = accommodations; }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        AccommodationRecord accommodationRecord = (AccommodationRecord) o;
        return Objects.equals(id, accommodationRecord.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
