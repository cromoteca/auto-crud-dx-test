package com.example.application.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;

@Entity
public class Person {

    public static enum Gender {
        MALE, FEMALE, NON_BINARY
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    @Column(columnDefinition = "bigint default 1")
    private Long version;

    private String firstName;

    private String lastName;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private LocalDate birthDate;

    private float height;

    private LocalTime shiftStart;

    private LocalTime shiftEnd;

    private boolean partTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

        public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public LocalTime getShiftStart() {
        return shiftStart;
    }

    public void setShiftStart(LocalTime shiftStart) {
        this.shiftStart = shiftStart;
    }

    public LocalTime getShiftEnd() {
        return shiftEnd;
    }

    public void setShiftEnd(LocalTime shiftEnd) {
        this.shiftEnd = shiftEnd;
    }

    public boolean isPartTime() {
        return partTime;
    }

    public void setPartTime(boolean partTime) {
        this.partTime = partTime;
    }

}
