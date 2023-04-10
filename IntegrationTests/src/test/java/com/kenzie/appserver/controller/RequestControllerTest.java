package com.kenzie.appserver.controller;


import com.kenzie.appserver.IntegrationTest;
import com.kenzie.appserver.controller.model.RequestCreateRequest;
import com.kenzie.appserver.service.RequestService;
import net.andreinc.mockneat.MockNeat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.shaded.com.fasterxml.jackson.databind.ObjectMapper;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Set;

import static java.util.UUID.randomUUID;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@IntegrationTest
public class RequestControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    RequestService requestService;

    private final MockNeat mockNeat = MockNeat.threadLocal();

    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    public void addNewRequest_addSuccessful() throws Exception {
        // GIVEN
        String id = randomUUID().toString();
        String name = mockNeat.strings().valStr();
        Set<String> accommodations = Collections.singleton(mockNeat.strings().valStr());
        String date = LocalDate.now().toString();

        RequestCreateRequest requestCreateRequest = new RequestCreateRequest();
        requestCreateRequest.setRequestId(id);
        requestCreateRequest.setName(name);
        requestCreateRequest.setAccommodation(accommodations);
        requestCreateRequest.setTimeStamp(date);

        //  WHEN
        mvc.perform(post("/request")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(requestCreateRequest)))

        // THEN
                .andExpect(jsonPath("requestId")
                        .exists())
                .andExpect(jsonPath("name")
                        .value(is(name)))
                .andExpect(jsonPath("accommodation")
                        .exists())
                .andExpect(jsonPath("timeStamp")
                        .exists())
                .andExpect(status().isCreated());

    }

    @Test
    public void getAll_RequestsExist() throws Exception {
        // GIVEN
        String id = randomUUID().toString();
        String name = mockNeat.strings().valStr();
        Set<String> accommodations = Collections.singleton(mockNeat.strings().valStr());
        String date = LocalDate.now().toString();

        RequestCreateRequest requestCreateRequest = new RequestCreateRequest();
        requestCreateRequest.setRequestId(id);
        requestCreateRequest.setName(name);
        requestCreateRequest.setAccommodation(accommodations);
        requestCreateRequest.setTimeStamp(date);

        mvc.perform(post("/request")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(requestCreateRequest)));

        // WHEN
        mvc.perform(get("/request/all")
                        .accept(MediaType.APPLICATION_JSON))

        // THEN
                        .andExpect(status().isOk());
    }

    @Test
    public void findRequests_RequestDoesNotExist() throws Exception {
        // GIVEN
        String id = null;

        // WHEN
        mvc.perform(get("/request/all")
                        .accept(MediaType.APPLICATION_JSON))

        // THEN
                        .andExpect(status().isNoContent());
    }
}
