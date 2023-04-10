package com.kenzie.appserver.repositories.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import java.util.Objects;
import java.util.Set;

@DynamoDBTable(tableName = "Request")
public class RequestRecord {

    private String requestId;
    private String name;
    private Set<String> accommodation;
    private String timeStamp;

    @DynamoDBHashKey(attributeName = "requestId")
    public String getRequestId() {
        return requestId;
    }

    @DynamoDBAttribute(attributeName = "name")
    public String getName() {
        return name;
    }

    @DynamoDBAttribute(attributeName = "accommodation")
    public Set<String> getAccommodation() {
        return accommodation;
    }

    @DynamoDBAttribute(attributeName = "timeStamp")
    public String getTimeStamp() {
        return timeStamp;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAccommodation(Set<String> accommodation) {
        this.accommodation = accommodation;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RequestRecord requestRecord = (RequestRecord) o;
        return Objects.equals(requestId, requestRecord.requestId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(requestId);
    }
}
