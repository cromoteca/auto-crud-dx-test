package com.example.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.application.entities.Person;

public interface PersonRepository extends JpaRepository<Person, Long>, JpaSpecificationExecutor<Person> { 

}
