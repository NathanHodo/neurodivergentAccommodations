package com.kenzie.appserver.repositories;

import com.kenzie.appserver.repositories.model.AccommodationRecord;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface AccommodationRepository extends CrudRepository<AccommodationRecord, String> {
}
