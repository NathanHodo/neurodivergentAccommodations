package com.kenzie.appserver.service.model;
import java.util.Objects;
import java.util.Set;

public class Accommodation {

    private final String id;
    private final String accessibilityNeed;
    private final Set<String> accommodations;

    public Accommodation(String id, String accessibilityNeed, Set<String> accommodations) {
        this.id = id;
        this.accessibilityNeed = accessibilityNeed;
        this.accommodations = accommodations;

    }

    public String getId() {
        return id;
    }

    public String getAccessibilityNeed() {
        return accessibilityNeed;
    }

    public Set<String> getAccommodations() {
        return accommodations;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Accommodation)) return false;
        Accommodation that = (Accommodation) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getAccessibilityNeed(), that.getAccessibilityNeed()) && Objects.equals(getAccommodations(), that.getAccommodations());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getAccessibilityNeed(), getAccommodations());
    }
}
