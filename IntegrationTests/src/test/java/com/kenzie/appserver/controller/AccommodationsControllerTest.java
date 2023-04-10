package com.kenzie.appserver.controller;


import com.kenzie.appserver.IntegrationTest;
import com.kenzie.appserver.controller.model.AccommodationCreateRequest;
import com.kenzie.appserver.repositories.model.AccommodationRecord;
import com.kenzie.appserver.service.AccommodationService;
import com.kenzie.appserver.service.model.Accommodation;
import net.andreinc.mockneat.MockNeat;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.testcontainers.shaded.com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Collections;
import java.util.Set;
import java.util.UUID;

import static java.util.UUID.randomUUID;
import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.testcontainers.shaded.com.google.common.base.CharMatcher.any;

@IntegrationTest
public class AccommodationsControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    AccommodationService accommodationService;

    private final MockNeat mockNeat = MockNeat.threadLocal();

    private final ObjectMapper mapper = new ObjectMapper();

    // This test posts accommodations and then finds all accommodations
    // This tests both the addNewAccommodation method and the getAll method for happy case
    @Test
    public void findAllAccommodations_findSuccessful() throws Exception {
        // GIVEN
        String id = null;
        String accessibilityNeed = mockNeat.strings().valStr();
        Set<String> accommodations = Collections.singleton(mockNeat.strings().valStr());

        AccommodationCreateRequest accommodationCreateRequest = new AccommodationCreateRequest();
        accommodationCreateRequest.setAccessibilityNeed(accessibilityNeed);
        accommodationCreateRequest.setAccommodations(accommodations);

        Accommodation accommodation = new Accommodation(id,
                accommodationCreateRequest.getAccessibilityNeed(),
                accommodationCreateRequest.getAccommodations());

        mvc.perform(post("/accommodations")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(mapper.writeValueAsString(accommodationCreateRequest)));

        // WHEN
        mvc.perform(get("/accommodations/all")
                    .accept(MediaType.APPLICATION_JSON))

        // THEN
                    .andExpect(status().isOk());
    }

    // This tests the get by id method for the bad case
    // ideally we would also test for the happy case
    @Test
    public void findAccommodationById_AccommodationsDoesNotExist() throws Exception {
        // GIVEN
        String id = UUID.randomUUID().toString();

        // WHEN
        mvc.perform(get("/accommodations/{id}", id)
                .accept(MediaType.APPLICATION_JSON))

        // THEN
                .andExpect(status().isNotFound());
    }

}
